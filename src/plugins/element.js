import Vue from 'vue'
import { Button, Form, FormItem, Input, Message } from 'element-ui'

// 注册全局可用组件
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

// 挂载Vue.prototype
Vue.prototype.$message = Message
