<template>
  <div class="hello">
    <button @click="vibrate">Vibrate</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    vibrate() {
      global.navigator.vibrate(200);

      // global.Haptics.vibrate(200);
      // client-id: 714106427285-bqgbk0n57ie9o225aig97efuk3vlgotf.apps.googleusercontent.com
      // client-secret: 9Gv39-8L57OmWYOSzW3GOkZu
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
