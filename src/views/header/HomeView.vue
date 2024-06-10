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
      <div class="bar">
      <router-link to="/home">Home</router-link>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    // 计算属性，检查当前路由是否为父路由
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
