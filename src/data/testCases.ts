import {Tree} from "@/data/data1";

export type NonEmptyArray<T> = [T, ...T[]];

interface TestTexts {
    readonly title1: string;
    readonly title2: string;
    readonly body1: string;
    readonly body2: string;
}
export const testTexts: TestTexts = {
    "title1": "Performance Overview",
    "title2": "Top Posts",
    "body1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    "body2": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n\nNullam ut elementum erat. Proin eu dolor efficitur, bibendum.",
}
export const testCases: NonEmptyArray<Tree> = [
    {
        type: "node",
        name: "平铺目录页",
        value: 0,
        children: [
            {
                type: "node",
                name: "1",
                value: 0,
                children: [
                    { type: "leaf", name: "1", value: 2 },
                    { type: "leaf", name: "Performance Overview", value: 11 },
                ],
            },
            {
                type: "node",
                name: "2",
                value: 0,
                children: [
                    { type: "leaf", name: "2", value: 2 },
                    { type: "leaf", name: "age range", value: 11 },
                ],
            },
            {
                type: "node",
                name: "3",
                value: 0,
                children: [
                    { type: "leaf", name: "3", value: 2 },
                    { type: "leaf", name: "summer marketing budget", value: 11 },
                ],
            },
            {
                type: "node",
                name: "4",
                value: 0,
                children: [
                    { type: "leaf", name: "4", value: 2 },
                    { type: "leaf", name: "Social Media Insights", value: 11 },
                ],
            },
            {
                type: "node",
                name: "5",
                value: 0,
                children: [
                    { type: "leaf", name: "5", value: 2 },
                    { type: "leaf", name: "top posts", value: 11 },
                ],
            },
            {
                type: "node",
                name: "6",
                value: 0,
                children: [
                    { type: "leaf", name: "6", value: 2 },
                    { type: "leaf", name: "top stories", value: 11 },
                ],
            },
        ],
    },
// {
//     type: "node",
//     name: "数值计算目录页",
//     value: 0,
//     children: [
//         {
//             type: "node",
//             name: "1",
//             value: 0,
//             children: [
//                 { type: "leaf", name: "1", value: 2 },
//                 { type: "leaf", name: "Performance Overview", value: 11 },
//                 { type: "leaf", name: "", value: 50 },
//             ],
//         },
//         {
//             type: "node",
//             name: "2",
//             value: 0,
//             children: [
//                 { type: "leaf", name: "2", value: 2 },
//                 { type: "leaf", name: "age range", value: 11 },
//                 { type: "leaf", name: "", value: 50 },
//             ],
//         },
//         {
//             type: "node",
//             name: "3",
//             value: 0,
//             children: [
//                 { type: "leaf", name: "3", value: 2 },
//                 { type: "leaf", name: "summer marketing budget", value: 11 },
//                 { type: "leaf", name: "", value: 50 },
//             ],
//         },
//         {
//             type: "node",
//             name: "4",
//             value: 0,
//             children: [
//                 { type: "leaf", name: "4", value: 2 },
//                 { type: "leaf", name: "Social Media Insights", value: 11 },
//                 { type: "leaf", name: "", value: 50 },
//             ],
//         },
//         {
//             type: "node",
//             name: "5",
//             value: 0,
//             children: [
//                 { type: "leaf", name: "5", value: 2 },
//                 { type: "leaf", name: "top posts", value: 11 },
//                 { type: "leaf", name: "", value: 50 },
//             ],
//         },
//         {
//             type: "node",
//             name: "6",
//             value: 0,
//             children: [
//                 { type: "leaf", name: "6", value: 2 },
//                 { type: "leaf", name: "top stories", value: 11 },
//                 { type: "leaf", name: "", value: 50 },
//             ],
//         },
//     ],
// },
{
    type: "node",
    name: "4图+标题+正文",
    value: 0,
    children: [
        {
            type: "node",
            name: "Team Dataviz",
            value: 0,
            children: [
                { type: "leaf", name: "图片", value: 30 },
                { type: "leaf", name: "图片", value: 30 },
                { type: "leaf", name: "图片", value: 30 },
                { type: "leaf", name: "图片", value: 30 },
            ],
        },
        {
            type: "node",
            name: "Team Sales",
            value: 0,
            children: [
                // { type: "leaf", name: "Mélanie", value: 45 },
                { type: "leaf", name: testTexts.title1, value: 40, label: "title" },
            ],
        },
        {
            type: "node",
            name: "Team Sales",
            value: 0,
            children: [
                // { type: "leaf", name: "Mélanie", value: 45 },
                { type: "leaf", name: testTexts.body1, value: 80 },
            ],
        },
    ],
},
{
    type: "node",
    name: "3组嵌套",
    value: 0,
    children: [
        {
            type: "node",
            name: "Team Dataviz",
            value: 0,
            children: [
                { type: "node", name: "标题正文", value: 0,  children: [
                    { type: "leaf", name: testTexts.title1, value: 20, label: "title" },
                    { type: "leaf", name: testTexts.body2, value: 30 },
                ]},
            ],
        },
        {
            type: "node",
            name: "Team Dataviz",
            value: 0,
            children: [
                {
                    type: "node",
                    name: "Team Dataviz",
                    value: 0,
                    children: [
                        { type: "node", name: "组1", value: 0,  children: [
                            { type: "leaf", name: "图片", value: 15 },
                            { type: "leaf", name: "LIKES", value: 8 },
                            { type: "leaf", name: testTexts.body2, value: 30 },
                        ]},
                    ],
                },
                {
                    type: "node",
                    name: "Team Dataviz",
                    value: 0,
                    children: [
                        { type: "node", name: "组2", value: 0,  children: [
                            { type: "leaf", name: "图片", value: 15 },
                            { type: "leaf", name: "Engagement", value: 8 },
                            { type: "leaf", name: testTexts.body2, value: 30 },
                        ]},
                    ],
                },
                {
                    type: "node",
                    name: "Team Dataviz",
                    value: 0,
                    children: [
                        { type: "node", name: "组3", value: 0,  children: [
                            { type: "leaf", name: "图片", value: 15 },
                            { type: "leaf", name: "Mentions", value: 8 },
                            { type: "leaf", name: testTexts.body2, value: 30 },
                        ]},
                    ],
                },
            ],
        },
    ],
},
{
    type: "node",
    name: "2组嵌套",
    value: 0,
    children: [
        {
            type: "node",
            name: "Team Dataviz",
            value: 0,
            children: [
                { type: "node", name: "标题正文", value: 0,  children: [
                    { type: "leaf", name: testTexts.title1, value: 30, label: "title" },
                    { type: "leaf", name: testTexts.body1, value: 70 },
                ]},
            ],
        },
        {
            type: "node",
            name: "Team Dataviz",
            value: 0,
            children: [
                {
                    type: "node",
                    name: "Team Dataviz",
                    value: 0,
                    children: [
                        { type: "node", name: "组1", value: 0,  children: [
                            { type: "leaf", name: "图片", value: 50 },
                            { type: "leaf", name: "@reallygreatsite", value: 5 },
                            { type: "leaf", name: testTexts.body2, value: 45 },
                        ]},
                    ],
                },
                {
                    type: "node",
                    name: "Team Dataviz",
                    value: 0,
                    children: [
                        { type: "node", name: "组2", value: 0,  children: [
                            { type: "leaf", name: "图片", value: 50 },
                            { type: "leaf", name: "@reallygreatsite", value: 5 },
                            { type: "leaf", name: testTexts.body2, value: 45 },
                        ]},
                    ],
                },
            ],
        },
    ],
},
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
