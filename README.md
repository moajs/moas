# moas

moas = moa server, runtime for test plugin


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