const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
    //mode:'production',
    entry:{
        index:'./lib/index.tsx'
    },
    output:{
       path:path.resolve(__dirname,'dist/lib'),
       library:'universe',
       libraryTarget:'umd',
    },
    resolve:{
      extensions:['.ts','.tsx','.js','.jsx'],
    },
    module:{
       rules:[
           {
               test:/\.tsx?$/,
               loader:'awesome-typescript-loader'
           },{
               test:/\.svg$/,
               loader:'svg-sprite-loader'
           },
           {
            test: /\.s([ac])ss$/,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader',
            ]
          }
       ]
     },
    // plugins:[
    //     new HtmlWebpackPlugin({
    //         template:'index.html'
    //     })
    // ],
    // externals:{
    //     react:{
    //         commonjs:'react',
    //         commonjs2:'react',
    //         amd:'react',
    //         root:'React',
    //     },
    //     'react-dom':{
    //         commonjs:'react-dom',
    //         commonjs2:'react-dom',
    //         amd:'react-dom',
    //         root:'ReactDom',
    //     }
    // }
}

// history
// require.js  define    --AMD 异步模块定义   只在浏览器上使用
// nodejs      module.exports={}   --COMMONJS  只在nodejs上使用

// UMD --统一模块定义 如果找到define函数，用AMD，否则。。。 if()else{}