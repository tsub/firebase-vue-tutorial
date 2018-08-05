import Vue from 'vue'
import App from './App.vue'
import * as firebase from 'firebase';

const {
  VUE_APP_FIREBASE_API_KEY,
  VUE_APP_AUTH_DOMAIN,
  VUE_APP_DATABASE_URL,
  VUE_APP_PROJECT_ID,
  VUE_APP_STORAGE_BUCKET,
  VUE_APP_MESSAGING_SENDER_ID
} = process.env

const config = {
  apiKey: VUE_APP_FIREBASE_API_KEY,
  authDomain: VUE_APP_AUTH_DOMAIN,
  databaseURL: VUE_APP_DATABASE_URL,
  projectId: VUE_APP_PROJECT_ID,
  storageBucket: VUE_APP_STORAGE_BUCKET,
  messagingSenderId: VUE_APP_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
