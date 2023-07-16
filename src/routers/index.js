const MainLayout = () => import("@/layouts/main-layout.vue");
const Home = () => import("@/pages/main/home/home.vue");
const Detail = () => import("@/pages/main/detail/detail.vue");
const Content = () => import("@/pages/main/content/content.vue");
const List = () => import("@/pages/main/list/list.vue");

export const routerMain = {
  path: "/",
  component: MainLayout,
  children: [
    {
      path: "/",
      component: Home,
      name: "home",
      meta: {
        title: "Truyện Anime siêu hot",
        icon: "fa-solid fa-home text-success",
        affix: true,
      },
    },
    {
      path: "/:name",
      component: Detail,
      name: "detail",
      meta: {
        title: "Anime",
        icon: "fa-solid fa-home text-success",
        affix: true,
      },
    },
    {
      path: "/:name/:chapter",
      component: Content,
      name: "content",
      meta: {
        title: "NetTruyenVui Chuyên Vui Truyện Cùng Ae",
        icon: "fa-solid fa-home text-success",
        affix: true,
      },
    },
    {
      path: "danh-sach/:name?",
      component: List,
      name: "list",
      meta: {
        title: "NetTruyenVui Chuyên Vui Truyện Cùng Ae",
        icon: "fa-solid fa-home text-success",
        affix: true,
      },
    },
  ],
};


export const routes = [routerMain];
