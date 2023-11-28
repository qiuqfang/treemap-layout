import { useMemo } from "react";
import { type Tree } from "@/data/data1";
import * as d3 from "d3";
import { cn } from "@/lib/utils";
import { ImagePlaceholder } from "./ImagePlaceholder";

export type TileMethod = typeof d3.treemapSquarify | typeof d3.treemapSliceDice;

type TreemapProps = {
  width: number;
  height: number;
  data: Tree;
  tile: TileMethod;
};

const colors = [
  "#e0ac2b",
  "#6689c6",
  "#a4c969",
  "#e85252",
  "#9a6fb0",
  "#a53253",
  "#7f7f7f",
];

export const Treemap = ({ width, height, data, tile }: TreemapProps) => {
  const containerStyle = {
    width: `${width}px`,
    height: `${height}px`,
  };

  const hierarchy = useMemo(() => {
    return d3.hierarchy(data).sum((d) => d.value);
  }, [data, tile]);

  // List of item of level 1 (just under root) & related color scale
  const firstLevelGroups = hierarchy?.children?.map((child) => child.data.name);
  const colorScale = d3
    .scaleOrdinal<string>()
    .domain(firstLevelGroups ?? [])
    .range(colors);

  const root = useMemo(() => {
    // TODO: padding can be set with theme
    const treeGenerator = d3
      .treemap<Tree>()
      .size([width, height])
      .padding(20)
      .tile(tile);
    return treeGenerator(hierarchy);
  }, [hierarchy, width, height]);

  const allShapes = root.leaves().map((leaf, i) => {
    const parentName = leaf.parent?.data.name;
    const width = leaf.x1 - leaf.x0;
    const height = leaf.y1 - leaf.y0;

    // 动态值仍需使用内联样式
    const dynamicStyles = {
      left: `${leaf.x0}px`,
      top: `${leaf.y0}px`,
      width: `${width}px`,
      height: `${height}px`,
      backgroundColor: colorScale(parentName ?? ""),
    };

    if (leaf.data.name === "图片") {
      return (
        <div
          key={leaf.id}
          style={dynamicStyles}
          className={cn(
            "absolute box-border flex items-center justify-center rounded-lg p-4 opacity-80 transition-opacity duration-200 hover:opacity-100",
            { "opacity-5 hover:opacity-5": leaf.data.name.length === 0 },
            { "flex justify-center": leaf.data.name.length <= 2 },
          )}
        >
          <ImagePlaceholder />
        </div>
      );
    } else if (leaf.data.label && leaf.data.label === "title") {
      return (
        <div
          key={leaf.id}
          style={dynamicStyles}
          className={cn(
            "absolute box-border flex items-center justify-center rounded-lg p-1.5 opacity-80 transition-opacity duration-200 hover:opacity-100",
            { "opacity-5 hover:opacity-5": leaf.data.name.length === 0 },
            { "flex justify-center": leaf.data.name.length <= 2 },
          )}
        >
          <div className={cn("font-mono text-6xl font-bold text-white")}>
            {leaf.data.name}
          </div>
        </div>
      );
    } else {
      return (
        <div
          key={leaf.id}
          style={dynamicStyles}
          className={cn(
            "absolute box-border flex items-start justify-between rounded-lg p-1.5 opacity-80 transition-opacity duration-200 hover:opacity-100",
            { "opacity-5 hover:opacity-5": leaf.data.name.length === 0 },
            { "flex justify-center": leaf.data.name.length <= 2 },
          )}
        >
          <div className={cn("text-2xl text-white")}>{leaf.data.name}</div>
        </div>
      );
    }
  });

  return (
    <div
      className="relative"
      style={containerStyle} // 应用内联样式来设置宽度和高度
    >
      {allShapes}
    </div>
  );
};
