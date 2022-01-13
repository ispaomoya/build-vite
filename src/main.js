//原生的es module这个后缀不能省，如果用webpack，webpack会帮你匹配加
import {sum} from './js/math'
import './css/style.css'
import './css/style.less'
import {createApp} from 'vue'
import App from './vue/App.vue'

console.log(sum(20,30));
console.log('hello world');

createApp(App).mount('#app')