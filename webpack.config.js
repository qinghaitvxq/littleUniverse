const path=require('path');

module.exports={
    mode:'production',
    entry:{
        index:'./lib/index.tsx'
    },
    output:{
       path:path.resolve(__dirname,'dist/lib'),
       library:'universe',
       libraryTarget:'umd',
    },
    module:{
       rules:[
           {
               test:/\.tsx?$/,
               loader:'awesome-typescript-loader'
           }
       ]
    }
}

// history
// require.js  define    --AMD 异步模块定义   只在浏览器上使用
// nodejs      module.exports={}   --COMMONJS  只在nodejs上使用

// UMD --统一模块定义 如果找到define函数，用AMD，否则。。。 if()else{}