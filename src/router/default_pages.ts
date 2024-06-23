const defaultPages = [
    {
        path: "",
        name: "home",
        component: () =>// @ts-ignore
            import("../views/Home.vue"),
        meta: {
            description: "Parch Linux is an operating system built with simplicity in mind. It's fast, lightweight, beautiful and ready for all your daily tasks.",
        },
    },
]

export default defaultPages