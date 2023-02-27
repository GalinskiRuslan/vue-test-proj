import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../Pages/HomePage.vue";
import AboutPage from "../Pages/AboutPage.vue";
import AboutContent from "../components/AboutContent/AboutContent.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: HomePage, props: true },
    {
      path: "/about",
      component: AboutPage,
      children: [{ path: ":id", component: AboutContent, props: true }],
    },
  ],
});
router.beforeEach((to, from, next) => {
  console.log("beforeEach");
  if (to.meta.cantEnter) {
    next({ name: "home" });
  } else {
    next();
  }
});
router.afterEach((to, from) => {});
export default router;
