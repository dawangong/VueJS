// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Index from './index';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import './common/styles/reset.less';
import VueResource from 'vue-resource';
const DEFAULT_API_PREFIX = '';
// 拦截增加请求默认前缀
Vue.use(VueResource);
Vue.http.interceptors.push((req, next) => {
  let currentUrl = req.url;
  currentUrl = currentUrl.startsWith('/') ? currentUrl : `/${currentUrl}`;
  if (!currentUrl.startsWith(DEFAULT_API_PREFIX)) {
    req.url = `${DEFAULT_API_PREFIX}${currentUrl}`;
  }
});
Vue.config.productionTip = false;
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Index },
  template: '<Index/>',
  render: h => h(Index)
});
