<template>
    <div class='container tw-mt-[1rem]' v-if="data">
        <section class="row">
            <div class='col-md-8'>
                <div class="col-md-12 row">
                    <div class='col-md-4 col-sm-12' :class="{ 'max-md:tw-hidden': data.showImage }">
                        <img v-if="data._id" :src="`${data.coverImage}`" class="tw-rounded-xl tw-w-[100%]" />
                    </div>
                    <div class='col-md-4 col-sm-12 tw-hidden max-md:tw-block'>
                        <img v-if="data._id" :src="`${data.showImage}`" class="tw-rounded-xl tw-w-[100%]" />
                    </div>
                    <div class='col-md-8'>
                        <h4 class='tw-uppercase tw-text-[20px] tw-font-medium'>{{ data.name }}</h4>
                        <h5 class='tw-my-3 tw-font-medium'>{{ data.title }}</h5>
                        <div class="tw-mb-2 tw-text-[14px]">
                            <label class="tw-w-[100px] tw-inline-block">Tác giả</label>
                            <span>{{ data.author }}</span>
                        </div>
                        <div class="tw-mb-2 tw-text-[14px]">
                            <label class="tw-w-[100px] tw-inline-block">Tình trạng</label>
                            <span>{{ data.views ? 'Done' : 'In Progress' }}</span>
                        </div>
                        <div class="tw-mb-2 tw-text-[14px]">
                            <label class="tw-w-[100px] tw-inline-block">Mới nhất</label>
                            <span>
                                <RouterLink class="tw-text-orange-600" :to="newestPage?.slug ?? '/'">{{ newestPage?.title }}
                                </RouterLink>
                            </span>
                        </div>
                        <div class="mb-4 text-[14px]">
                            <label class="tw-w-[100px] tw-inline-block">Lượt đọc</label>
                            <span>{{ data.views }}</span>
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

                <h5 class="tw-mt-[10px] tw-uppercase tw-text-orange-600">Nội dung</h5>

                <p class="tw-mt-[10px] tw-text-[15px] tw-font-light">
                    {{ data.description }}
                </p>

                <div class="tw-mt-[10px] tw-text-[15px] tw-font-light tw-overflow-auto tw-min-h-[35px]">
                    <template v-if="data.genre">
                        <RouterLink v-for="genre in genre" v-bind:key="genre"
                            class="tw-bg-violet-200 dark:tw-bg-slate-700 tw-rounded-lg tw-px-2 tw-mr-1 tw-py-1" :to="'/the-loai/' + genre">{{
                                genre }}</RouterLink>
                    </template>
                    <template v-else>
                        <a class="tw-bg-violet-200 dark:tw-bg-slate-700 tw-rounded-lg tw-px-2 tw-mr-1 tw-py-1"
                            href="/the-loai/comedy">Comedy</a>
                        <a class="tw-bg-violet-200 dark:tw-bg-slate-700 tw-rounded-lg tw-px-2 tw-mr-1 tw-py-1"
                            href="/the-loai/school-life">School Life</a>
                        <a class="tw-bg-violet-200 dark:tw-bg-slate-700 tw-rounded-lg tw-px-2 tw-mr-1 tw-py-1"
                            href="/the-loai/shounen">Shounen</a>
                        <a class="tw-bg-violet-200 dark:tw-bg-slate-700 tw-rounded-lg tw-px-2 tw-mr-1 tw-py-1"
                            href="/the-loai/romance">Romance</a>
                    </template>

                </div>

                <div class="tw-mt-[20px] s768:tw-mt-[30px] d-flex justify-content-between">
                    <span class="tw-uppercase tw-text-orange-600 ">Danh sách chap</span>
                    <div>
                        <input
                            class="tw-pl-[7px] tw-rounded-full tw-w-full tw-text-[14px]focus:tw-border-red-200 tw-border-violet-200 tw-outline tw-outline-slate-200"
                            @input="debouncedHandleInput" placeholder="Tìm kiếm" />
                    </div>
                </div>

                <div class="tw-mt-[10px]">
                    <div
                        class="tw-w-full tw-flex tw-gap-2 tw-justify-between tw-border-b dark:tw-border-slate-600 tw-mb-2 tw-pb-2 tw-font-light">
                        <span class="tw-grow tw-min-w-[120px] chapter-name">Tên chap</span>
                        <span class="tw-shrink tw-text-right chapter-update">Cập nhật</span>
                        <span class="tw-min-w-[80px] tw-shrink-0 tw-text-right chapter-views">Lượt đọc</span>
                    </div>
                    <div class="chapter-list tw-relative tw-overflow-auto tw-overscroll-contain tw-max-h-[300px] tw-w-full tw-text-[14px] tw-font-light tw-ps-container tw-ps-theme-default"
                        data-ps-id="05e4af89-4385-b36d-f577-27e7e27d8ef3">
                        <template v-if="listChapter.length == 0">
                            <div class="tw-shrink tw-text-center tw-mb-2 chapter-update">Không Có Kết Quả</div>
                        </template>
                        <template v-else>
                            <div v-for="chapter in listChapter" v-bind:key="chapter"
                                class="tw-w-full tw-flex tw-gap-2 tw-justify-between tw-border-b dark:tw-border-slate-600 tw-mb-2 tw-pb-2 chapter-item">
                                <span class="tw-grow tw-min -w-[120px] chapter-name">
                                    <RouterLink :to="`${$route.path}/${chapter.slug}`">
                                        {{ chapter.title }}
                                    </RouterLink>

                                </span>
                                <span class="tw-shrink tw-text-right chapter-update">
                                    {{ chapter.createdAt?.formatDate() }}
                                </span>
                                <span class="tw-min-w-[80px] tw-shrink-0 tw-text-right tw-chapter-views">
                                    {{ chapter.views }}
                                </span>
                            </div>
                        </template>


                    </div>
                    <div>
                        <RouterLink :to="`${$route.path}/chap-1`" class="tw-text-bold me-2 tw-mb-3 tw-inline-block tw-cursor-pointer tw-rounded-xl tw-bg-blue-600 dark:tw-bg-orange-700 tw-px-4 tw-py-1 tw-text-white tw-text-[14px] tw-font-light">
                            Đọc Từ Đầu
                        </RouterLink>
                        <div @click="loadMore"
                            class="chapter-more tw-mb-3 tw-inline-block tw-cursor-pointer tw-rounded-xl tw-bg-orange-600 dark:tw-bg-orange-700 tw-px-4 tw-py-1 tw-text-white tw-text-[14px] tw-font-light">
                        <span>
                            <template v-if="isLoadingMore">
                                <i class="fa-solid fa-spinner tw-animate-spin"></i>
                            </template>
                            <template v-else>
                                Xem Thêm
                            </template>
                        </span>
                        </div>
                    </div>
                   
                    <div class="tw-mt-[20px] tw-text-[14px] tw-font-extralight tw-manga-tag">
                        Từ khoá:
                        <RouterLink class="tw-bg-gray-300 dark:tw-bg-slate-700 tw-rounded-lg tw-px-2 tw-mr-1" :to="'/' + data.slug">{{ data.name }}</RouterLink>
                        <RouterLink class="tw-bg-gray-300 dark:tw-bg-slate-700 tw-rounded-lg tw-px-2 tw-mr-1" :to="'/' + data.slug" v-if="data.author">{{ data.author }}</RouterLink>
                    </div>
                </div>
            </div>
            <div class='col-md-4'>
                <div
                    class="tw-shrink-0 tw-mt-[20px] tw-s1024:mt-0 tw-s1024:w-[320px] tw-s1280:w-[354px] tw-s1024:pl-[20px] tw-s1280:pl-[34px]">
                    <h2
                        class="tw-w-full tw-text-orange-600 tw-mb-2 tw-underline tw-underline-offset-4 tw-decoration-2 tw-uppercase">
                        <a href="/">Top tuần</a>
                    </h2>
                    <div class="tw-s480:grid tw-s480:grid-cols-2 tw-s768:grid-cols-4 tw-s1024:block tw-gap-[10px] tw-overflow-auto tw-max-h-[52rem]">
                        <div class="tw-mb-4 tw-s480:mb-0 tw-s1024:mb-4" v-for="top in listMangaTop" v-bind:key="top">
                            <RouterLink :to="'/' + top.slug" v-if="top._id">
                                <div class="tw-relative tw-rounded-xl tw-overflow-hidden">
                                    <img class="tw-w-[auto]" :src="`${top.showImage}`" :alt="top.name">
                                    <div
                                        class="tw-absolute tw-left-0 tw-right-0 tw-bottom-0 tw-px-[10px] tw-pt-[20px] tw-pb-[5px] tw-bg-gradient-to-b tw-from-transparent tw-to-black tw-text-white tw-dark:text-teal-500">
                                        <span class="tw-text-[12px] tw-font-extralight tw-dark:text-teal-300">{{ top.views
                                        }} lượt
                                            đọc</span>
                                        <h3 class="tw-font-light tw-line-clamp-1">{{ top.name }}</h3>
                                    </div>
                                </div>
                            </RouterLink>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <section class="tw-relative container tw-px-[10px] tw-mt-[20px] tw-pl-[0px]">
            <h2 class="tw-w-full tw-text-orange-600 tw-mb-2 tw-uppercase">ĐỪNG BỎ LỠ</h2>
            <div class="tw-flex tw-snap-x tw-snap-mandatory tw-overflow-x-auto tw-gap-[10px] list-dont" id="list-dont"
                :style="scrollContainerStyle">
                <div v-for="dont in listmanga" v-bind:key="dont"
                    class="tw-relative tw-snap-always tw-snap-start tw-shrink-0">
                    <RouterLink :to="'/' + dont.slug" v-if="dont._id">
                        <div class="tw-overflow-hidden tw-w-full tw-rounded-xl">
                            <img class="tw-w-[200px] tw-h-[300px]" :src="`${dont?.coverImage}`" :alt="dont.name">
                            <span
                                class="tw-absolute tw-top-[10px] tw-left-[10px] tw-rounded-lg tw-px-2 tw-bg-red-500/80 tw-text-white tw-text-[12px] tw-font-light">{{
                                    dont.views }}
                                <i class="fas fa-eye"></i></span>
                        </div>
                        <h3
                            class="tw-text-[14px] s360:tw-text-[16px] tw-text-left s640:tw-text-center line-clamp-2 tw-w-[10rem] tw-overflow-hidden">
                            {{ dont.name }}</h3>
                    </RouterLink>
                </div>
                <div v-show="!isMaxList"
                    class="tw-absolute tw-top-[40%] tw-right-[1rem] tw-text-[2rem] tw-text-[red] tw-cursor-pointer"
                    @click="scrollListMovie()">
                    <i class="fa-solid fa-circle-arrow-right"></i>
                </div>
                <div v-show="isMaxList"
                    class="tw-absolute tw-top-[40%] tw-left-[1rem] tw-text-[2rem] tw-text-[red] tw-cursor-pointer"
                    @click="scrollListMovie(true)">
                    <i class="fa-solid fa-circle-arrow-left"></i>
                </div>
            </div>
        </section>
    </div>
    <div v-else>
        <div class="alert alert-warning tw-mt-[1rem] text-center" role="alert">
            <p>Không tìm thấy truyện phù hợp</p>
            <RouterLink to="/" class="btn">Back To Home</RouterLink>
        </div>
    </div>
