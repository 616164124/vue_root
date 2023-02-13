export default [ 
    {
        path: "/day/01",
        name: "Day01",
        component:()=>(import("../components/day/day01.vue")),
        meta: { title: "css练习" }
    }, {
            path: "/day/02",
            name: "Day02",
            component: () => (import("../components/day/day01.vue")),
            meta: { title: "css练习" }
    },
    {
        path: "/day/03",
        name: "Day03",
        component:()=>(import("../components/day/day03/day03.vue")),
    },
    {
        path: "/day/04",
        name: "Day04",
        component: () => (import("../components/day/day04/day04.vue")),
    },
    {
        path: "/day/05",
        name: "Day05",
        component:()=>(import("../components/day/day05/day05.vue"))
    }
]