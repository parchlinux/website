import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
import { useHead } from 'unhead'


export default function createRouterInstance(clientType: string) {
  console.log('creating new router instance')

  const history = clientType === 'server'
    ? createMemoryHistory(import.meta.env.BASE_URL)
    : createWebHistory(import.meta.env.BASE_URL);

  const router = createRouter({
    history,
    routes: [
      {
        path: '/',
        component: () =>// @ts-ignore
          import(/* webpackChunkName: "Main" */ "@/layouts/Main.vue"),
        children: [
          {
            path: "",
            name: "home",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "Home" */ "@/views/Home.vue"),
            meta: {
              description: "Parch Linux is an operating system built with simplicity in mind. It's fast, lightweight, beautiful and ready for all your daily tasks.",
            },
          },
        ]
      },
      {
        path: '/',
        component: () =>// @ts-ignore
          import(/* webpackChunkName: "Pages" */ "@/layouts/Page.vue"),
        children: [
          {
            path: "/privacy-policy",
            name: "privacy-policy",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "PrivacyPolicy" */ "@/views/PrivacyPolicy.vue"),
            meta: {
              title: "Privacy Policy",
              description: "Check out our Privacy Policy.",
            },
          },
          {
            path: "/os-privacy-policy",
            name: "os-privacy-policy",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "PrivacyPolicy" */ "@/views/OSPrivacyPolicy.vue"),
            meta: {
              title: "OS Privacy Policy",
              description: "Check out the Privacy Policy of Parch Linux (the operating system).",
            },
          },
          {
            path: "/cookies-policy",
            name: "cookies-policy",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "CookiesPolicy" */ "@/views/CookiesPolicy.vue"),
            meta: {
              title: "Cookies Policy",
              description: "Check out our Cookies Policy.",
            },
          },
          {
            path: "/licenses",
            name: "licenses",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "Licenses" */ "@/views/Licenses.vue"),
            meta: {
              title: "Licenses",
              description: "Parch Linux is built on top of many technologies. Check out the licenses.",
            },
          },
          {
            path: "/team",
            name: "team",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "Team" */ "@/views/Team.vue"),
            meta: {
              title: "Team",
              description: "Meet the people behind Parch Linux.💙🪼",
            },
          },
          {
            path: "/team/contributors",
            name: "team-contributors",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "Contributors" */ "@/views/Contributors.vue"),
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
              import(/* webpackChunkName: "Contributors" */ "@/views/Contribution.vue"),
            meta: {
              title: "Contribution",
              description: "How to contribute in Parch Linux.",
            },
          },
          {
            path: "/code-of-conduct",
            name: "code-of-conduct",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "CodeOfConduct" */ "@/views/CodeOfConduct.vue"),
            meta: {
              title: "Code of Conduct",
              description: "Everyone must follow our Code of Conduct to be part of Parch Linux.",
            },
          },
          {
            path: "/technologies-and-credits",
            name: "technologies-and-credits",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "TechnologiesAndCredits" */ "@/views/TechnologiesAndCredits.vue"),
            meta: {
              title: "Technologies and Credits",
              description: "Parch Linux is built on top of many technologies.",
            },
          },
          {
            path: "/community",
            name: "community",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "Community" */ "@/views/Community.vue"),
            meta: {
              title: "Community",
              description: "Join our community of users and developers.",
            },
          },
          {
            path: "/developers-program",
            name: "developers-program",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "DevelopersProgram" */ "@/views/DevelopersProgram.vue"),
            meta: {
              title: "Developers Program",
              description: "Join our Developers Program and get access to exclusive content.",
            },
          },
          {
            path: "/download",
            name: "download",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "Download" */ "@/views/Download.vue"),
            meta: {
              title: "Get Parch Linux",
              description: "Get the latest version.",
            },
          },
          {
            path: "/nerd-info",
            name: "nerd-info",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "Download" */ "@/views/NerdInfo.vue"),
            meta: {
              title: "Information for Nerds",
              description: "What is Parch Linux from a technical point of view.",
            },
          },
        ]
      },
      {
        path: '/:notFound',
        name: 'not-found',
        component: () =>// @ts-ignore
          import(/* webpackChunkName: "Errors" */ "@/layouts/Page.vue"),
        children: [
          {
            path: "",
            name: "404",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "404" */ "@/views/404.vue"),
            meta: {
              title: "404 - Page not found",
              description: "The page you are looking for does not exist.",
            },
          },
        ]
      },
    ],
    scrollBehavior(to, from, savedPosition) {
      return { top: 0 }
    },
  })


  router.beforeEach((to, from, next) => {
    if (to === undefined) {
      next();
      return;
    }

    useHead({// @ts-ignore
      title: to.meta.title ? to.meta.title + " - Parch Linux" : "Parch Linux",
      meta: [
        {
          name: "description",// @ts-ignore
          content: to.meta.description,
        },
        {
          name: "og:title",// @ts-ignore
          content: to.meta.title,
        },
        {
          name: "og:description",// @ts-ignore
          content: to.meta.description,
        },
        {
          name: "og:image",
          content: "/img/favicon-32x32.png",
        },
        {
          name: "og:url",
          content: "https://parchlinux.com" + to.path,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:title',
          content: 'Parch Linux- Your next Operating System',
        },
        {
          name: 'twitter:description',// @ts-ignore
          content: to.meta.description,
        },
        {
          name: 'twitter:image',
          content: 'https://parchlinux.com/img/favicon-32x32.png',
        },
        {
          name: 'twitter:url',
          content: 'https://parchlinux.com' + to.path,
        },
      ],
    });

    next();
  });

  return router;
}
