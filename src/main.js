import Vue from "vue";
import * as firebase from "firebase";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.usePublicVapidKey(
  ""
);

messaging
  .requestPermission()
  .then(() => {
    console.log("Notification permission granted.");

    messaging.getToken().then(token => {
      console.log(token);
    });
  })
  .catch(err => {
    console.log("Unable to get permission to notify.", err);
  });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
