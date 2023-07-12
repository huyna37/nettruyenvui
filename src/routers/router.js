import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '.';
import store from '@/store/store';

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior() {
    return { top: 0 }
  },
  linkActiveClass: 'active',
});

router.beforeEach((to, from, next) => {
  store.dispatch('app/setIsLoading', true);
  document.title = `${to?.meta?.titleSEO ? to.meta.titleSEO : to?.meta?.title} | Meoden.Online`;
  // Cập nhật thẻ "canonical" trên trang hiện tại
  const canonicalLink = document.querySelector('link[rel="canonical"]');
  if (canonicalLink) {
    canonicalLink.setAttribute('href', 'https://meoden.online' + to?.path);
  }

  next()
  // redirect to login page if not logged in and trying to access a restricted page
})


router.afterEach(() => {
  // Gửi dữ liệu phân tích cho trang mới
  setTimeout(() => {
    store.dispatch('app/setIsLoading', false);
  }, 300)
});


export default router
