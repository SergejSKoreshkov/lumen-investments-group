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
    src: url("/fonts/font.eot");
    src: url("/fonts/fontFix.eot") format("embedded-opentype"), url("/fonts/font.woff2") format("woff2"), url("/fonts/font.woff") format("woff"), url("/fonts/font.ttf") format("truetype"), url("/fonts/font.svg") format("svg");
    }
    body {
      font-family: "Moderat"
    }
    a {
      font-family: "Moderat"
    }
</style>
