<template>
  <div id="top">
    <Home v-if="!isLogin"></Home>
    <Editor v-if="isLogin" :user="userData"></Editor>
    <router-link :to="{ name: 'terms' }">利用規約</router-link>
  </div>
</template>

<script>
import * as firebase from 'firebase';
import Home from '../components/Home.vue'
import Editor from '../components/Editor.vue'

export default {
  name: "top",
  data() {
    return {
      isLogin: false,
      userData: null
    }
  },
  created: function() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isLogin = true
        this.userData = user
      } else {
        this.isLogin = false
        this.userData = null
      }
    })
  },
  components: {
    Home,
    Editor
  }
}
</script>

<style>
#top {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
