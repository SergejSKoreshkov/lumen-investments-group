<template>
    <div :class="`loading ${loaded && !loadingBlock ? 'change change-background' : ''}`">
        <img :class="loaded && !loadingBlock ? 'change change-scale change-fade' : ''" src="../assets/logo-old.png">
        <div :class="`lds-ring ${loaded && !loadingBlock ? 'change change-fade' : ''}`">
            <div></div><div></div><div></div><div></div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      loaded: false,
      loadingBlock: true
    }
  },
  mounted () {
    setTimeout(() => { this.loadingBlock = false }, 500)
    window.addEventListener('load', () => {
      this.loaded = true
    })
  }
}
</script>

<style scoped lang="scss">
    .loading {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 999;
        display: flex;
        background: #dbdbdb;

        img {
            margin: auto;
            width: 200px;
        }
    }
    .change {
        transition: .3s ease;

        &-scale {
            transform: scale(0.5);
        }

        &-fade {
            opacity: 0;
        }

        &-background {
            background: #fff;
        }
    }
    .lds-ring {
        position: absolute;
        top: 50.5%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        width: 300px;
        height: 300px;
    }
    .lds-ring div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 280px;
        height: 280px;
        margin: 8px;
        border: 8px solid #00ab6b;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #00ab6b  transparent transparent transparent;
    }
    .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
    }
    .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
    }
    .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
    }
    @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
