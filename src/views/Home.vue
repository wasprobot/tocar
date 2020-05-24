<template>
  <div class="home">
    <h2 v-if="$auth.user">Hello {{ $auth.user.name }}</h2>
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <!-- Check that the SDK client is not currently loading before accessing is methods -->
    <div v-if="!$auth.loading">
      <!-- show login when not authenticated -->
      <button v-if="!$auth.isAuthenticated" @click="login">Log in</button>
      <!-- show logout when authenticated -->
      <button v-if="$auth.isAuthenticated" @click="logout">Log out</button>
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
// const db = require("./models/index.js");

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  },
  mounted() {
    console.log("USER:", this.$auth.user.name);
  }
};
</script>
