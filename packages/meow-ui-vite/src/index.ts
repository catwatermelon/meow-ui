import { createApp } from "vue/dist/vue.esm-bundler.js";

import MeowUI from "./entry";

const list = [
    {
        name: '1',
        show: true,
        children: [
            {
                name: '1-1',
                show: true,
            },
            {
                name: '1-2',
                children: [
                    {
                        name: '1-2-1',
                        show: true,
                    }
                ],
                show: true,
            }
        ]
    },
    {
        name: '2',
        show: true,
        children: [
            {
                name: '2-1',
                show: true,

                children: [
                    {
                        name: '2-1-1',
                        show: true,

                        children: [
                            {
                                name: '2-1-1-1',
                                show: true,

                            }
                        ]
                    },
                    {
                        name: '2-1-2',
                        show: true,

                    }
                ]
            },
        ]
    },
    {
        name: '3',
        show: true,
        children: []
    }
]

createApp({
    template: `
        <div>
            <MTree :list="list"></MTree>
            <MSwitch inactive-text="34" ></MSwitch>
            <MInput  clearable/>
            <MButton type="primary">主要按钮</MButton>
        </div>
    `,
    data() {
        return {
            list
        }
    }
})
    .use(MeowUI)
    .mount("#app");
