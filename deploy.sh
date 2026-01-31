#!/usr/bin/env sh
# 當發生錯誤時終止腳本運行
set -e

# 打包
npm run build

# 移動至到打包後的dist目錄 
cd dist

git init # 因為dist資料夾預設是被ignore的，因此在進入dist資料夾後初始化git
git add -A
git commit -m 'deploy'

# 部署到 https://github.com/LUCY0299/LabCoreX.git 分支為 gh-pages
# 注意：這裡將本地的 master 分支推送到遠端的 gh-pages 分支
git push -f https://github.com/LUCY0299/LabCoreX.git master:gh-pages

# 回到原本的目錄
cd -