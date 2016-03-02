# moas

moas = moa server, runtime for test plugin


## 目标

moag生成的模板，可以通过moas直接运行

## Install

    npm install -g moas
  
or 

    npm install --save-dev moas
    
## Usage

    scripts:{
      start: moas
    }
    
or 

    scripts:{
      start: ./node_modules/bin/moas
    }
   
## 原理

moas全局的server里挂载当前目录下面的app/routes目录即可

- 把moas下的node_modules链接到当前目录（已经完成）
- 把当前目录下的app/routes以moas_home的环境变量放到启动参数里（已经完成）
- 把当前目录下的app/views链接到moas下的app/views下面