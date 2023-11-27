import { useMemo } from "react";
import { Tree } from "@/data/data1";
import * as d3 from "d3";

type TreemapProps = {
  width: number;
  height: number;
  data: Tree;
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

export const Treemap = ({ width, height, data }: TreemapProps) => {
  const hierarchy = useMemo(() => {
    return d3.hierarchy(data).sum((d) => d.value);
  }, [data]);

  // List of item of level 1 (just under root) & related color scale
  const firstLevelGroups = hierarchy?.children?.map((child) => child.data.name);
  const colorScale = d3
    .scaleOrdinal<string>()
    .domain(firstLevelGroups ?? [])
    .range(colors);

  const root = useMemo(() => {
      // TODO: padding can be set with theme
    const treeGenerator = d3.treemap<Tree>().size([width, height]).padding(20).tile(d3.treemapResquarify);
    return treeGenerator(hierarchy);
  }, [hierarchy, width, height]);

  const allShapes = root.leaves().map((leaf, i) => {
    const parentName = leaf.parent?.data.name;
    return (
      <g key={leaf.id}>
        <rect
          x={leaf.x0}
          y={leaf.y0}
          width={leaf.x1 - leaf.x0}
          height={leaf.y1 - leaf.y0}
          stroke="transparent"
          fill={colorScale(parentName ?? '')}
          className={"opacity-80 hover:opacity-100"}
        />
        <text
          x={leaf.x0 + 6}
          y={leaf.y0 + 6}
          fontSize={32}
          textAnchor="start"
          alignmentBaseline="hanging"
          fill="white"
          className="font-bold"
        >
          {leaf.data.name}
        </text>
        <text
          x={leaf.x0 + 6}
          y={leaf.y0 + 40}
          fontSize={20}
          textAnchor="start"
          alignmentBaseline="hanging"
          fill="white"
          className="font-light"
        >
          {leaf.data.value}
        </text>
      </g>
    );
  });

  return (
    <div>
      <svg width={width} height={height}>
        {allShapes}
      </svg>
    </div>
  );
};
