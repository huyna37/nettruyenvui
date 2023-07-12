<template>
    <nav
        class="md:tw-left-0 md:tw-block md:tw-fixed md:tw-top-0 md:tw-bottom-0 md:tw-overflow-y-auto md:tw-flex-row md:tw-flex-nowrap md:tw-overflow-hidden tw-shadow-xl tw-bg-white tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-relative md:tw-w-64 z-10 tw-py-4 tw-px-6">
        <div
            class="md:tw-flex-col md:tw-items-stretch md:tw-min-h-full md:tw-flex-nowrap tw-px-0 tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-w-full tw-mx-auto">
            <!-- Toggler -->
            <button
                class="tw-cursor-pointer tw-text-black tw-opacity-50 md:tw-hidden tw-px-3 tw-py-1 tw-text-xl tw-leading-none tw-bg-transparent tw-rounded tw-border tw-border-solid tw-border-transparent"
                type="button" v-on:click="toggleCollapseShow('tw-bg-white tw-m-2 tw-py-3 tw-px-6')">
                <i class="fas fa-bars"></i>
            </button>
            <!-- Brand -->
            <router-link
                class="md:tw-block tw-text-left md:tw-pb-2 tw-text-blueGray-600 tw-mr-0 tw-inline-block tw-whitespace-nowrap tw-text-sm tw-uppercase tw-font-bold tw-p-4 tw-px-0"
                to="/">
                Vue Notus
            </router-link>
            <!-- User -->
            <ul class="md:tw-hidden tw-items-center tw-flex tw-flex-wrap tw-list-none">
                <li class="tw-inline-block tw-relative">
                    <notification-dropdown />
                </li>
                <li class="tw-inline-block tw-relative">
                    <user-dropdown />
                </li>
            </ul>
            <!-- Collapse -->
            <div class="md:tw-flex md:tw-flex-col md:tw-items-stretch md:tw-opacity-100 md:tw-relative md:tw-mt-4 md:tw-shadow-none tw-shadow tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-z-40 tw-overflow-y-auto tw-overflow-x-hidden tw-h-auto tw-items-center tw-flex-1 tw-rounded"
                v-bind:class="collapseShow">
                <!-- Collapse header -->
                <div class="md:tw-min-w-full md:tw-hidden tw-block tw-pb-4 tw-mb-4 tw-border-b tw-border-solid tw-border-blueGray-200">
                    <div class="tw-flex tw-flex-wrap">
                        <div class="tw-w-6/12">
                            <router-link
                                class="md:tw-block tw-text-left tw:md:pb-2 tw-text-blueGray-600 tw-mr-0 tw-inline-block tw-whitespace-nowrap tw-text-sm tw-uppercase tw-font-bold tw-p-4 tw-px-0"
                                to="/">
                                Vue Notus
                            </router-link>
                        </div>
                        <div class="tw-w-6/12 tw-flex tw-justify-end">
                            <button type="button"
                                class="cursor-pointer text-black opacity-50 tw:md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                                v-on:click="toggleCollapseShow('hidden')">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Form -->
                <form class="mt-6 mb-4 md:hidden">
                    <div class="mb-3 pt-0">
                        <input type="text" placeholder="Search"
                            class="border-0 px-3 py-2 h-12 border border-solid border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal" />
                    </div>
                </form>

                <!-- Divider -->
                <hr class="my-4 md:min-w-full" />
                <!-- Heading -->
                <h6 class="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                    Admin Layout Pages
                </h6>
                <!-- Navigation -->

                <ul class="md:flex-col md:min-w-full flex flex-col list-none">
                    <li class="items-center">
                        <router-link to="/admin/dashboard" v-slot="{ href, navigate, isActive }">
                            <a :href="href" @click="navigate" class="text-xs uppercase py-3 font-bold block" :class="[
                                isActive
                                    ? 'text-emerald-500 hover:text-emerald-600'
                                    : 'text-blueGray-700 hover:text-blueGray-500',
                            ]">
                                <i class="fas fa-tv mr-2 text-sm"
                                    :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"></i>
                                Dashboard
                            </a>
                        </router-link>
                    </li>

                    <li class="items-center">
                        <router-link to="/admin/settings" v-slot="{ href, navigate, isActive }">
                            <a :href="href" @click="navigate" class="text-xs uppercase py-3 font-bold block" :class="[
                                isActive
                                    ? 'text-emerald-500 hover:text-emerald-600'
                                    : 'text-blueGray-700 hover:text-blueGray-500',
                            ]">
                                <i class="fas fa-tools mr-2 text-sm"
                                    :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"></i>
                                Settings
                            </a>
                        </router-link>
                    </li>

                    <li class="items-center">
                        <router-link to="/admin/tables" v-slot="{ href, navigate, isActive }">
                            <a :href="href" @click="navigate" class="text-xs uppercase py-3 font-bold block" :class="[
                                isActive
                                    ? 'text-emerald-500 hover:text-emerald-600'
                                    : 'text-blueGray-700 hover:text-blueGray-500',
                            ]">
                                <i class="fas fa-table mr-2 text-sm"
                                    :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"></i>
                                Tables
                            </a>
                        </router-link>
                    </li>

                    <li class="items-center">
                        <router-link to="/admin/maps" v-slot="{ href, navigate, isActive }">
                            <a :href="href" @click="navigate" class="text-xs uppercase py-3 font-bold block" :class="[
                                isActive
                                    ? 'text-emerald-500 hover:text-emerald-600'
                                    : 'text-blueGray-700 hover:text-blueGray-500',
                            ]">
                                <i class="fas fa-map-marked mr-2 text-sm"
                                    :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"></i>
                                Maps
                            </a>
                        </router-link>
                    </li>
                </ul>

                <!-- Divider -->
                <hr class="my-4 md:min-w-full" />
                <!-- Heading -->
                <h6 class="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                    Auth Layout Pages
                </h6>
                <!-- Navigation -->

                <ul class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
                    <li class="items-center">
                        <router-link
                            class="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                            to="/auth/login">
                            <i class="fas fa-fingerprint text-blueGray-300 mr-2 text-sm"></i>
                            Login
                        </router-link>
                    </li>

                    <li class="items-center">
                        <router-link
                            class="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                            to="/auth/register">
                            <i class="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"></i>
                            Register
                        </router-link>
                    </li>
                </ul>

                <!-- Divider -->
                <hr class="my-4 md:min-w-full" />
                <!-- Heading -->
                <h6 class="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                    No Layout Pages
                </h6>
                <!-- Navigation -->

                <ul class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
                    <li class="items-center">
                        <router-link
                            class="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                            to="/landing">
                            <i class="fas fa-newspaper text-blueGray-300 mr-2 text-sm"></i>
                            Landing Page
                        </router-link>
                    </li>

                    <li class="items-center">
                        <router-link
                            class="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                            to="/profile">
                            <i class="fas fa-user-circle text-blueGray-300 mr-2 text-sm"></i>
                            Profile Page
                        </router-link>
                    </li>
                </ul>

                <!-- Divider -->
                <hr class="my-4 md:min-w-full" />
                <!-- Heading -->
                <h6 class="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                    Documentation
                </h6>
                <!-- Navigation -->
                <ul class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
                    <li class="inline-flex">
                        <a href="https://www.creative-tim.com/learning-lab/tailwind/vue/colors/notus" target="_blank"
                            class="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold">
                            <i class="fas fa-paint-brush mr-2 text-blueGray-300 text-base"></i>
                            Styles
                        </a>
                    </li>

                    <li class="inline-flex">
                        <a href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus" target="_blank"
                            class="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold">
                            <i class="fab fa-css3-alt mr-2 text-blueGray-300 text-base"></i>
                            CSS Components
                        </a>
                    </li>

                    <li class="inline-flex">
                        <a href="https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus" target="_blank"
                            class="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold">
                            <i class="fab fa-angular mr-2 text-blueGray-300 text-base"></i>
                            Angular
                        </a>
                    </li>

                    <li class="inline-flex">
                        <a href="https://www.creative-tim.com/learning-lab/tailwind/js/overview/notus" target="_blank"
                            class="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold">
                            <i class="fab fa-js-square mr-2 text-blueGray-300 text-base"></i>
                            Javascript
                        </a>
                    </li>

                    <li class="inline-flex">
                        <a href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus" target="_blank"
                            class="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold">
                            <i class="fab fa-react mr-2 text-blueGray-300 text-base"></i>
                            NextJS
                        </a>
                    </li>

                    <li class="inline-flex">
                        <a href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus" target="_blank"
                            class="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold">
                            <i class="fab fa-react mr-2 text-blueGray-300 text-base"></i>
                            React
                        </a>
                    </li>

                    <li class="inline-flex">
                        <a href="https://www.creative-tim.com/learning-lab/tailwind/svelte/overview/notus" target="_blank"
                            class="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold">
                            <i class="fas fa-link mr-2 text-blueGray-300 text-base"></i>
                            Svelte
                        </a>
                    </li>

                    <li class="inline-flex">
                        <a href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus" target="_blank"
                            class="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold">
                            <i class="fab fa-vuejs mr-2 text-blueGray-300 text-base"></i>
                            VueJS
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
  
<script>
import NotificationDropdown from "./notificationDropdown.vue";
import UserDropdown from "./userDropdown.vue";

export default {
    name: 'sidebar-admin',
    data() {
        return {
            collapseShow: "hidden",
        };
    },
    methods: {
        toggleCollapseShow: function (classes) {
            this.collapseShow = classes;
        },
    },
    components: {
        NotificationDropdown,
        UserDropdown,
    },
};
</script>