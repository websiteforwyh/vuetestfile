<template>
  <div class="box">
    <aside class="side">
      <div class="side-list">1234</div>
    </aside>
    <div id="container" class="container" @scroll="checkScroll">
      <div class="bar">
        <router-link to="/About">About</router-link>
      </div>
      <div class="content">
        <h2>此为生成脚手架自带文件，作预留，待改动</h2>
      </div>
    </div>
    <button class="scroll-to-top" :style="{ display: isAtTop ? 'none' : 'block' }" @click="scrollToTop">
    Top
  </button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isAtTop: true,
      container: 0
    };
  },
  methods: {
    checkScroll() {
      if(this.container.scrollTop != 0){
        this.$store.commit('isAtTop', false);
      }else{
        this.$store.commit('isAtTop', true);
      }
    },
    scrollToTop() {
      container.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
  mounted() {
    // 获取 container 元素
    this.container = document.getElementById("container");
  },
};
</script>

<style>
h2 {
  text-align: center;
}
</style>