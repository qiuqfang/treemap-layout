import {HierarchyRectangularNode} from "d3-hierarchy";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Node = HierarchyRectangularNode<any>;
export default function partitionArea(
    parent: Node,
    x0: number,
    y0: number,
    x1: number,
    y1: number,
    n = 3
  ): void {
    const nodes: Array<Node> | undefined = parent.children;

    if (!nodes) return;
    const sums: number[] = new Array<number>(nodes.length + 1);

    // 前缀和
    sums[0] = 0;
    for (let sum = 0; sum < nodes.length; sum ++ ) {
      sums[sum + 1] = sums[sum]! + nodes[sum]!.value!;
    }

    const partition = (i: number, j: number, value: number, x0: number, y0: number, x1: number, y1: number): void => {
      if (i >= j - 1) {
        const node: Node = nodes[i]!;
        node.x0 = x0;
        node.y0 = y0;
        node.x1 = x1;
        node.y1 = y1;
        return;
      }

      let valueOffset: number = sums[i]!;
      const segment: number = value / n;
      let k: number = i;
      let xk: number;
      let yk: number;
      let valueSegment: number;

      // 为每个段找到分割点
      for (let m = 1; m < n; ++m) {
        valueSegment = segment * m + valueOffset;
        k = i + 1;
        let hi: number = j - 1;

        while (k < hi) {
          const mid: number = (k + hi) >>> 1;
          if (sums[mid]! < valueSegment) k = mid + 1;
          else hi = mid;
        }

        if ((valueSegment - sums[k - 1]!) < (sums[k]! - valueSegment) && i + 1 < k) --k;

        if ((x1 - x0) > (y1 - y0)) {
          xk = value ? (x0 * (value - sums[k]!) + x1 * (sums[k]! - valueOffset)) / value : x1;
          partition(i, k, sums[k]! - valueOffset, x0, y0, xk, y1);
          x0 = xk; // 更新x0为下一次分割的起点
        } else {
          yk = value ? (y0 * (value - sums[k]!) + y1 * (sums[k]! - valueOffset)) / value : y1;
          partition(i, k, sums[k]! - valueOffset, x0, y0, x1, yk);
          y0 = yk; // 更新y0为下一次分割的起点
        }
        valueOffset = sums[k]!;
      }

      // 处理最后一个段
      partition(k, j, value - valueOffset, x0, y0, x1, y1);
    };

    partition(0, nodes.length, parent.value ?? 0, x0, y0, x1, y1);
  }