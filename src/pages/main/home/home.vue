<template>
    <div class='tw-mt-[1rem]'>
        <section class="row">
            <template v-if="mangaSpecial">
                <RouterLink :to='mangaSpecial.slug' class='col-md-12 col-lg-6 max-md:tw-mb-[1rem] tw-min-h-[10rem]'>
                    <div class="tw-h-full tw-relative">
                        <img class="tw-w-full tw-h-full tw-rounded-xl"
                            :src="`${mangaSpecial.showImage}`" data-id="100322"
                            :alt="mangaSpecial.name">
                        <!-- <img class="tw-w-full tw-h-full tw-rounded-xl"
                            :src="`https://crawler.meoden.online/manga/${mangaSpecial._id}/showImage`" data-id="100322"
                            :alt="mangaSpecial.name"> -->
                        <div
                            class="tw-rounded-xl tw-absolute tw-left-0 tw-right-0 tw-bottom-0 tw-px-[10px] max-md:tw-pt-[5px] tw-pt-[80px] tw-pb-[5px] tw-bg-gradient-to-b tw-from-transparent tw-to-black tw-text-white tw-dark:text-teal-500">
                            <span class="tw-font-extralight tw-text-[12px] tw-dark:text-teal-300">{{ mangaSpecial.views }}
                                lượt
                                đọc</span>
                            <h2 class="tw-font-light">{{ mangaSpecial.name }}</h2>
                        </div>
                    </div>
                </RouterLink>
            </template>

            <div v-else class='col-md-12 col-lg-6 max-md:tw-mb-[1rem] tw-h-[20rem]'>
                <div class="tw-h-full tw-relative">
                    <img class="tw-w-full tw-h-full tw-rounded-xl" src="#" data-id="100322">
                    <div
                        class="tw-rounded-xl tw-absolute tw-left-0 tw-right-0 tw-bottom-0 tw-px-[10px] max-md:tw-pt-[5px] tw-pt-[80px] tw-pb-[5px] tw-bg-gradient-to-b tw-from-transparent tw-to-black tw-text-white tw-dark:text-teal-500">
                        <span class="tw-font-extralight tw-text-[12px] tw-dark:text-teal-300">0 lượt
                            đọc</span>
                        <h2 class="tw-font-light">...</h2>
                    </div>
                </div>
            </div>
            <div class='col-md-12 col-lg-6 tw-flex tw-flex-wrap max-lg:tw-mt-[0.1rem]'>
                <template v-if="manga1expect && manga1expect.length > 0">
                    <div class='col-md-6 col-6' v-for="(data2, index) in manga1expect" v-bind:key="index">
                        <div :class="{ '[&:nth-child(1)]:tw-mb-2 [&:nth-child(1)]:tw-mr-2': index == 0, '[&:nth-child(2)]:tw-mb-2 [&:nth-child(4)]:tw-mr-2': index == 2 }"
                            class="tw-relative max-md:odd:tw-mt-2 max-md:old:tw-mr-1 max-md:tw-mr-[5px] md:tw-mr-[5px] tw-h-[160px]">
                            <RouterLink :to="data2?.slug ?? '/'">
                                <div class="tw-h-full tw-relative">
                                    <img class="tw-w-full tw-h-full tw-rounded-xl"
                                        :src="`${data2.showImage}`" data-id="100305"
                                        :alt="data2.name">
                                    <!-- <img class="tw-w-full tw-h-full tw-rounded-xl"
                                    :src="`https://crawler.meoden.online/manga/${data2._id}/showImage`" data-id="100305"
                                    :alt="data2.name"> -->
                                    <div
                                        class="tw-absolute tw-rounded-xl tw-left-0 tw-right-0 tw-bottom-0 tw-px-[10px] max-md:tw-pt-[5px] tw-pt-[80px] tw-pb-[5px] tw-bg-gradient-to-b tw-from-transparent tw-to-black tw-text-white tw-dark:text-teal-500">
                                        <span class="tw-font-extralight tw-text-[12px] tw-dark:text-teal-300">{{ data2.views
                                        }} lượt
                                            đọc</span>
                                        <h2 class="tw-font-light max-md:tw-text-[12px]">{{ data2.name }}
                                        </h2>
                                    </div>
                                </div>
                            </RouterLink>
                        </div>
                    </div>
                </template>
                <template v-else>
                    <div class='col-md-6 col-6 tw-relative tw-rounded-xl' v-for="index in 4" v-bind:key="index">
                        <div :class="{ '[&:nth-child(1)]:tw-mb-2 [&:nth-child(1)]:tw-mr-2': index == 0, '[&:nth-child(2)]:tw-mb-2 [&:nth-child(4)]:tw-mr-2': index == 2 }"
                            class="tw-relative max-md:odd:tw-mt-2 max-md:old:tw-mr-1 max-md:tw-mr-[5px] md:tw-mr-[5px] tw-h-[160px] tw-rounded-xl">
                            <RouterLink :to="'/'">
                                <div class="tw-h-full tw-relative">
                                    <img>
                                    <div
                                        class="tw-absolute tw-rounded-xl tw-left-0 tw-right-0 tw-bottom-0 tw-px-[10px] max-md:tw-pt-[5px] tw-pt-[80px] tw-pb-[5px] tw-bg-gradient-to-b tw-from-transparent tw-to-black tw-text-white tw-dark:text-teal-500">
                                        <span class="tw-font-extralight tw-text-[12px] tw-dark:text-teal-300">1,371,610 lượt
                                            đọc</span>
                                        <h2 class="tw-font-light max-md:tw-text-[12px]">
                                        </h2>
                                    </div>
                                </div>
                            </RouterLink>
                        </div>
                    </div>
                </template>


            </div>
        </section>
        <section class="tw-mt-[1rem] row">
            <h2
                class="tw-color-[red] tw-w-full tw-text-orange-600 tw-mb-2 tw-underline tw-underline-offset-4 tw-decoration-2 tw-uppercase">
                <a href="/chap-moi-nhat">Chapter Mới Nhất</a>
            </h2>
            <RouterLink v-for="chapterNew in chapterNewest" v-bind:key="chapterNew"
                :to="`${chapterNew.manga.slug}/${chapterNew.slug}` ?? '#'"
                class='col-lg-2 col-md-3 col-4 max-lg:tw-mb-[1rem] hover:overscroll-contain hover:tw-shadow-2xl scroll-none-custom'>
                <img class="tw-h-[auto] tw-w-full tw-rounded-xl max-md:tw-h-[14rem] md:tw-h-[18rem]"
                    :src="`${chapterNew.manga.coverImage}`"
                    :alt="chapterNew.manga.name">
                <!-- <img class="tw-h-[auto] tw-w-full tw-rounded-xl max-md:tw-h-[14rem] md:tw-h-[18rem]"
                    :src="`https://crawler.meoden.online/manga/${chapterNew.manga._id}/coverImage`"
                    :alt="chapterNew.manga.name"> -->
                <p class='tw-text-slate-800 tw-h-[42px] tw-overflow-hidden tw-text-center tw-mt-1 tw-text-[13px]'>
                    <b>{{ chapterNew.manga.name }}</b> - <b>{{ chapterNew.title }}</b>
                </p>
            </RouterLink>
        </section>

        <div
            class="tw-rounded-lg tw-mt-[1rem] max-lg:tw-mt-0 row tw-bg-violet-900/80 dark:tw-bg-orange-600/80 tw-max-h-[220px]">
            <section class="tw-relative tw-px-[10px] tw-py-[10px] s768:tw-py-[10px]">
                <h2 class="tw-w-full tw-text-white tw-mb-2 tw-underline tw-underline-offset-4 tw-decoration-2 tw-uppercase">
                    <a href="/truyen-co-phim">TRUYỆN CÓ THỂ PHIM</a>
                </h2>
                <div class="tw-flex movie-list tw-snap-x tw-snap-mandatory tw-overflow-y-auto tw-scrollbar-none s640:tw-grid s640:tw-grid-cols-4 tw-gap-[10px]"
                    id="movie-list" :style="scrollContainerStyle">
                    <div v-for="(data4) in mangas2" v-bind:key="data4"
                        class="tw-relative tw-snap-always tw-snap-start tw-shrink-0 tw-w-[290px] s640:tw-w-auto s640:tw-h-auto tw-min-h-[190px]">
                        <RouterLink :to="data4.slug">
                            <div class="tw-overflow-hidden tw-w-full tw-rounded-xl">
                                <img class="tw-w-full tw-h-full"
                                    :src="`${data4.showImage}`" :alt="data4.name">
                                <!-- <img class="tw-w-full tw-h-full"
                                    :src="`https://crawler.meoden.online/manga/${data4._id}/showImage`" :alt="data4.name"> -->
                                <span
                                    class="tw-absolute tw-top-[10px] tw-left-[10px] tw-rounded-lg tw-px-2 tw-bg-violet-900/80 dark:tw-bg-teal-900/80 tw-text-white tw-text-[12px] tw-font-light">{{
                                        data4.views }}
                                    <i class="fas fa-eye"></i></span>
                            </div>
                            <h3
                                class="tw-text-[14px] s360:tw-text-[16px] tw-text-white tw-text-left s640:tw-text-center tw-line-clamp-1">
                                {{ data4.name }}</h3>
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

        <!-- Phần nội dung  -->
        <section class="tw-mt-[1rem] row">
            <h2
                class="tw-color-[red] tw-w-full tw-text-orange-600 tw-mb-2 tw-underline tw-underline-offset-4 tw-decoration-2 tw-uppercase">
                <a href="/chap-moi-nhat">TRUYỆN HAREM</a>
            </h2>
            <RouterLink v-for="data3 in mangas3" v-bind:key="data3" :to="data3.slug ?? '#'"
                class='col-lg-2 col-md-3 col-4 max-lg:tw-mb-[1rem] hover:overscroll-contain hover:tw-shadow-2xl scroll-none-custom'>
                <img class="tw-h-[auto] tw-w-full tw-rounded-xl max-md:tw-h-[14rem] md:tw-h-[18rem]"
                    :src="`${data3.coverImage}`" :alt="data3.name">
                <!-- <img class="tw-h-[auto] tw-w-full tw-rounded-xl max-md:tw-h-[14rem] md:tw-h-[18rem]"
                    :src="`https://crawler.meoden.online/manga/${data3._id}/coverImage`" :alt="data3.name"> -->
                <p class='tw-text-slate-800 tw-h-[42px] tw-overflow-hidden tw-text-center tw-mt-1 tw-text-[13px]'>
                    {{ data3.name }}
                </p>
            </RouterLink>
        </section>
        <section class="tw-mt-[1rem] row">
            <h2
                class="tw-color-[red] tw-w-full tw-text-orange-600 tw-mb-2 tw-underline tw-underline-offset-4 tw-decoration-2 tw-uppercase">
                <a href="/chap-moi-nhat">Những Truyện Bạn có thể thích</a>
            </h2>
            <template v-for="(data5) in mangas4" v-bind:key="data5">
                <RouterLink :to="data5.slug"
                    class='col-lg-2 col-md-3 col-4 max-lg:tw-mb-[1rem] hover:overscroll-contain hover:tw-shadow-2xl'>
                    <img class="tw-h-[auto] tw-w-full tw-rounded-xl max-md:tw-h-[14rem] md:tw-h-[18rem]"
                        :src="`${data5.coverImage}`" :alt="data5.name">
                    <!-- <img class="tw-h-[auto] tw-w-full tw-rounded-xl max-md:tw-h-[14rem] md:tw-h-[18rem]"
                        :src="`https://crawler.meoden.online/manga/${data5._id}/coverImage`" :alt="data5.name"> -->
                    <p class='tw-text-slate-800 tw-h-[42px] tw-overflow-hidden tw-text-center tw-mt-1 tw-text-[13px]'>
                        {{ data5.name }}
                    </p>
                </RouterLink>
            </template>

        </section>

    </div>
