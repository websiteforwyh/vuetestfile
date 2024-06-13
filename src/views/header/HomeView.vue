<template>
  <div class="box">
    <aside class="side">
      <div class="side-list">
        <router-link to="/home/mysql">Mysql</router-link>
      </div>
      <div class="side-list">
        <router-link to="/home/vue">Vue</router-link>
      </div>
    </aside>
    <router-view />
    <div v-if="!isChildRoute" class="container">
      <!-- 内容只在父路由显示 -->
      <div class="bar">
        <router-link to="/home">Home</router-link>
      </div>
      <div class="content">
        <h4>此网站演示一些环境配置与学习过程中遇到的问题，若有表达不正确或不完整的敬请指教</h4>
        <h4>有些配置或问题的解决方法并不唯一，如果有别的方法我只字未提，那大抵是我不会吧</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isChildRoute() {
      // 如果当前路由的路径为父路由的路径加上子路由的路径，则说明当前路由为子路由
      return this.$route.fullPath.includes('/home/');
    },
  },
};
</script>

<style scoped>
.container {
  display: grid;
}

.content {
  text-align: center;
  justify-content: center;
}
</style>
