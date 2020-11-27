<template>
  <div id="app">
    <div class="container">
      <Main v-if="loaded && !loadingBlock"/>
      <Loading v-else/>
    </div>
  </div>
</template>

<script>
import Main from './components/Main.vue'
import Loading from './components/Loading.vue'

export default {
    name: 'App',
    data () {
        return {
            loaded: false,
            loadingBlock: true
        }
    },
    components: {
        Main,
        Loading
    },
    mounted () {
        setTimeout(() => { this.loadingBlock = false }, 800)
        window.addEventListener('load', () => {
            setTimeout(() => {
                this.loaded = true
            }, 300)
        })
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
