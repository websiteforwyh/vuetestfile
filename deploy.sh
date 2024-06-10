#!/usr/bin/env sh
# ------！！！此文件用于配置快捷部署云服务，目前未被使用！！！------
 
# 确保脚本抛出遇到的错误
set -e
 
# 生成静态文件， npm run docs:build
# yarn docs:build
npm run docs:build
rm -rf ../vueDist/dist/*

# 将build生成的dist目录拷贝至上一层目录中
cp -rf docs/.vuepress/dist ../vueDist/

# 进入生成的文件夹
cd ../vueDist/dist

# git初始化，每次初始化不影响推送
git init
git add -A
git commit -m 'deploy'
git branch -M main

# 如果你想要部署到 https://USERNAME.github.io
git push -f https://github.com/websiteforwyh/vuetest.git main


# 想实现快捷配置将下列代码放入package.json中
# "scripts": {
#     "deploy": "bash deploy.sh"
#   }

# git add .
# git commit -m “XXX”
# git push
# npm run deploy
