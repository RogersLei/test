<template>
  <div class="header">
    <el-menu
      class="navbar"
      mode="horizontal"
      :default-active="$route.path"
      :router="true"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#409EFF">
      <el-menu-item index="/home">Home</el-menu-item>
      <el-menu-item index="/monitor">Monitor</el-menu-item>
      <el-menu-item index="/report">Report</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import API from "@/api";

export default {
  name: "app-header",
  data() {
    return {
    };
  },
  methods: {
  },
  mounted() {
  },
};
</script>

<style scoped>
  .navbar {
    padding: 0 20px;
  }
</style>
