const contextPages = [
    {
        path: "/whitepaper",
        name: "whitepaper",
        component: () =>// @ts-ignore
            import("../views/Whitepaper.vue"),
        meta: {
            title: "Whitepaper",
            description: "Everything about Parch Linux.",
        },
    },
    {
        path: "/privacy-policy",
        name: "privacy-policy",
        component: () =>// @ts-ignore
            import("../views/PrivacyPolicy.vue"),
        meta: {
            title: "Privacy Policy",
            description: "Check out our Privacy Policy.",
        },
    },
    {
        path: "/os-privacy-policy",
        name: "os-privacy-policy",
        component: () =>// @ts-ignore
            import("../views/OSPrivacyPolicy.vue"),
        meta: {
            title: "OS Privacy Policy",
            description: "Check out the Privacy Policy of Parch Linux (the operating system).",
        },
    },
    {
        path: "/cookies-policy",
        name: "cookies-policy",
        component: () =>// @ts-ignore
            import("../views/CookiesPolicy.vue"),
        meta: {
            title: "Cookies Policy",
            description: "Check out our Cookies Policy.",
        },
    },
    {
        path: "/licenses",
        name: "licenses",
        component: () => // @ts-ignore
            import("../views/Licenses.vue") ,
        meta: {
            title: "Licenses",
            description: "Parch Linux is built on top of many technologies. Check out the licenses.",
        },
    },
    {
        path: "/team",
        name: "team",
        component: () =>// @ts-ignore
            import("../views/Team.vue"),
        meta: {
            title: "Team",
            description: "Meet the people behind Parch Linux.💙🪼",
        },
    },
    {
        path: "/team/contributors",
        name: "team-contributors",
        component: () =>// @ts-ignore
            import("../views/Contributors.vue"),
        meta: {
            title: "Contributors",
            description: "Meet the people who contributed to Parch Linux.✨",
            parent: "team",
        },
    },
    {
        path: "/contribution",
        name: "contribution",
        component: () =>// @ts-ignore
            import("../views/Contribution.vue"),
        meta: {
            title: "Contribution",
            description: "How to contribute in Parch Linux.",
        },
    },
    {
        path: "/code-of-conduct",
        name: "code-of-conduct",
        component: () =>// @ts-ignore
            import("../views/CodeOfConduct.vue"),
        meta: {
            title: "Code of Conduct",
            description: "Everyone must follow our Code of Conduct to be part of Parch Linux.",
        },
    },
    {
        path: "/technologies-and-credits",
        name: "technologies-and-credits",
        component: () =>// @ts-ignore
            import("../views/TechnologiesAndCredits.vue"),
        meta: {
            title: "Technologies and Credits",
            description: "Parch Linux is built on top of many technologies.",
        },
    },
    {
        path: "/community",
        name: "community",
        component: () =>// @ts-ignore
            import("../views/Community.vue"),
        meta: {
            title: "Community",
            description: "Join our community of users and developers.",
        },
    },
    {
        path: "/developers-program",
        name: "developers-program",
        component: () =>// @ts-ignore
            import("../views/DevelopersProgram.vue"),
        meta: {
            title: "Developers Program",
            description: "Join our Developers Program and get access to exclusive content.",
        },
    },
    {
        path: "/download",
        name: "download",
        component: () =>// @ts-ignore
            import("../views/Download.vue"),
        meta: {
            title: "Get Parch Linux",
            description: "Get the latest version.",
        },
    },
    {
        path: "/nerd-info",
        name: "nerd-info",
        component: () =>// @ts-ignore
            import("../views/NerdInfo.vue"),
        meta: {
            title: "Information for Nerds",
            description: "What is Parch Linux from a technical point of view.",
        },
    },
]

export default contextPages;