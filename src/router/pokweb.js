export default [
        {
            path: "/pokweb",
            name: 'HelloWorld',
            component: ()=>(import("../components/HelloWorld.vue"))
        },
        {
            path: '/pokweb/main',
            name: 'Main',
            component: ()=>(import("../components/main/Main.vue"))
        },
        {
            path: '/pokweb2/main',
            name: 'Main2',
            component: ()=>(import("../components/main/Main2.vue"))
        }
]