</template>

<script>
import instance from '@/Unilities/axios/index';
import store from '@/store/store';
export default {
    name: "home-main",
    data() {
        return {
            mangas1: [],
            mangas2: [],
            mangas3: [],
            mangas4: [],
            isMaxList: false,
            scrollContainerStyle: {
                scrollBehavior: "smooth",
                overflowX: "scroll",
            },
            isLoading: false,
            chapterNewest: []
        }
    },
    async created() {
        store.dispatch('app/setIsLoading', true);
        await Promise.all([this.getMangas1(), this.getMangas2(), this.getMangas3(), this.getMangas4(), this.getChapterNewest()])
        store.dispatch('app/setIsLoading', false);
        this.isLoading = true;
    },
    methods: {
        async getMangas1() {
            let query = {
                page: 1,
                limit: 5,
                sortField: 'views',
                sortOrder: 'desc',
                filterOptions: JSON.stringify({ "genre": { "$regex": "\\bharem\\b", "$options": "i" } })
            }

            const response = await instance.get(`/manga/`, {
                params: query
            });
            this.mangas1 = response.data.result.data;
        },
        async getMangas2() {
            this.mangas2 = (await instance.get('/manga/?page=1&limit=12&filterOptions={"genre": { $regex: "\\baction\\b", $options: "i"}&sortField=views&sortOrder=desc')).data.result.data;
        },
        async getMangas3() {
            this.mangas3 = (await instance.get('/manga/?page=1&limit=12&sortField=name&filterOptions={"genre": { $regex: "\\bharem\\b", $options: "i"}&sortOrder=desc')).data.result.data;
        },
        async getMangas4() {
            // Chuẩn bị truy vấn tìm kiếm
            const query = {
                page: 1,
                limit: 12,
                sortField: "views",
                sortOrder: "desc",
                filterOptions: JSON.stringify({ "genre": { "$regex": "\\becchi\\b", "$options": "i" } })
            };
            const url = '/manga/?' + new URLSearchParams(query);
            this.mangas4 = (await instance.get(url)).data.result.data;
        },
        async getImageById(id, typeImg) {
            return (await instance.get(`/manga/${id}/${typeImg}`))
        },
        scrollListMovie(reduce) {
            let container = document.getElementById('movie-list');
            if (!reduce) {
                container.scrollLeft += 200; // Cuộn 200px bên phải
                this.isMaxList = container.scrollLeft >= (container.scrollWidth - container.clientWidth) - 300;
            } else {
                container.scrollLeft = 0; // Cuộn về đầu danh sách
                this.isMaxList = false;
            }
        },
        async getChapterNewest() {
            this.chapterNewest = (await instance.get(`/chapter/newest/?page=1&index=12`)).data.result;
        }
    },
    computed: {
        mangaSpecial() {
            // Filter the mangas1 array and return the first element where value === 0
            return this.mangas1[0];
        },
        manga1expect() {
            if (!this.mangas1) return [];

            // Filter the mangas1 array and return elements where value is not equal to 0
            return this.mangas1.slice(1);
        },

    }

}
</script>

<style>
#movie-list::-webkit-scrollbar {
    width: 1px;
}
</style>