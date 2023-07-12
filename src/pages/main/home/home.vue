<template>
    <div class='container tw-mt-[1rem]' v-if="firstSession1">
        <section class="row" v-for="data1 in firstSession1" v-bind:key="data1">
            <RouterLink :to='data1.slug' class='col-md-12 col-lg-6 max-md:tw-mb-[1rem]'
                v-if="data1.typeShow == 'first-session1'">
                <div class="tw-h-full tw-relative">
                    <img class="tw-w-full tw-h-full tw-rounded-xl" :src="data1.coverImage" data-id="100322"
                        :alt="data1.name">
                    <div
                        class="tw-rounded-xl tw-absolute tw-left-0 tw-right-0 tw-bottom-0 tw-px-[10px] max-md:tw-pt-[5px] tw-pt-[80px] tw-pb-[5px] tw-bg-gradient-to-b tw-from-transparent tw-to-black tw-text-white tw-dark:text-teal-500">
                        <span class="tw-font-extralight tw-text-[12px] tw-dark:text-teal-300">{{ data1.views }} lượt
                            đọc</span>
                        <h2 class="tw-font-light">{{ data1.name }}</h2>
                    </div>
                </div>
            </RouterLink>
            <div class='col-md-12 col-lg-6 tw-flex tw-flex-wrap max-lg:tw-mt-[0.1rem]' v-if="firstSession">
                <div class='col-md-6 col-6' v-for="(data2, index) in firstSession" v-bind:key="index">
                    <div :class="{ '[&:nth-child(1)]:tw-mb-2 [&:nth-child(1)]:tw-mr-2': index == 0, '[&:nth-child(2)]:tw-mb-2 [&:nth-child(4)]:tw-mr-2': index == 2 }"
                        class="tw-relative max-md:odd:tw-mt-2 max-md:old:tw-mr-1 max-md:tw-mr-[5px] md:tw-mr-[5px] tw-h-[160px]">
                        <RouterLink :to="data2?.slug ?? '/'">
                            <div class="tw-h-full tw-relative">
                                <img class="tw-w-full tw-h-full tw-rounded-xl" :src="data2.coverImage" data-id="100305"
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
            <template v-for="(data3, index3) in secondSession" v-bind:key="index3">
                <RouterLink :to="data3.slug"
                    class='col-lg-2 col-md-3 col-4 max-lg:tw-mb-[2rem] hover:overscroll-contain hover:tw-shadow-2xl tw-rounded-xl'>
                    <img class="tw-w-full tw-h-full " :src="data3.coverImage" :alt="data3.name">
                    <p
                        class='tw-text-slate-800 tw-h-[37px] tw-overflow-hidden tw-text-center tw-mt-1 max-sm:tw-text-[11px] tw-text-[13px]'>
                        {{ data3.name }}
                    </p>
                </RouterLink>
            </template>

        </section>

        <div class="tw-rounded-lg tw-mt-[3rem] row tw-bg-violet-900/80 dark:tw-bg-orange-600/80 tw-max-h-[220px]">
            <section class="tw-px-[10px] tw-py-[10px] s768:tw-py-[10px]">
                <h2 class="tw-w-full tw-text-white tw-mb-2 tw-underline tw-underline-offset-4 tw-decoration-2 tw-uppercase">
                    <a href="/truyen-co-phim">TRUYỆN CÓ PHIM</a>
                </h2>
                <div
                    class="tw-flex tw-snap-x tw-snap-mandatory tw-overflow-y-auto tw-scrollbar-none s640:tw-grid s640:tw-grid-cols-4 tw-gap-[10px]">
                    <div
                        class="tw-relative tw-snap-always tw-snap-start tw-shrink-0 tw-w-[290px] s640:tw-w-auto s640:tw-h-auto">
                        <a class="" href="/horimiya">
                            <div class="tw-overflow-hidden tw-w-full tw-rounded-xl">
                                <img class="tw-w-full tw-h-full"
                                    src="https://s199.imacdn.com/tt24/2023/06/26/fb7f1ddc82fe0af4_4bc37cea37f051a7_7452716877685201185710.jpg"
                                    data-src="https://s199.imacdn.com/tt24/2023/06/26/fb7f1ddc82fe0af4_4bc37cea37f051a7_7452716877685201185710.jpg"
                                    data-id="100322" alt="Horimiya">
                                <span
                                    class="tw-absolute tw-top-[10px] tw-left-[10px] tw-rounded-lg tw-px-2 tw-bg-violet-900/80 dark:tw-bg-teal-900/80 tw-text-white tw-text-[12px] tw-font-light">258.9K
                                    <i class="fas fa-eye"></i></span>
                            </div>
                            <h3
                                class="tw-text-[14px] s360:tw-text-[16px] tw-text-white tw-text-left s640:tw-text-center tw-line-clamp-1">
                                Horimiya</h3>
                        </a>
                    </div>
                    <div
                        class="tw-relative tw-snap-always tw-snap-start tw-shrink-0 tw-w-[290px] s640:tw-w-auto s640:tw-h-auto">
                        <a class="" href="/kakushigoto">
                            <div class="tw-overflow-hidden tw-w-full tw-rounded-xl">
                                <img class="tw-w-full tw-h-full"
                                    src="https://s200.imacdn.com/tt24/2020/03/10/2c9ffbe0d8f43418_d86c2dee32e4576b_71371158385725479674.jpg"
                                    data-src="https://s200.imacdn.com/tt24/2020/03/10/2c9ffbe0d8f43418_d86c2dee32e4576b_71371158385725479674.jpg"
                                    data-id="100020" alt="Kakushigoto">
                                <span
                                    class="tw-absolute tw-top-[10px] tw-left-[10px] tw-rounded-lg tw-px-2 tw-bg-violet-900/80 dark:tw-bg-teal-900/80 tw-text-white tw-text-[12px] tw-font-light">12.6K
                                    <i class="fas fa-eye"></i></span>
                            </div>
                            <h3
                                class="tw-text-[14px] s360:tw-text-[16px] tw-text-white tw-text-left s640:tw-text-center tw-line-clamp-1">
                                Kakushigoto</h3>
                        </a>
                    </div>
                    <div
                        class="tw-relative tw-snap-always tw-snap-start tw-shrink-0 tw-w-[290px] s640:tw-w-auto s640:tw-h-auto">
                        <a class="" href="/btooom">
                            <div class="tw-overflow-hidden tw-w-full tw-rounded-xl">
                                <img class="tw-w-full tw-h-full"
                                    src="https://s200.imacdn.com/tt24/2020/06/16/7399e91132ce0ac7_aed0813b45607809_755451592308814545957.jpg"
                                    data-src="https://s200.imacdn.com/tt24/2020/06/16/7399e91132ce0ac7_aed0813b45607809_755451592308814545957.jpg"
                                    data-id="100165" alt="Btooom!">
                                <span
                                    class="tw-absolute tw-top-[10px] tw-left-[10px] tw-rounded-lg tw-px-2 tw-bg-violet-900/80 dark:tw-bg-teal-900/80 tw-text-white tw-text-[12px] tw-font-light">47.4K
                                    <i class="fas fa-eye"></i></span>
                            </div>
                            <h3
                                class="tw-text-[14px] s360:tw-text-[16px] tw-text-white tw-text-left s640:tw-text-center tw-line-clamp-1">
                                Btooom!</h3>
                        </a>
                    </div>
                    <div
                        class="tw-relative tw-snap-always tw-snap-start tw-shrink-0 tw-w-[290px] s640:tw-w-auto s640:tw-h-auto">
                        <a class="" href="/hanma-baki">
                            <div class="tw-overflow-hidden tw-w-full tw-rounded-xl">
                                <img class="tw-w-full tw-h-full"
                                    src="https://s199.imacdn.com/tt24/2023/02/08/59be2e5b8e05bcc6_8f3277b1ccb819a1_9721616758415766118684.jpg"
                                    data-src="https://s199.imacdn.com/tt24/2023/02/08/59be2e5b8e05bcc6_8f3277b1ccb819a1_9721616758415766118684.jpg"
                                    data-id="100718" alt="Hanma Baki">
                                <span
                                    class="tw-absolute tw-top-[10px] tw-left-[10px] tw-rounded-lg tw-px-2 tw-bg-violet-900/80 dark:tw-bg-teal-900/80 tw-text-white tw-text-[12px] tw-font-light">41.7K
                                    <i class="fas fa-eye"></i></span>
                            </div>
                            <h3
                                class="tw-text-[14px] s360:tw-text-[16px] tw-text-white tw-text-left s640:tw-text-center tw-line-clamp-1">
                                Hanma Baki</h3>
                        </a>
                    </div>
                    <div
                        class="tw-relative tw-snap-always tw-snap-start tw-shrink-0 tw-w-[290px] s640:tw-w-auto s640:tw-h-auto">
                        <a class="" href="/btooom">
                            <div class="tw-overflow-hidden tw-w-full tw-rounded-xl">
                                <img class="tw-w-full tw-h-full"
                                    src="https://s200.imacdn.com/tt24/2020/06/16/7399e91132ce0ac7_aed0813b45607809_755451592308814545957.jpg"
                                    data-src="https://s200.imacdn.com/tt24/2020/06/16/7399e91132ce0ac7_aed0813b45607809_755451592308814545957.jpg"
                                    data-id="100165" alt="Btooom!">
                                <span
                                    class="tw-absolute tw-top-[10px] tw-left-[10px] tw-rounded-lg tw-px-2 tw-bg-violet-900/80 dark:tw-bg-teal-900/80 tw-text-white tw-text-[12px] tw-font-light">47.4K
                                    <i class="fas fa-eye"></i></span>
                            </div>
                            <h3
                                class="tw-text-[14px] s360:tw-text-[16px] tw-text-white tw-text-left s640:tw-text-center tw-line-clamp-1">
                                Btooom!</h3>
                        </a>
                    </div>
                </div>
            </section>
        </div>

        <section class="row tw-mt-[20px] tw-overflow-hidden">
            <h2
                class="tw-color-[red] tw-w-full tw-text-orange-600 tw-mb-2 tw-underline tw-underline-offset-4 tw-decoration-2 tw-uppercase">
                ĐỪNG BỎ LỠ</h2>
            <div
                class="tw-flex tw-snap-x tw-snap-mandatory tw-overflow-x-auto s640:tw-grid s640:tw-grid-cols-4 tw-gap-[10px]">
                <div
                    class="tw-relative tw-snap-always tw-snap-start tw-shrink-0 tw-w-[260px] s640:tw-w-auto s640:tw-h-auto">
                    <a class="" href="/black-jack-ni-yoroshiku">
                        <div class="tw-w-full tw-rounded-xl">
                            <img class="tw-w-full tw-h-full"
                                src="https://s199.imacdn.com/tt24/2023/01/05/1d91cc0f7b9ec5bc_cfeb04ad144098ab_63797167290453659674.jpg"
                                data-src="https://s199.imacdn.com/tt24/2023/01/05/1d91cc0f7b9ec5bc_cfeb04ad144098ab_63797167290453659674.jpg"
                                data-id="100679" alt="Black Jack ni Yoroshiku">
                            <span
                                class="tw-absolute tw-top-[10px] tw-left-[10px] tw-rounded-lg tw-px-2 tw-bg-red-500/80 tw-text-white tw-text-[12px] tw-font-light">8.6K
                                <i class="fas fa-eye"></i></span>
                        </div>
                        <h3 class="tw-text-[14px] s360:tw-text-[16px] tw-text-left s640:tw-text-center tw-line-clamp-2">
                            Black Jack ni Yoroshiku</h3>
                    </a>
                </div>
                <div
                    class="tw-relative tw-snap-always tw-snap-start tw-shrink-0 tw-w-[260px] s640:tw-w-auto s640:tw-h-auto">
                    <a class="" href="/khong-nen-tuy-tien-doi-nghich-voi-thu-truong">
                        <div class="tw-overflow-hidden tw-w-full tw-rounded-xl">
                            <img class="tw-w-full tw-h-full"
                                src="https://s199.imacdn.com/tt24/2023/06/15/9d3bf0afbebbba2b_9cb4919fe472fea3_6405216867627278185710.jpg"
                                data-src="https://s199.imacdn.com/tt24/2023/06/15/9d3bf0afbebbba2b_9cb4919fe472fea3_6405216867627278185710.jpg"
                                data-id="100867" alt="Không Nên Tùy Tiện Đối Nghịch Với Thủ Trưởng">
                            <span
                                class="tw-absolute tw-top-[10px] tw-left-[10px] tw-rounded-lg tw-px-2 tw-bg-red-500/80 tw-text-white tw-text-[12px] tw-font-light">581
                                <i class="fas fa-eye"></i></span>
                        </div>
                        <h3 class="tw-text-[14px] s360:tw-text-[16px] tw-text-left s640:tw-text-center tw-line-clamp-2">
                            Không Nên Tùy Tiện Đối Nghịch Với Thủ Trưởng</h3>
                    </a>
                </div>
                <div
                    class="tw-relative tw-snap-always tw-snap-start tw-shrink-0 tw-w-[260px] s640:tw-w-auto s640:tw-h-auto">
                    <a class="" href="/isekai-cheat-survival-meshi">
                        <div class="tw-overflow-hidden tw-w-full tw-rounded-xl">
                            <img class="tw-w-full tw-h-full"
                                src="https://s199.imacdn.com/tt24/2023/01/05/26753c5e35878874_488343544b7eaad7_91013167290827049674.jpg"
                                data-src="https://s199.imacdn.com/tt24/2023/01/05/26753c5e35878874_488343544b7eaad7_91013167290827049674.jpg"
                                data-id="100680" alt="Isekai Cheat Survival Meshi">
                            <span
                                class="tw-absolute tw-top-[10px] tw-left-[10px] tw-rounded-lg tw-px-2 tw-bg-red-500/80 tw-text-white tw-text-[12px] tw-font-light">14.4K
                                <i class="fas fa-eye"></i></span>
                        </div>
                        <h3 class="tw-text-[14px] s360:tw-text-[16px] tw-text-left s640:tw-text-center tw-line-clamp-2">
                            Isekai Cheat Survival Meshi</h3>
                    </a>
                </div>
                <div
                    class="tw-relative tw-snap-always tw-snap-start tw-shrink-0 tw-w-[260px] s640:tw-w-auto s640:tw-h-auto">
                    <a class="" href="/ban-gai-toi-khong-chi-de-thuong">
                        <div class="tw-overflow-hidden tw-w-full tw-rounded-xl">
                            <img class="tw-w-full tw-h-full"
                                src="https://s199.imacdn.com/tt24/2022/11/30/20ad1f93e845ce70_6800eee54c41dd65_6408216698091465118684.jpg"
                                data-src="https://s199.imacdn.com/tt24/2022/11/30/20ad1f93e845ce70_6800eee54c41dd65_6408216698091465118684.jpg"
                                data-id="100456" alt="Bạn Gái Tôi Không Chỉ Dễ Thương...">
                            <span
                                class="tw-absolute tw-top-[10px] tw-left-[10px] tw-rounded-lg tw-px-2 tw-bg-red-500/80 tw-text-white tw-text-[12px] tw-font-light">220.7K
                                <i class="fas fa-eye"></i></span>
                        </div>
                        <h3 class="tw-text-[14px] s360:tw-text-[16px] tw-text-left s640:tw-text-center tw-line-clamp-2">Bạn
                            Gái Tôi Không Chỉ Dễ Thương...</h3>
                    </a>
                </div>
                <div
                    class="tw-relative tw-snap-always tw-snap-start tw-shrink-0 tw-w-[260px] s640:tw-w-auto s640:tw-h-auto">
                    <a class="" href="/black-jack-ni-yoroshiku">
                        <div class="tw-overflow-hidden tw-w-full tw-rounded-xl">
                            <img class="tw-w-full tw-h-full"
                                src="https://s199.imacdn.com/tt24/2023/01/05/1d91cc0f7b9ec5bc_cfeb04ad144098ab_63797167290453659674.jpg"
                                data-src="https://s199.imacdn.com/tt24/2023/01/05/1d91cc0f7b9ec5bc_cfeb04ad144098ab_63797167290453659674.jpg"
                                data-id="100679" alt="Black Jack ni Yoroshiku">
                            <span
                                class="tw-absolute tw-top-[10px] tw-left-[10px] tw-rounded-lg tw-px-2 tw-bg-red-500/80 tw-text-white tw-text-[12px] tw-font-light">8.6K
                                <i class="fas fa-eye"></i></span>
                        </div>
                        <h3 class="tw-text-[14px] s360:tw-text-[16px] tw-text-left s640:tw-text-center tw-line-clamp-2">
                            Black Jack ni Yoroshiku</h3>
                    </a>
                </div>
            </div>
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
            this.data = (await instance.get('/manga/?page=1&index=10')).data.result.data;
        }
    },
    computed: {
        firstSession() {
            return this.data.filter(x => {
                return x.typeShow == 'first-session';
            });
        },
        firstSession1() {
            return this.data.filter(x => {
                return x.typeShow == 'first-session1';
            });
        },
        secondSession() {
            return this.data.filter(x => {
                return x.typeShow !== 'first-session1' && x.typeShow !== 'first-session';
            });
        }
    }

}
</script>

