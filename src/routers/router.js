import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '.';
import store from '@/store/store';

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior() {
    return { top: 0 }
  },
  linkActiveClass: 'active-link',
});

router.beforeEach((to, from, next) => {
  if(to.hash.startsWith('#')){
      next();
      return;
  }
  store.dispatch('app/setIsLoading', true);
  store.dispatch('app/setCurrentPath', to.fullPath)
  document.title = `${to?.meta?.titleSEO ? to.meta.titleSEO : to?.meta?.title} | Truyenvui.Online`;
  // Cập nhật thẻ "canonical" trên trang hiện tại
  const canonicalLink = document.querySelector('link[rel="canonical"]');
  if (canonicalLink) {
    canonicalLink.setAttribute('href', 'https://Truyenvui.online' + to?.path);
  }

  next()
  // redirect to login page if not logged in and trying to access a restricted page
})


router.afterEach(() => {
  // Gửi dữ liệu phân tích cho trang mới
  store.dispatch('app/setIsLoading', false);
});


export default router
