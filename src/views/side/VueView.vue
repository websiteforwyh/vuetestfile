<template>
  <div class="box">
    <div class="container">
      <div class="bar">
        <router-link to="/home">Home</router-link> >
        <router-link to="/home/vue">Vue</router-link>
      </div>
      <div class="content">
        <h1>Vue入门</h1>
        <p>基本环境配置</p>
        <p>1、进入官网下载node.js</p>
        <p>官网链接：<a href="https://nodejs.org/en/">https://nodejs.org/en/</a></p>
        <img :src="require('@/assets/VueNote/node.png')" alt="Description"
        width="780px" height="500px">
        <p>下载后打开安装软件无脑装即可</p>
        <p>2、安装好Node.js后终端(cmd)运行输入<span>npm install -g @vue/cli</span>，这是全局安装vue指令的办法</p>
        <p>也可简易输入<span>npm install vue</span></p>
        <img :src="require('@/assets/VueNote/installvue.png')" alt="Description"><br><br>
        <p>安装完成vue后可能会遇到不存在该指令的问题，若出现该问题，需手动配置环境变量</p>
        <p>进入该目录（vue运行指令文件的存放位置）</p>
        <img :src="require('@/assets/VueNote/vuepathconfig.png')" alt="Description">
        <p>将地址复制下来保存到环境变量path中，记得全选确定</p>
        <img :src="require('@/assets/VueNote/environmentconfig.png')" alt="Description"
        width="780px" height="500px">
        <p>3、配置好vue指令后开始创建vue脚手架：<span>vue create filename</span></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  h1{
    text-align: center;
  }

  span{
    background-color: yellowgreen;
  }
</style>
