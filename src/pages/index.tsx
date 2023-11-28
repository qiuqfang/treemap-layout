import Head from "next/head";
import Link from "next/link";
import {Treemap, type TileMethod} from "@/components/TreeMap";
import {type Tree} from "@/data/data1";
import {testCases} from "@/data/testCases";
import React, {useCallback, useState} from 'react';
import { treemapBinary, treemapDice, treemapSlice, treemapSliceDice, treemapSquarify, treemapResquarify } from "d3";
import TreemapNAry from "@/algorithms/TreemapNAry"
import TreemapTitle from "@/algorithms/TreemapTitle"
import classNames from "classnames";



export default function Home() {
    // State to keep track of the selected testCase
    const [selectedTestCase, setSelectedTestCase] = useState<Tree>(testCases[0]);
    // State to keep track of the selected tile
    const [selectedTile, setSelectedTile] = useState<() => TileMethod>(() => treemapSquarify);

    const tiles = [
        { name: 'Binary', method: treemapBinary },
        { name: 'Dice', method: treemapDice },
        { name: 'Slice', method: treemapSlice },
        { name: 'SliceDice', method: treemapSliceDice },
        { name: 'Squarify', method: treemapSquarify },
        { name: 'Resquarify', method: treemapResquarify },
        { name: '标题优化', method: TreemapTitle, type: 'custom'},

        // { name: 'N-Ary', method: TreemapNAry },
    ];

    // Function to handle testCase button click
    const handleTestCaseClick = (testCase: Tree) => {
        setSelectedTestCase(testCase);
    };

    // Function to handle tile button click
    const handleTileClick = (tileMethod: TileMethod) => {
        console.log('click', tileMethod)
        setSelectedTile(() => tileMethod);
    };

    return (
        <>
            <Head>
                <title>Treemap Test</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
                <div className="flex gap-2 my-1">
                    {/* Buttons to select a testCase */}
                    {testCases.map((testCase, index) => (
                        <button
                            key={'tc'+index}
                            onClick={() => handleTestCaseClick(testCase)}
                            className="rounded bg-white px-4 py-2 text-sm font-medium text-black shadow-sm hover:bg-gray-100"
                        >
                            {testCase.name}
                        </button>
                    ))}
                </div>
                <div className="flex gap-2 my-1">
                    {/* Buttons to select a tile */}
                    {tiles.map((tile, index) => (
                        <button
                            key={'ti'+index}
                            onClick={() => handleTileClick(tile.method)}
                            className={classNames("rounded bg-white px-4 py-2 text-sm font-medium text-black shadow-sm hover:bg-gray-100", {"bg-amber-300 hover:bg-amber-400": tile.type === 'custom'})}
                        >
                            {tile.name}
                        </button>
                    ))}
                </div>
                <div className="container flex flex-col items-center justify-center gap-2 px-4 border-2 border-white rounded-2xl">
                    <Treemap data={selectedTestCase} width={1600} height={900} tile={selectedTile}/>
                </div>
            </main>
        </>
    );
}