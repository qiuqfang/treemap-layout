import {Tree} from "@/data/data1";

export type NonEmptyArray<T> = [T, ...T[]];
export const testCases: NonEmptyArray<Tree> = [
    {
    type: "node",
    name: "主内容较宽",
    value: 0,
    children: [
        {
            type: "node",
            name: "Team Dataviz",
            value: 0,
            children: [
                { type: "leaf", name: "sub point 1", value: 30 },
                { type: "leaf", name: "sub point 2", value: 30 },
                { type: "leaf", name: "sub point 3", value: 30 },
                { type: "leaf", name: "sub point 4", value: 30 },
            ],
        },
        // {
        //   type: "node",
        //   name: "Team DevOps",
        //   value: 0,
        //   children: [
        //     { type: "leaf", name: "Nicolas", value: 98 },
        //     { type: "leaf", name: "Malki", value: 22 },
        //     { type: "leaf", name: "Djé", value: 12 },
        //   ],
        // },
        {
            type: "node",
            name: "Team Sales",
            value: 0,
            children: [
                // { type: "leaf", name: "Mélanie", value: 45 },
                { type: "leaf", name: "Main Content", value: 80 },
            ],
        },
    ],
},
    {
        type: "node",
        name: "主内容较窄",
        value: 0,
        children: [
            {
                type: "node",
                name: "Team Dataviz",
                value: 0,
                children: [
                    { type: "leaf", name: "sub point 1", value: 30 },
                    { type: "leaf", name: "sub point 2", value: 30 },
                    { type: "leaf", name: "sub point 3", value: 30 },
                    { type: "leaf", name: "sub point 4", value: 30 },
                ],
            },
            // {
            //   type: "node",
            //   name: "Team DevOps",
            //   value: 0,
            //   children: [
            //     { type: "leaf", name: "Nicolas", value: 98 },
            //     { type: "leaf", name: "Malki", value: 22 },
            //     { type: "leaf", name: "Djé", value: 12 },
            //   ],
            // },
            {
                type: "node",
                name: "Team Sales",
                value: 0,
                children: [
                    // { type: "leaf", name: "Mélanie", value: 45 },
                    { type: "leaf", name: "Main Content", value: 50 },
                ],
            },
        ],
    },
    {
        type: "node",
        name: "3个组",
        value: 0,
        children: [
            {
                type: "node",
                name: "组1",
                value: 0,
                children: [
                    { type: "leaf", name: "组 1-1", value: 15 },
                    { type: "leaf", name: "组 1-2", value: 15 },
                ],
            },
            {
                type: "node",
                name: "组2",
                value: 0,
                children: [
                    { type: "leaf", name: "组 2", value: 30 },
                ],
            },
            {
                type: "node",
                name: "组3",
                value: 0,
                children: [
                    { type: "leaf", name: "组 3", value: 30 },
                ],
            },
        ],
    },
    {
        type: "node",
        name: "2*2个组",
        value: 0,
        children: [
            {
                type: "node",
                name: "组1",
                value: 0,
                children: [
                    { type: "leaf", name: "组 1-1", value: 25 },
                    { type: "leaf", name: "组 1-2", value: 15 },
                ],
            },
            {
                type: "node",
                name: "组2",
                value: 0,
                children: [
                    { type: "leaf", name: "组 2-1", value: 25 },
                    { type: "leaf", name: "组 2-2", value: 15 },
                ],
            },
        ],
    },
];

//
// export const data: Tree = {
//     type: "node",
//     name: "boss",
//     value: 0,
//     children: [
//         {
//             type: "node",
//             name: "Team Dataviz",
//             value: 0,
//             children: [
//                 { type: "leaf", name: "Mark", value: 90 },
//                 { type: "leaf", name: "Robert", value: 12 },
//                 { type: "leaf", name: "Emily", value: 34 },
//                 { type: "leaf", name: "Marion", value: 53 },
//             ],
//         },
//         {
//             type: "node",
//             name: "Team DevOps",
//             value: 0,
//             children: [
//                 { type: "leaf", name: "Nicolas", value: 98 },
//                 { type: "leaf", name: "Malki", value: 22 },
//                 { type: "leaf", name: "Djé", value: 12 },
//             ],
//         },
//         {
//             type: "node",
//             name: "Team Sales",
//             value: 0,
//             children: [
//                 { type: "leaf", name: "Mélanie", value: 45 },
//                 { type: "leaf", name: "Einstein", value: 76 },
//             ],
//         },
//     ],
// };
