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
        <section class="row">
            <div class='col-md-8 row max-md:tw-mb-2'>
                <div class='col-md-4'>
                    <img :src='manga.coverImage' />
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
                        <span>đang cập nhật</span>
                    </div>
                    <div class="tw-mb-2 tw-text-[14px]">
                        <label class="tw-w-[100px] tw-inline-block">Mới nhất</label>
                        <span><a class="tw-text-orange-600" href="/horimiya/chap-122.8">chap 122</a></span>
                    </div>
                    <div class="mb-2 text-[14px]">
                        <label class="tw-w-[100px] tw-inline-block">Lượt đọc</label>
                        <span>{{ manga.views }}</span>
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
                <div class="tw-mt-[10px] tw-text-[15px] tw-font-light">
                    {{ manga.description }}
                </div>

            </div>
        </section>

        <main class='row tw-mt-[20px] tw-text-center d-flex justify-content-center'>
            <template v-if="!visibleFiles || visibleFiles.length === 0">
                <div class="alert alert-primary tw-mt-3" role="alert">
                  Chapter Đang updating...
                </div>
            </template>
            <template v-for="(img, index) in visibleFiles" :key="index">
                <img class="tw-w-[auto]"
                    :src="`https://crawler.meoden.online/files?folder=${this.manga.name}/${this.chapter}&name=` + img" />
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
                        <ul class="dropdown-menu tw-overflow-auto tw-h-[15rem] tw-pt-0 tw-mb-[7px]">
                            <li v-for="chapter in listChapter" v-bind:key="chapter">
                                <RouterLink
                                    :class="{'active-dropdown':chapter?.number == currentChapter}"
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
            <RouterLink :to="'/' + manga2.slug"
            v-for="manga2 in listmanga" v-bind:key="manga2"
                class='col-lg-2 col-md-3 col-4 max-lg:tw-mb-[2rem] hover:overscroll-contain hover:tw-shadow-2xl tw-rounded-xl'>
                <img class="tw-w-full tw-h-full "
                :src="manga2.coverImage" :alt="manga2.name">
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
            listmanga: []
        }
    },
    async created() {
        await this.getManga();
        await this.getContentByName();
        if(this.data.files.length > 0) {
            this.renderFiles();
        }
        await this.getNewstChapter();
        this.getCurrentChapter();
        await this.getListMangas();
    },
    methods: {
        async getListMangas() {
            this.listmanga = (await instance.get('/manga/?page=1&limit=6&sortField=updatedAt&sortOrder=desc')).data.result.data;
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
        async getContentByName() {
            try{
                this.data = (await instance.get(`/files/getListFiles?folder=${this.manga.name}/${this.chapter}`)).data;
            }
            catch(e){
                this.data = [];
            }
        },
        onImageLoad() {
            store.dispatch('app/setIsLoading', false);
        },
        renderFiles() {
            const numVisibleFiles = 7; // Số phần tử hiển thị ban đầu
            if(!this.data) return;
            this.visibleFiles = this.data.files.slice(0, numVisibleFiles);

            const remainingFiles = this.data.files.slice(numVisibleFiles);
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
                if(chapter.number === this.currentChapter && this.listChapter[index]?.number &&  this.listChapter[index + 1]?.number) {
                    page = `/${this.name}/chap-${this.listChapter[index + 1].number}`;
                }
            })
            return page;
        },
        nextPage() {
            let page = '#';
            this.listChapter.forEach((chapter, index) => {
                if(chapter.number === this.currentChapter && this.listChapter[index]?.number && this.listChapter[index - 1]?.number) {
                    page = `/${this.name}/chap-${this.listChapter[index - 1].number}`;
                }
            })
            return page;
        },
        newestPage() {
            return this.listChapter[0]?.number;
        }
    },
    watch: {
        'route.params.chapter': function(data) {
            if(data) {
                this.chapter = data;
                this.getCurrentChapter();
            }
        }
    }
}
</script>

<style>
.active-dropdown {
    color: var(--bs-dropdown-link-active-color);
    text-decoration: none;
    background-color: #dc3545!important
}
</style>