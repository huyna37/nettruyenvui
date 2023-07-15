<template>
   <nav class="navbar navbar-expand-lg bg-body-tertiary tw-shadow tw-dark:shadow-slate-700 tw-bg-white tw-dark:bg-slate-800 tw-dark:shadow-slate-700" >
  <div class="container">
    <RouterLink class="navbar-brand tw-bg-clip-text tw-text-transparent tw-bg-gradient-to-r tw-from-red-500 tw-to-violet-500 tw-dark:from-red-500 tw-dark:to-teal-600 tw-text-[22px]" to="/">NETTRUYENVUI</RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink class="nav-link active" aria-current="page" to="/danh-sach">Danh Sách</RouterLink>
        </li>
        <!-- <li class="nav-item">
          <a class="nav-link" href="#">Truyện Hot</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Bảng Xếp Hạng</a>
        </li> -->
      </ul>
      <form class="d-flex" role="search" v-on:submit.prevent="search">
        <input v-model="input" class="form-control me-2 tw-text-[13px]" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success tw-text-[13px] tw-whitespace-nowrap" type="submit">Tìm Kiếm</button>
      </form>
    </div>
  </div>
</nav>
</template>
  
<script>

export default {
    name: "header-main",
    data() {
        return {
          input: ''
        }
    },
    created() {
    },
    computed: {
       
    },
    methods: {
      search() {
        this.$router.push(`/danh-sach/${this.input}`)
      }
    }
}
</script>