import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import BlogList from "../views/BlogList.vue";
import QnA from "../views/QnA.vue";
import BlogDetail from "../views/BlogDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: 'Home'
    },
  },
  {
    path: "/blogs",
    name: "Blog",
    component: BlogList,
    alias : "/blog",
    meta: {
      title: 'Blog'
    },
  },
  {
    path: "/blogs/:slug",
    name: "BlogDetail",
    component: BlogDetail,
    alias: "/blogs/:slug",
    meta: {
      title: 'Blog Post'
    },
  },
  {
    path: "/qna",
    name: "QnA",
    component: QnA,
    meta: {
      title: 'Q & A'
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next)=>{
  document.title = `${to.meta.title} | sakthyvells`;
  next();
});

export default router;
