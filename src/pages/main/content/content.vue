<template>
    <div class='container tw-mt-[1rem]'>
        <section class="tw-pl-0 tw-mb-[1rem] tw-px-[10px] d-flex align-items-center" v-if="manga">
            <i class="fa-solid fa-house tw-mr-2 "></i>
            <span class="tw-mr-1 tw-font-bold">/</span>
            <RouterLink :to="'/' + manga?.slug ?? ''" class="tw-mr-1 tw-font-bold">{{ manga.name }}</RouterLink>
            <span class="tw-font-bold tw-mr-1">/</span>
            <div class="tw-font-bold">
                {{ chapter.upperCaseFirst() }}
            </div>
        </section>
        <section class="row mb-3 mt-2">
            <div class='col-md-8 row max-md:tw-mb-2' v-if="manga">
                <div class='col-md-4 col-sm-12' :class="{ 'max-md:tw-hidden': manga.showImage }">
                    <img :src="`${manga?.coverImage}`" class="tw-rounded-xl tw-w-[100%]" />
                </div>
                <div class='col-md-4 col-sm-12 tw-hidden max-md:tw-block'>
                    <img :src="`${manga.showImage}`" class="tw-rounded-xl tw-w-[100%]" />
                </div>
                <div class='col-md-8'>
                    <h4 class='tw-uppercase tw-text-[20px] tw-font-medium'>{{ manga.name }}</h4>
                    <h5 class='tw-my-3 tw-font-medium'>{{ manga.title }}</h5>
                    <div class="tw-mb-2 tw-text-[14px]">
                        <label class="tw-w-[100px] tw-inline-block">Tác giả</label>
                        <span>{{ manga.author }}</span>
                    </div>
                    <div class="tw-mb-2 tw-text-[14px]">
                        <label class="tw-w-[100px] tw-inline-block">Tình trạng</label>
                        <span>Đang cập nhật</span>
                    </div>
                    <div class="tw-mb-2 tw-text-[14px]">
                        <label class="tw-w-[100px] tw-inline-block">Mới nhất</label>
                        <span><RouterLink class="tw-text-orange-600" :to="newestPage?.slug ?? '/'">{{ newestPage?.title }}</RouterLink></span>
                    </div>
                    <div class="mb-2 text-[14px]">
                        <label class="tw-w-[100px] tw-inline-block">Lượt đọc</label>
                        <span>{{ chapterInfo?.views }}</span>
                    </div>
                    <div>
                        <button
                            class="tw-rounded-xl tw-mr-2 s1024:tw-mr-4 tw-px-3 tw-py-1 tw-bg-teal-600 tw-text-white tw-text-[14px] tw-font-light">Thích
                            <span
                                class="tw-ml-[5px] tw-px-[5px] tw-text-[12px] tw-bg-white tw-rounded-lg tw-text-teal-600">132</span>
                        </button>
                        <button
                            class="tw-rounded-xl tw-mr-2 s1024:tw-mr-4 tw-px-3 tw-py-1 tw-bg-teal-600 tw-text-white tw-text-[14px] tw-font-light">Theo
                            Dõi
                            <span
                                class="tw-ml-[5px] tw-px-[5px] tw-text-[12px] tw-bg-white tw-rounded-lg tw-text-teal-600">132</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class='col-md-4'>
                <div class="tw-uppercase tw-text-orange-600">Nội dung</div>
                <div class="tw-mt-[10px] tw-text-[15px] tw-font-light tw-max-h-[18rem] tw-overflow-auto">
                    {{ manga.description }}
                </div>

            </div>
        </section>
        <hr />
        <main class='row tw-mt-[20px] tw-text-center d-flex justify-content-center'>
            <template v-if="!visibleFiles || visibleFiles.length === 0">
                <div class="alert alert-primary tw-mt-3" role="alert">
                    Loading...
                </div>
            </template>
            <template v-for="(img, index) in visibleFiles" :key="index">
                <img class="tw-w-[auto]" :src="img.link" />
            </template>
            <div
                class="tw-fixed tw-bottom-[10px] tw-left-0 tw-right-0 tw-w-[300px] tw-bg-black/50 tw-rounded-2xl tw-py-[10px] tw-mx-auto tw-flex tw-justify-center tw-gap-[10px] tw-z-50">
                <RouterLink
                    class="tw-block tw-w-[60px] tw-h-[30px] tw-bg-teal-600 tw-text-white tw-text-center tw-rounded-lg"
                    :to="prePage">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="tw-w-6 tw-h-6 tw-inline-block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
                    </svg>
                </RouterLink>
                <div class="tw-d-flex tw-chapter-select tw-select-2 tw-relative tw-w-[120px] tw-cursor-pointer">
                    <div class="btn-group dropup">
                        <span data-bs-toggle="dropdown" aria-expanded="false"
                            class="tw-flex justify-content-center align-items-center tw-bg-teal-600 tw-text-white tw-rounded-lg tw-h-[30px] tw-px-[10px] tw-text-[14px] tw-font-light">
                            Chapter {{ currentChapter }}</span>
                        <div
                            class="tw-select-option tw-option-2 tw-absolute tw-bottom-0 tw-left-0 tw-w-[120px] tw-min-h-[31px] tw-max-h-[300px] tw-divide-y tw-rounded-lg tw-bg-teal-600 tw-text-white tw-shadow tw-hidden">
                        </div>
                        <ul class="dropdown-menu tw-overflow-auto tw-max-h-[15rem] tw-pt-0 tw-mb-[7px]">
                            <li v-for="chapter in listChapter" v-bind:key="chapter">
                                <RouterLink :class="{ 'active-dropdown': chapter?.number == currentChapter }"
                                    class="tw-block tw-h-[2rem] tw-bg-yellow-600 tw-text-white tw-text-center dropdown-item"
                                    :to="`/${this.name}/chap-${chapter?.number}`">
                                    {{ chapter.title }}
                                </RouterLink>
                            </li>
                        </ul>
                    </div>

                </div>
                <RouterLink
                    class="tw-block tw-w-[60px] tw-h-[30px] tw-bg-teal-600 tw-text-white tw-text-center tw-rounded-lg"
                    :to="nextPage">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="tw-w-6 tw-h-6 tw-inline-block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3">
                        </path>
                    </svg>
                </RouterLink>
            </div>
        </main>

        <section class="tw-mt-[1rem] row">
            <h2
                class="tw-color-[red] tw-w-full tw-text-orange-600 tw-mb-2 tw-underline tw-underline-offset-4 tw-decoration-2 tw-uppercase">
                <div>CHƯƠNG MỚI NHẤT</div>
            </h2>
            <RouterLink :to="'/' + manga2.slug" v-for="manga2 in listmanga" v-bind:key="manga2"
                class='col-lg-2 col-md-3 col-4 max-lg:tw-mb-[2rem] hover:overscroll-contain hover:tw-shadow-2xl tw-rounded-xl'>
                <img class="tw-w-full tw-h-full" v-if="manga2?._id" :src="`${manga2?.coverImage}`" :alt="manga2.name">
                <p class='tw-text-slate-800 tw-text-center tw-mt-1 max-sm:tw-text-[11px] tw-text-[13px]'>{{ manga2.name }}
                </p>
            </RouterLink>
        </section>

    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import instance from '@/Unilities/axios/index';
