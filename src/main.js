import Vue from 'vue'
import App from './App'
// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.prototype.productionTip = false
// 声明当前组件为整个应用
App.mpType = 'app'
// 生成当前应用的实例
const app = new Vue(App)
// 挂载当前应用的实例
app.$mount()
