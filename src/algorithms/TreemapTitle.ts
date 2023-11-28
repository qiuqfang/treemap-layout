import {HierarchyRectangularNode} from "d3-hierarchy";
import { treemapBinary, treemapDice, treemapSlice, treemapSliceDice, treemapSquarify, treemapResquarify } from "d3";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Node = HierarchyRectangularNode<any>;

// 先slice/dice，再squarify
export default function title(
    parent: Node,
    x0: number,
    y0: number,
    x1: number,
    y1: number) {

    // 可以根据children数量判断？
    // 如果只有两个，根据valu 比例判断：如果占比小于30，只能slice，否则随机
    const children = parent.children;
    if (children && children.length === 2) {
        const value0 = children[0]!.value;
        const value1 = children[1]!.value;

        if (value0 && value1) {
            const ratio = value0 / (value0 + value1);
            if (ratio < 0.33 || ratio > 0.66) {
                console.log('slice', ratio);
                treemapSlice(parent, x0, y0, x1, y1);
            } else {
                console.log('dice', ratio);
                // 改成随机
                treemapDice(parent, x0, y0, x1, y1);
            }
        } else {
            treemapDice(parent, x0, y0, x1, y1);
        }
    }
    else {
        treemapSquarify(parent, x0, y0, x1, y1);
    }
    // (parent. & 1 ? slice : dice)(parent, x0, y0, x1, y1);
}