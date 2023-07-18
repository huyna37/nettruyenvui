<template>
    <div class='container tw-mt-[1rem]'>
        <template v-if="data && data.length > 0">
            <section class="row tw-mb-4">
                <h2
                    class="tw-w-full tw-text-orange-600 tw-mb-2 tw-uppercase tw-underline tw-underline-offset-4 tw-decoration-2 tw-mb-[1.2rem]">
                    Danh sách truyện</h2>
                <div class="col-lg-2 col-md-3 col-sm-4 col-4" v-for="manga in data" v-bind:key="manga">
                    <RouterLink :to="'/' + manga.slug"
                        class='col-lg-2 col-md-3 col-4 max-lg:tw-mb-[2.5rem] hover:overscroll-contain hover:tw-shadow-2xl'>
                        <img class="tw-h-[auto] tw-w-full tw-rounded-xl" :src="manga.coverImage" :alt="manga.name">
                        <p
                            class='tw-text-slate-800 tw-h-[37px] tw-overflow-hidden tw-text-center tw-mt-1 max-sm:tw-text-[11px] tw-text-[13px]'>
                            {{ manga.name }}
                        </p>
                    </RouterLink>
                </div>
            </section>
            <Paginate @page-change="updatePaginate" :currentPage="pageIndex" :totalPages="totalPages"></Paginate>
        </template>

        <template v-else>
            <div class="alert alert-primary text-center w-100 mb-3" role="alert">
                <div>Không Có kết quả!</div>
                <RouterLink to="/" class="btn btn-primary tw-text-yellow">Back To Home</RouterLink>
            </div>
        </template>
    </div>
</template>

<script>
import instance from '@/Unilities/axios/index';
import { useRoute } from 'vue-router';
import Paginate from '@/shared/paginate'
export default {
    name: "home-main",
    components: {
        Paginate
    },
    data() {
        return {
            data: [],
            pageIndex: 1,
            limit: 18,
            totalPages: 1,
        }
    },
    setup() {
        const route = useRoute();
        const name = route.params.name;
        const category = route.params.category;
        return {
            name,
            category,
            route
        };
    },
    async created() {
        await this.getMangas();
    },
    methods: {
        async updatePaginate(event) {
            this.pageIndex = event;
            await this.getMangas();
        },
        async getMangas() {
            try {
                let query = {
                    page: this.pageIndex,
                    limit: this.limit,
                    sortField: 'updatedAt',
                    sortOrder: 'desc'
                }
                if (this.category) {
                    query.filterOptions = JSON.stringify({ "genre": { $regex: `\\b${this.category}\\b`, $options: 'i' } });
                }
                if(this.name ) {
                    query.filter = JSON.stringify({ name: this.name })
                }
                const response = await instance.get(`/manga/`, {
                    params: query
                });
                const result = response.data.result;
                this.data = result.data;

                if (this.data.length === 1) {
                    const manga = this.data[0];
                    this.$router.push(`/${manga.slug}`);
                }

                this.totalPages = result.totalPages;
            } catch (error) {
                // Xử lý lỗi ở đây nếu cần thiết
                console.error(error);
            }
        }

    },
    beforeRouteUpdate(to, from, next) {
        this.name = to.params.name;
        this.category = to.params.category;
        // Thực hiện các tác vụ tải lại component hoặc khởi tạo lại dữ liệu
        this.getMangas(); // Ví dụ: Gọi phương thức loadData để tải lại dữ liệu

        // Tiếp tục điều hướng
        next();
    },
}
</script>

