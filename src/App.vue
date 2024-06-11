<template>
  <nav class="header">
    <div>
      <router-link to="/home" exact active-class="active-link">Home</router-link>
    </div>
    <div>
      <router-link to="/about" exact active-class="active-link">About</router-link>
    </div>
    <div>
      <router-link to="/umusic" exact active-class="active-link">UMusic</router-link>
    </div>
  </nav>
  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.box {
  display: block;
}

.header {
  background: #333;
  height: 80px;
  display: flex;
}

.header a {
  font-weight: bold;
  color: blue;
  text-decoration: none;
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

.header a.active{
  color: green;
}

/* 子路由激活样式 */
a.router-link-active {
  color: blue; /* 或者你希望的其他颜色 */
}

.header a.router-link-exact-active {
  color: green;
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

.side {
  border: 2px groove white;
  height: 100%;
  width: 180px;
}

.side-list {
  text-align: center;
  padding: 20px;
  border: 4px groove white;
}

.side-list a {
  text-decoration: none;
}

.box {
  width: 99.7%;
  height: 633px;
  height: 851px;
  border: 2px groove white;
  display: flex;
}

.container {
  width: 100%;
  overflow: auto;
  padding-right: 2px;
}

.content {
  padding: 10%;
}
</style>
