<template>
  <div class="container">
    <div class="bar">
      <router-link to="/home">Home</router-link> >
      <router-link to="/home/vue">Vue</router-link>
    </div>
    <div class="content" :style="contentStyle">
      <h1>Vue入门</h1>
      <h4>基本环境配置</h4>
      <li>vue提供了操作文档：<a
          href="https://cli.vuejs.org/guide/deployment.html">https://cli.vuejs.org/guide/deployment.html</a></li>
      <li>该文档链接在后续使用<span>npm run build</span>指令后也会弹出（为什么我入门的时候没人跟我说）</li>
      <h5>1、安装Node.js</h5>
      <li>官网链接：<a href="https://nodejs.org/en/">https://nodejs.org/en/</a></li>
      <img :src="require('@/assets/VueNote/node.png')" alt="Description" width="780px" height="500px">
      <li>下载后打开安装软件无脑装即可</li>
      <p>2、安装vue</p>
      <li>安装好Node.js后终端(cmd)运行输入<span>npm install -g @vue/cli</span>，这是全局安装vue指令的办法</li>
      <li>也可简易输入<span>npm install vue</span></li>
      <img :src="require('@/assets/VueNote/installvue.png')" alt="Description"><br><br>
      <li>安装完成vue后可能会遇到不存在该指令的问题，若出现该问题，需手动配置环境变量</li>
      <li>进入该目录（vue运行指令文件的存放位置）</li>
      <img :src="require('@/assets/VueNote/vuepathconfig.png')" alt="Description">
      <li>将地址复制下来保存到环境变量path中，记得全选确定</li>
      <img :src="require('@/assets/VueNote/environmentconfig.png')" alt="Description" height="500px">
      <p>3、创建vue脚手架（项目文件夹）：<span>vue create filename</span></p>
      <li>下图说明要创建的文件名已存在，给出三个选项 覆盖文件，合并文件，取消创建，键盘箭头按键选择，Enter确定</li>
      <img :src="require('@/assets/VueNote/directoryexist.png')" alt="Description">
      <li>选择预设，1是自己保存的预设，默认的选择有vue3和vue2和自定义预设，推荐使用自定义（Manually）</li>
      <img :src="require('@/assets/VueNote/presetpick.png')" alt="Description">
      <li>features配置一些文件或环境</li>
      <yellow>避坑：入门不要选格式配置，否则打字慢的每打一个字都报一下错，不选不报错，下列步骤为不选</yellow>
      <img :src="require('@/assets/VueNote/features.png')" alt="Description">
      <li>选择大的vue版本：vue2或vue3</li>
      <img :src="require('@/assets/VueNote/version.png')" alt="Description">
      <li>一些选项</li>
      <img :src="require('@/assets/VueNote/optiondisplay.png')" alt="Description">
      <li>vue脚手架创建完毕如下, 第一个为进入目录，第二个为运行服务，<red>一定要进入目录才能运行服务！！！</red>
      </li>
      <img :src="require('@/assets/VueNote/vuecreated.png')" alt="Description">
      <li>如果没有进入目录而运行<span>npm run serve</span>，就会报错如下</li>
      <img :src="require('@/assets/VueNote/runserveerror.png')" alt="Description">
      <li>运行vue服务</li>
      <img :src="require('@/assets/VueNote/runningserve.png')" alt="Description">
      <li>vue示例：在浏览器打开网址就可以看到官方默认生成的示例，初学者最好的办法就是在此基础更改内容自己感受</li>
      <p>不建议一下改太多东西或直接删了文件，否则报错的时候想解决却无从入手</p>

      <br><h4>modules</h4>
      <img :src="require('@/assets/VueNote/modules.png')" alt="Description">
      <li>此文件夹存放运行环境</li>

      <error>错误：'vue-cli-service' 不是内部或外部命令，也不是可运行的程序或批处理文件。</error><br>
      <answer>解答：需要安装modules</answer>
      <p>安装modules指令:<span>npm install</span></p>
      <img :src="require('@/assets/VueNote/moduleserror.png')" alt="Description">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contentStyle: {}
    };
  },
  mounted() {
    this.updateContentStyle();
    window.addEventListener('resize', this.updateContentStyle);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateContentStyle);
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
    }
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
}

span {
  background-color: yellowgreen;
}

img {
  width: 900px;
}

red{
  color: red;
}

yellow {
  background-color: yellow;
}

error{
  background-color: red;
}
</style>
