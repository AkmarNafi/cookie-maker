import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import Buefy from 'buefy';

import '@/assets/styles/styles.scss';

Vue.use(Buefy);

import AOS from 'aos';
import 'aos/dist/aos.css';


Vue.config.productionTip = false;

new Vue({
     created(){AOS.init()},
     router,
     store,
     render: (h) => h(App),
}).$mount('#app');
