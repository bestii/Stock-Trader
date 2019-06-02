<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
</style>

<script>
export default {
  created() {
    this.$store.dispatch('initStocks');
  }
};
</script>
