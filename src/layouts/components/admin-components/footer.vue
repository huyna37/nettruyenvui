<template>
  <footer class="tw-block tw-py-4">
    <div class="tw-container tw-mx-auto tw-px-4">
      <hr class="tw-mb-4 tw-border-b-1 tw-border-blueGray-200" />
      <div class="tw-flex tw-flex-wrap tw-items-center tw-md:justify-between tw-justify-center">
        <div class="tw-w-full tw-md:w-4/12 tw-px-4">
          <div class="tw-text-sm tw-text-blueGray-500 tw-font-semibold tw-py-1 tw-text-center tw-md:text-left">
            Copyright © {{ date }}
            <a href="https://www.creative-tim.com?ref=vn-footer-admin" class="tw-text-blueGray-500 tw-hover:text-blueGray-700 tw-text-sm tw-font-semibold tw-py-1">
              Creative Tim
            </a>
          </div>
        </div>
        <div class="tw-w-full tw-md:w-8/12 tw-px-4">
          <ul class="tw-flex tw-flex-wrap tw-list-none tw-md:justify-end tw-justify-center">
            <li>
              <a href="https://www.creative-tim.com?ref=vn-footer-admin" class="tw-text-blueGray-600 tw-hover:text-blueGray-800 tw-text-sm tw-font-semibold tw-block tw-py-1 tw-px-3">
                Creative Tim
              </a>
            </li>
            <li>
              <a href="https://www.creative-tim.com/presentation?ref=vn-footer-admin" class="tw-text-blueGray-600 tw-hover:text-blueGray-800 tw-text-sm tw-font-semibold tw-block tw-py-1 tw-px-3">
                About Us
              </a>
            </li>
            <li>
              <a href="http://blog.creative-tim.com?ref=vn-footer-admin" class="tw-text-blueGray-600 tw-hover:text-blueGray-800 tw-text-sm tw-font-semibold tw-block tw-py-1 tw-px-3">
                Blog
              </a>
            </li>
            <li>
              <a href="https://github.com/creativetimofficial/vue-notus/blob/main/LICENSE.md?ref=vn-footer-admin" class="tw-text-blueGray-600 tw-hover:text-blueGray-800 tw-text-sm tw-font-semibold tw-block tw-py-1 tw-px-3">
                MIT License
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'footer-admin',
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>
