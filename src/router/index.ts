import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
import { useHead } from 'unhead'

import contextPages from "./context_pages"
import defaultPages from './default_pages';

// const history = createMemoryHistory(import.meta.env.BASE_URL);
const history = createWebHistory(import.meta.env.BASE_URL);

const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: () =>// @ts-ignore
        import("../layouts/Default.vue"),
      children: defaultPages
    },
    {
      path: '/',
      component: () =>// @ts-ignore
        import("../layouts/ContextProvider.vue"),
      children: contextPages
    },
    {
      path: '/:notFound',
      name: 'not-found',
      component: () =>// @ts-ignore
        import("../layouts/ContextProvider.vue"),
      children: [
        {
          path: "",
          name: "404",
          component: () =>// @ts-ignore
            import("../views/404.vue"),
          meta: {
            title: "404 - Page not found",
            description: "The page you are looking for does not exist.",
          },
        },
      ]
    },
  ],
  scrollBehavior(to: any, from: any, savedPosition: any) {
    return { top: 0 }
  },
})


router.beforeEach((to: { meta: { title: string; description: any; }; path: string; } | undefined, from: any, next: () => void) => {
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
    ],
  });

  next();
});

export default router;