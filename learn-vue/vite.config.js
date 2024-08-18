import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';


// https://vitejs.dev/config/
export default  ({mode})=> defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      '~':path.resolve(__dirname,'./'),
      '@':path.resolve(__dirname,'src'),
    },
    extensions:['.vue','.js','.jsx','.json']
  },
  base:mode=='development' ? './' : (mode == 'beta' ? '//s.baidu.com/beta/xxx': '//s.baidu.com/release/xxx'),//静态资源配置

  server: {
    proxy:{
      '/api':{
        target:'http://backend-api-02.newbee.ltd/manage-api/v1',
        changeOrigin:true,
        rewrite:path=>path.replace(/^\api/,'')//重写API为空,就是去掉它
      }
    }
  }
})

