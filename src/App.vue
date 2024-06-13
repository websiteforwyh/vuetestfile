<template>
  <nav class="header">
    <div @click="goTo('/home')">
      <router-link to="/home" exact active-class="active-link">Home</router-link>
    </div>
    <div @click="goTo('/about')">
      <router-link to="/about" exact active-class="active-link">About</router-link>
    </div>
    <div @click="goTo('/umusic')">
      <router-link to="/umusic" exact active-class="active-link">UMusic</router-link>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  computed: {
    containerScrolled() {
      return this.$store.state.containerScrolled;
    }
  },
  watch: {
    containerScrolled(newValue) {
      if (newValue) {
        // 处理滚动条状态变化
        console.log('Container has been scrolled!');
      }
    }
  },
  methods: {
    goTo(path) {
      this.$router.push(path);
    }
  }
};
</script>


<style>
* {
  margin: 0;
  padding: 0;
}

body,
html {
  overflow: hidden;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.header {
  background: #333;
  height: 80px;
  display: flex;
  border-radius: 5px 5px 0 0;
}

.header a {
  font-weight: bold;
  color: black;
  text-decoration: none;
}

.header a.active-link {
  color: green;
}

.header div {
  padding: 31px;
  display: inline-block;
  cursor: pointer;
  flex-shrink: 0;
}

.header div:hover {
  background: AliceBlue;
}

.box {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  border: 2px groove white;
  display: flex;
}

.side {
  border: 2px groove white;
  width: 180px;
}

.side-list {
  text-align: center;
  padding: 20px;
  border: 4px groove white;
}

.side-list a {
  text-decoration: none;
  color: black;
}

.side-list a:hover{
  color: paleturquoise;
}

a.router-link-active {
  color: yellowgreen;
}

a.router-link-active:hover {
  color: yellowgreen;
}

.bar {
  border: 2px groove white;
  display: flex;
  height: 20px;
  position: relative;
  left: 1px;
}

.bar a {
  color: #333;
}

.bar a:hover {
  color: paleturquoise;
}

.container {
  width: 100%;
  overflow: auto;
  padding-right: 2px;
}

.content {
  height: 100%;
  padding: 10%;
}

.scroll-to-top {
  position: fixed;
  bottom: 6%;
  right: 4%;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  display: none;
}
</style>
