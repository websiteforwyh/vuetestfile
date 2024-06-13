<template>
  <div class="box">
    <aside class="side">
      <div class="side-list">1234</div>
    </aside>
    <div id="container" class="container" @scroll="handleScroll">
      <div class="bar">
        <router-link to="/About">About</router-link>
      </div>
      <div class="content">
        <h2>此为生成脚手架自带文件，作预留，待改动</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleScroll() {
      this.$store.commit('setContainerScrolled', true);
    }
  }
};
</script>

<style>
h2 {
  text-align: center;
  justify-content: center;
}
</style>
