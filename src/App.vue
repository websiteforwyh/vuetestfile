<template>
  <nav class="header">
    <div>
      <router-link to="/">Home</router-link>
    </div>
    <div>
      <router-link to="/about">About</router-link>
    </div>
  </nav>
  <div class="parent">
    <div class="side">
      1234
    </div>
    <div class="box">
      <div class="bar">
        <router-link to="/">Home</router-link>
      </div>
      <!-- <div class="iframe">
        <iframe src="/vuetest/src/components/HelloWorld.vue" frameborder="0" title="HomeView">
        </iframe>
      </div> -->
    </div>
  </div>
  <HelloWorld></HelloWorld>
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

.parent {
  display: flex;
}

.box {
  display: block;
}

.header {
  background: #333;
  height: 80px;
  display: flex;
}

.header div {
  flex-shrink: 0;
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
}

.header div:hover {
  background: AliceBlue;
}

.header a.router-link-exact-active {
  color: green;
}

.bar {
  border: 2px, groove, #333;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 20px;
}

.bar a {
  text-decoration: none;
  color: #333;
}

.bar a:hover {
  color: paleturquoise;
}

.side {
  border: 2px, groove, black;
  height: 635px;
  width: 150px;
  display: inline-block;
}

.content {
  height: 500px;
}

.iframe iframe{
  width: 100%;
  height: 100%;
}
</style>
