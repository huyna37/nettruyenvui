<template>
    <div class='container tw-mt-[1rem]'>
        <section class="row">
            <RouterLink v-if="firstSession1" :to='firstSession1.slug' class='col-md-12 col-lg-6 max-md:tw-mb-[1rem]'>
                <div class="tw-h-full tw-relative">
                    <img class="tw-w-full tw-h-full tw-rounded-xl" :src="firstSession1.showImage ?? firstSession1.coverImage" data-id="100322"
                        :alt="firstSession1.name">
                    <div
                        class="tw-rounded-xl tw-absolute tw-left-0 tw-right-0 tw-bottom-0 tw-px-[10px] max-md:tw-pt-[5px] tw-pt-[80px] tw-pb-[5px] tw-bg-gradient-to-b tw-from-transparent tw-to-black tw-text-white tw-dark:text-teal-500">
                        <span class="tw-font-extralight tw-text-[12px] tw-dark:text-teal-300">{{ firstSession1.views }} lượt
                            đọc</span>
                        <h2 class="tw-font-light">{{ firstSession1.name }}</h2>
                    </div>
                </div>
            </RouterLink>
            <div class='col-md-12 col-lg-6 tw-flex tw-flex-wrap max-lg:tw-mt-[0.1rem]'>
                <div class='col-md-6 col-6' v-for="(data2, index) in firstSession" v-bind:key="index">
                    <div :class="{ '[&:nth-child(1)]:tw-mb-2 [&:nth-child(1)]:tw-mr-2': index == 0, '[&:nth-child(2)]:tw-mb-2 [&:nth-child(4)]:tw-mr-2': index == 2 }"
                        class="tw-relative max-md:odd:tw-mt-2 max-md:old:tw-mr-1 max-md:tw-mr-[5px] md:tw-mr-[5px] tw-h-[160px]">
                        <RouterLink :to="data2?.slug ?? '/'">
                            <div class="tw-h-full tw-relative">
                                <img class="tw-w-full tw-h-full tw-rounded-xl" :src="data2.showImage ?? data2.coverImage" data-id="100305"
                                    :alt="data2.name">
                                <div
                                    class="tw-absolute tw-rounded-xl tw-left-0 tw-right-0 tw-bottom-0 tw-px-[10px] max-md:tw-pt-[5px] tw-pt-[80px] tw-pb-[5px] tw-bg-gradient-to-b tw-from-transparent tw-to-black tw-text-white tw-dark:text-teal-500">
                                    <span class="tw-font-extralight tw-text-[12px] tw-dark:text-teal-300">1,371,610 lượt
                                        đọc</span>
                                    <h2 class="tw-font-light max-md:tw-text-[12px]">{{ data2.name }}
                                    </h2>
                                </div>
                            </div>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </section>

        <!-- Phần nội dung  -->
        <section class="tw-mt-[1rem] row">
            <h2
                class="tw-color-[red] tw-w-full tw-text-orange-600 tw-mb-2 tw-underline tw-underline-offset-4 tw-decoration-2 tw-uppercase">
                <a href="/chap-moi-nhat">CHƯƠNG MỚI NHẤT</a>
            </h2>
            <template v-if="!secondSession">

            </template>
            <template v-else v-for="data3 in secondSession" v-bind:key="data3">
                <RouterLink :to="data3.slug ?? '#'"
                    class='col-lg-2 col-md-3 col-4 max-lg:tw-mb-[2.5rem] hover:overscroll-contain hover:tw-shadow-2xl'>
                    <img class="tw-h-[auto] tw-w-full tw-rounded-xl" :src="data3.coverImage" :alt="data3.name">
                    <p
                        class='tw-text-slate-800 tw-h-[37px] tw-overflow-hidden tw-text-center tw-mt-1 tw-text-[13px]'>
                        {{ data3.name }}
                    </p>
                </RouterLink>
            </template>

        </section>

        <div v-if="thirdSession"
            class="tw-rounded-lg tw-mt-[1rem] max-lg:tw-mt-0 row tw-bg-violet-900/80 dark:tw-bg-orange-600/80 tw-max-h-[220px]">
            <section class="tw-px-[10px] tw-py-[10px] s768:tw-py-[10px]">
                <h2 class="tw-w-full tw-text-white tw-mb-2 tw-underline tw-underline-offset-4 tw-decoration-2 tw-uppercase">
                    <a href="/truyen-co-phim">TRUYỆN CÓ PHIM</a>
                </h2>
                <div
                    class="tw-flex tw-snap-x tw-snap-mandatory tw-overflow-y-auto tw-scrollbar-none s640:tw-grid s640:tw-grid-cols-4 tw-gap-[10px]">
                    <div v-for="(data4) in thirdSession" v-bind:key="data4"
                        class="tw-relative tw-snap-always tw-snap-start tw-shrink-0 tw-w-[290px] s640:tw-w-auto s640:tw-h-auto">
                        <RouterLink :to="data4.slug">
                            <div class="tw-overflow-hidden tw-w-full tw-rounded-xl">
                                <img class="tw-w-full tw-h-full" :src="data4.showImage ?? data4.coverImage"
                                    :alt="data4.name">
                                <span
                                    class="tw-absolute tw-top-[10px] tw-left-[10px] tw-rounded-lg tw-px-2 tw-bg-violet-900/80 dark:tw-bg-teal-900/80 tw-text-white tw-text-[12px] tw-font-light">258.9K
                                    <i class="fas fa-eye"></i></span>
                            </div>
                            <h3
                                class="tw-text-[14px] s360:tw-text-[16px] tw-text-white tw-text-left s640:tw-text-center tw-line-clamp-1">
                                {{ data4.name }}</h3>
                        </RouterLink>
                    </div>
                </div>
            </section>
        </div>

        <section class="tw-mt-[1rem] row">
            <h2
                class="tw-color-[red] tw-w-full tw-text-orange-600 tw-mb-2 tw-underline tw-underline-offset-4 tw-decoration-2 tw-uppercase">
                <a href="/chap-moi-nhat">Những Truyện Bạn có thể thích</a>
            </h2>
            <template v-for="(data5) in otherManga" v-bind:key="data5">
                <RouterLink :to="data5.slug"
                    class='col-lg-2 col-md-3 col-4 max-lg:tw-mb-[2.5rem] hover:overscroll-contain hover:tw-shadow-2xl'>
                    <img class="tw-h-[auto] tw-w-full tw-rounded-xl" :src="data5.coverImage" :alt="data5.name">
                    <p
                        class='tw-text-slate-800 tw-h-[37px] tw-overflow-hidden tw-text-center tw-mt-1 tw-text-[13px]'>
                        {{ data5.name }}
                    </p>
                </RouterLink>
            </template>

        </section>

    </div>
</template>

<script>
import instance from '@/Unilities/axios/index';
export default {
    name: "home-main",
    data() {
        return {
            data: []
        }
    },
    async created() {
        await this.getMangas();
    },
    methods: {
        async getMangas() {
            this.data = (await instance.get('/manga/?sortField=updatedAt&sortOrder=desc')).data.result.data;
        }
    },
    computed: {
        firstSession() {
            return this.data.filter(x => {
                return x.typeShow == '1';
            });
        },
        firstSession1() {
            return this.data.filter(x => {
                return x.typeShow == '1-special';
            })[0];
        },
        secondSession() {
            return this.data.filter(x => {
                return x.typeShow == '2' && !x.urlMovie;
            });
        },
        thirdSession() {
            return this.data.filter(x => {
                return x.urlMovie;
            });
        },
        otherManga() {
            return this.data.filter(x => {
                return x.typeShow == 'other';
            });
        }
    }

}
</script>

