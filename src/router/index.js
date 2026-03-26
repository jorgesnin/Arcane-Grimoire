import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    component: () => import("../layouts/BookLayout.vue"),
    children: [
      {
        path: "",
        redirect: "/welcome"
      },
      {
        path: "welcome",
        name: "welcome",
        component: () => import("../views/monster/LandingView.vue")
      },
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import("../views/HomeView.vue")
      },
      {
        path: "bestiary",
        name: "bestiary",
        component: () => import("../views/BestiaryView.vue")
      },
      {
        path: "monster/:slug",
        component: () => import("../views/MonsterDetail.vue"),
        children: [
          {
            path: "",
            name: "monster-stats",
            component: () => import("../views/monster/MonsterStats.vue")
          },
          {
            path: "lore",
            name: "monster-lore",
            component: () => import("../views/monster/MonsterLore.vue")
          }
        ]
      }
    ]
  },
  {
  path: "/:pathMatch(.*)*",
  name: "notfound",
  component: () => import("../views/LostInTheDungeon.vue")
}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router