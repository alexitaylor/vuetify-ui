// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader
// Helpers
import colors from 'vuetify/es5/util/colors';

import App from './App';
import router from './router';

// Set theme of app
Vue.use(Vuetify, {
  theme: {
    primary: colors.blue.base,
    secondary: colors.deepPurple.base,
    accent: colors.deepOrange.base,
  },
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
