<template>
    <!-- Header -->
    <div class="relative tw-bg-emerald-600 tw-md:pt-32 tw-pb-32 tw-pt-12">
      <div class="tw-px-4 tw-md:px-10 tw-mx-auto tw-w-full">
        <div>
          <!-- Card stats -->
          <div class="tw-flex -tw-flex-wrap">
            <div class="tw-w-full tw-lg:w-6/12 tw-xl:w-3/12 tw-px-4">
              <card-stats
                statSubtitle="TRAFFIC"
                statTitle="350,897"
                statArrow="up"
                statPercent="3.48"
                statPercentColor="tw-text-emerald-500"
                statDescripiron="Since last month"
                statIconName="far fa-chart-bar"
                statIconColor="tw-bg-red-500"
              />
            </div>
            <div class="tw-w-full tw-lg:w-6/12 tw-xl:w-3/12 tw-px-4">
              <card-stats
                statSubtitle="NEW USERS"
                statTitle="2,356"
                statArrow="down"
                statPercent="3.48"
                statPercentColor="tw-text-red-500"
                statDescripiron="Since last week"
                statIconName="fas fa-chart-pie"
                statIconColor="tw-bg-orange-500"
              />
            </div>
            <div class="tw-w-full tw-lg:w-6/12 tw-xl:w-3/12 tw-px-4">
              <card-stats
                statSubtitle="SALES"
                statTitle="924"
                statArrow="down"
                statPercent="1.10"
                statPercentColor="tw-text-orange-500"
                statDescripiron="Since yesterday"
                statIconName="fas fa-users"
                statIconColor="tw-bg-pink-500"
              />
            </div>
            <div class="tw-w-full tw-lg:w-6/12 tw-xl:w-3/12 tw-px-4">
              <card-stats
                statSubtitle="PERFORMANCE"
                statTitle="49,65%"
                statArrow="up"
                statPercent="12"
                statPercentColor="tw-text-emerald-500"
                statDescripiron="Since last month"
                statIconName="fas fa-percent"
                statIconColor="tw-bg-emerald-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import CardStats from "./cardStats.vue";
  
  export default {
    name: 'header-admin',
    components: {
      CardStats,
    },
  };
  </script>
  