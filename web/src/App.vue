<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
  import Header from "@/components/common/header.vue"

  export default {
    name: "App",
    components: {
      navbar: Header
    }
  }
</script>

<style>
  body{
    margin: 0;
    padding: 0;
  }
</style>