</template>

<script>
import instance from '@/Unilities/axios';
import { useRoute } from 'vue-router';
import { debounce } from 'lodash';
import store from '@/store/store';

export default {
    name: "detail-main",
    setup() {
        const route = useRoute();
        const name = route.params.name;

        return {
            name
        };
    },
    data() {
        return {
            data: {},
            listChapter: [],
            currentPage: 1,
            isLoadingMore: false,
            inputSearch: '',
            listmanga: [],
            listMangaTop: [],
            isMaxList: false,
            scrollContainerStyle: {
                scrollBehavior: "smooth",
                overflowX: "scroll",
            },
            filterBy: ''
        }
    },
    async created() {
        store.dispatch('app/setIsLoading', true);
        await Promise.all([this.getDetail(), this.getListMangas(), this.getListMangasTop()]);
        document.title = `${this.data.name} - NetTruyenVui`;
        this.listChapter = (await this.getListChapter())?.data;
        store.dispatch('app/setIsLoading', false);
    },
    async beforeRouteUpdate(to, from, next) {
        if (to.hash.startsWith('#')) {
            next();
            return;
        }
        this.name = to.params.name;
        // Thực hiện các tác vụ tải lại component hoặc khởi tạo lại dữ liệu
        await Promise.all([this.getDetail(), this.getListMangas(), this.getListMangasTop()])
        this.listChapter = (await this.getListChapter())?.data;
        // Tiếp tục điều hướng
        next();
    },
    methods: {
        scrollListMovie(reduce) {
            let container = document.getElementById('list-dont');
            if (!reduce) {
                container.scrollLeft += 200; // Cuộn 200px bên phải
                this.isMaxList = container.scrollLeft >= (container.scrollWidth - container.clientWidth) - 300;
            } else {
                container.scrollLeft = 0; // Cuộn về đầu danh sách
                this.isMaxList = false;
            }
        },
        async getListMangas() {
            try {
                let query = {
                    page: 1,
                    limit: 15,
                    sortField: 'createdAt',
                    sortOrder: 'desc',
                    filterOptions: JSON.stringify({
                        "genre": { "$regex": "\\bcomedy\\b", "$options": "i" }
                    })
                }
                const response = await instance.get(`/manga/`, {
                    params: query
                });
                this.listmanga = response.data.result.data;
            } catch (error) {
                // Xử lý lỗi ở đây nếu cần thiết
                console.error('Error in getListMangas:', error);
            }
        },
        async getListMangasTop() {
            try {
                let query = {
                    page: 1,
                    limit: 5,
                    sortField: 'views',
                    sortOrder: 'asc',
                    filterOptions: JSON.stringify({
                        "genre": { "$regex": "\\bYuri\\b", "$options": "i" }
                    })
                }
                const response = await instance.get(`/manga/`, {
                    params: query
                });
                this.listMangaTop = response.data.result.data;
            } catch (error) {
                // Xử lý lỗi ở đây nếu cần thiết
                console.error('Error in getListMangasTop:', error);
            }
        },
        async getDetail() {
            this.data = (await instance.get('/manga/' + this.name)).data.result;
        },
        async getListChapter() {
            let url = `/chapter/?page=${this.currentPage}&index=10&sortField=number&sortOrder=desc&filterOptions={"manga":"${this.data._id}"}`;
            if (this.filterBy) {
                url = `/chapter/?page=${this.currentPage}&index=10&sortField=number&sortOrder=desc&filterOptions={"manga":"${this.data._id}"}&filter={"title": "${this.filterBy}"}`;
            }
            return (await instance.get(url)).data.result;
        },
        async loadMore() {
            this.isLoadingMore = true;
            this.currentPage += 1;
            const more = await this.getListChapter();
            this.listChapter = [...this.listChapter, ...more.data];
            this.isLoadingMore = false;
        },
        async handleInput(event) {
            this.filterBy = event.target.value;
            this.currentPage = 1;
            this.listChapter = (await this.getListChapter()).data;
        },
    },
    computed: {
        debouncedHandleInput() {
            return debounce(this.handleInput, 300); // Thời gian chờ 300ms (0.3 giây)
        },
        genre() {
            return this.data?.genre?.split(";");
        },
        newestPage() {
            return this.listChapter[0];
        }
    }
}
</script>

<style>
.list-dont::-webkit-scrollbar {
    width: 1px;
}
</style>