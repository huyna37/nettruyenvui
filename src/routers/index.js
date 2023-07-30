const MainLayout = () => import("@/layouts/main-layout.vue");
const Home = () => import("@/pages/main/home/home.vue");
const Detail = () => import("@/pages/main/detail/detail.vue");
const Content = () => import("@/pages/main/content/content.vue");
const List = () => import("@/pages/main/list/list.vue");
const Top = () => import("@/pages/main/top-views/top.vue");

export const routerMain = {
  path: "/",
  component: MainLayout,
  children: [
    {
      path: "/",
      component: Home,
      name: "home",
      meta: {
        title: "Truyenvui.online, Cùng đọc, Cùng Tận Hưởng",
        icon: "fa-solid fa-home text-success",
        affix: true,
      },
    },
    {
      path: "/:name",
      component: Detail,
      name: "detail",
      meta: {
        title: "Truyenvui.online, Cùng đọc, Cùng Tận Hưởng",
        icon: "fa-solid fa-home text-success",
        affix: true,
      },
    },
    {
      path: "/:name/:chapter",
      component: Content,
      name: "content",
      meta: {
        title: "Truyenvui.online, Cùng đọc, Cùng Tận Hưởng",
        icon: "fa-solid fa-home text-success",
        affix: true,
      },
    },
    {
      path: "/danh-sach/:name?",
      component: List,
      name: "list",
      meta: {
        title: "Truyenvui.online, Cùng đọc, Cùng Tận Hưởng",
        icon: "fa-solid fa-home text-success",
        affix: true,
      },
    },
    {
      path: "/the-loai/:category?",
      component: List,
      name: "list-category",
      meta: {
        title: "Truyenvui.online, Cùng đọc, Cùng Tận Hưởng",
        icon: "fa-solid fa-home text-success",
        affix: true,
      },
    },
    {
      path: "/top-anime",
      component: Top,
      name: "top-anime",
      meta: {
        title: "Truyenvui.online, Cùng đọc, Cùng Tận Hưởng",
        icon: "fa-solid fa-home text-success",
        affix: true,
      },
    },
  ],
};

export const exceptionPage = {
  path: '/:pathMatch(.*)*', component: Home
}


export const routes = [routerMain, exceptionPage];
