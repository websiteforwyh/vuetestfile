<template>
  <div id="container" class="container">
    <div class="bar">
      <router-link to="/home">Home</router-link> >
      <router-link to="/home/mysql">Mysql</router-link>
    </div>
    <div class="content">
      <p>1234</p>
      <p>1234</p>
    </div>
  </div>
  <button class="scroll-to-top" :style="{ display: isAtTop ? 'none' : 'block' }" @click="scrollToTop">
    Top
  </button>
</template>

<script>
export default {
  data() {
    return {
      contentStyle: {},
      isAtTop: true,
      container: null
    };
  },
  methods: {
    updateContentStyle() {
      this.$nextTick(() => {
        const screenHeight = screen.height;
        if (screenHeight < 1080) {
          this.contentStyle = {
            padding: '10%'
          };
        } else {
          this.contentStyle = {
            padding: '5% 20%'
          };
        }
      });
    },
    checkScroll() {
      console.log('ScrollY:', container.scrollTop); // 添加日志输出
      if(this.container.scrollTop != 0){
        this.isAtTop = false
      }else{
        this.isAtTop = true
      }
    },
    scrollToTop() {
      console.log("chu fa hua dong");
      container.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
  mounted() {
    // 获取 container 元素
    this.container = document.getElementById("container");

    // 样式更新
    this.updateContentStyle();
    window.addEventListener('resize', this.updateContentStyle);
    // 滚动条监听
    this.container.addEventListener('scroll', this.checkScroll);
    this.checkScroll();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateContentStyle);
  },
};
</script>