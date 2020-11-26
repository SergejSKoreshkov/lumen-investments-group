<template>
  <div id="app">
    <Main2/>
  </div>
</template>

<script>
import Main2 from './components/Main2.vue'

export default {
  name: 'App',
  components: {
    Main2
  }
}
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/bootstrap.scss';
  @import 'node_modules/bootstrap-vue/src/index.scss';
  html, body {
    padding: 0;
    margin: 0;
  }
  @font-face {
    font-family: "Moderat";
    src: url("//db.onlinewebfonts.com/t/0c3856a335fdfdb8b0652f7c3d367fdd.eot");
    src: url("//db.onlinewebfonts.com/t/0c3856a335fdfdb8b0652f7c3d367fdd.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/0c3856a335fdfdb8b0652f7c3d367fdd.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/0c3856a335fdfdb8b0652f7c3d367fdd.woff") format("woff"), url("//db.onlinewebfonts.com/t/0c3856a335fdfdb8b0652f7c3d367fdd.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/0c3856a335fdfdb8b0652f7c3d367fdd.svg#Moderat") format("svg");
    }
    body {
      font-family: "Moderat"
    }
</style>
