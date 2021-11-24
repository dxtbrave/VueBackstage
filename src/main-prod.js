import Vue from 'vue'
import App from './App.vue'
import router from '@/router'


// 引入vue-table-with-tree-grid插件
import TreeTable from 'vue-table-with-tree-grid'

// 导入字体图标
import '@/assets/fonts/iconfont.css'

// 导入全局样式表
import "@/assets/css/global.css"

import Pace from 'pace-js'


// 注册VueQuillEditor插件
import VueQuillEditor from 'vue-quill-editor'


// 注册全局时间过滤器
Vue.filter('dateFormat', function (originVal) {
    const dt = new Date(originVal)
    const y = dt.getFullYear()
    const m = (dt.getMonth() + 1 + '').padStart(2, '0')
    const d = (dt.getDate() + '').padStart(2, '0')
    const hh = (dt.getHours() + '').padStart(2, '0')
    const mm = (dt.getMinutes() + '').padStart(2, '0')
    const ss = (dt.getSeconds() + '').padStart(2, '0')

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})

// 注册为全局可用组件
Vue.component('tree-table', TreeTable)

Vue.config.productionTip = false

// 创建事件总线
Vue.prototype.$Bus = new Vue()


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
