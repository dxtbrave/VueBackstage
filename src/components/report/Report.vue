<template>
  <div>
    <!--  面包屑导航区  -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>数据统计</el-breadcrumb-item>
      <el-breadcrumb-item>数据报表</el-breadcrumb-item>
    </el-breadcrumb>

    <!--  卡片视图区  -->
    <report-card-view/>

  </div>
</template>

<script>
import ReportCardView from "@/components/report/ReportCardView";
export default {
name: "Report",
  components:{
  ReportCardView,
  }
}
</script>

<style scoped>

</style>