import store from '@/store/store';

export default {
    name: "content-main",
    setup() {
        const route = useRoute();
        let name = route.params.name;
        let chapter = route.params.chapter;

        return {
            name,
            chapter,
            route
        };
    },
    data() {
        return {
            data: [],
            visibleFiles: [],
            manga: {},
            listChapter: [],
            currentChapter: 0,
            listmanga: [],
            chapterInfo: {}
        }
    },
    async created() {
        store.dispatch('app/setIsLoading', true);
        await this.getManga();
        await this.getChapterInfo();
        await this.getContentByName();
        if (this.data.length > 0) {
            this.renderFiles();
        }
        document.title = `${this.manga.name} - ${this.chapterInfo.title}`;
        await Promise.all([this.getNewstChapter(), this.getListMangas()])
        this.getCurrentChapter();
        store.dispatch('app/setIsLoading', false);
    },
    methods: {
        async getListMangas() {
            this.listmanga = (await instance.get('/manga/?page=1&limit=6&sortField=createdAt&sortOrder=desc')).data.result.data;
        },
        getCurrentChapter() {
            const regex = /(\d+(\.\d+)?)/;
            const matches = this.chapter.match(regex);
            this.currentChapter = parseFloat(matches[0]);
        },
        async getNewstChapter() {
            let url = `/chapter/?sortField=number&sortOrder=desc&filterOptions={"manga":"${this.manga._id}"}`;
            const result = (await instance.get(url))?.data?.result;
            this.listChapter = result?.data;
        },
        async getManga() {
            this.manga = (await instance.get('/manga/' + this.name)).data.result;
        },
        async getChapterInfo() {
            this.chapterInfo = (await instance.get(`/chapter/${this.chapter}/${this.manga._id}`)).data.result;
        },
        async getContentByName() {
            try {
                this.data = (await instance.get(`/image/getChapterByImage/${this.chapterInfo._id}`)).data.result;
            }
            catch (e) {
                console.log(e)
            }
        },
        onImageLoad() {
            store.dispatch('app/setIsLoading', false);
        },
        renderFiles() {
            const numVisibleFiles = 7; // Số phần tử hiển thị ban đầu
            if (!this.data) return;
            this.visibleFiles = this.data.slice(0, numVisibleFiles);

            const remainingFiles = this.data.slice(numVisibleFiles);
            if (remainingFiles.length > 0) {
                // Tạo delay 1 giây để load phần tử còn lại
                setTimeout(() => {
                    this.visibleFiles = this.visibleFiles.concat(remainingFiles);
                }, 2000);
            }
        }
    },
    computed: {
        prePage() {
            let page = '#';
            this.listChapter.forEach((chapter, index) => {
                if (chapter.number === this.currentChapter && this.listChapter[index]?.number && this.listChapter[index + 1]?.number) {
                    page = `/${this.name}/chap-${this.listChapter[index + 1].number}`;
                }
            })
            return page;
        },
        nextPage() {
            let page = '#';
            this.listChapter.forEach((chapter, index) => {
                if (chapter.number === this.currentChapter && this.listChapter[index]?.number && this.listChapter[index - 1]?.number) {
                    page = `/${this.name}/chap-${this.listChapter[index - 1].number}`;
                }
            })
            return page;
        },
        newestPage() {
            return this.listChapter[0];
        }
    },
    async beforeRouteUpdate(to, from, next) {
        if(to.hash.startsWith('#')){
            next();
            return;
        }
        this.chapter = to.params.chapter;
        await this.getChapterInfo();
        await this.getContentByName();
        if (this.data.length > 0) {
            this.renderFiles();
        }
        this.getCurrentChapter();

        // Tiếp tục điều hướng
        next();
    }
}
</script>

<style>
.active-dropdown {
    color: var(--bs-dropdown-link-active-color);
    text-decoration: none;
    background-color: #dc3545 !important
}
</style>