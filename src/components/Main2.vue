<template>
    <div class="main">
        <div class="row head">
            <div class="logo-old col-6">
                <img src="../assets/logo-old.png" alt="Monify">
            </div>
            <div class="col-6 social">
                <div class="icons">
                    <Twitter></Twitter>
                    <Facebook></Facebook>
                    <Instagram></Instagram>
                </div>
            </div>
        </div>
        <div class="row main-container">
            <div class="col-8 col-md-4 offset-md-4 offset-2">
                <img src="../assets/logo-blue.svg" alt="Lumen Investment Group">
                <hr>
                <h1>Coming soon</h1>
            </div>
        </div>
    </div>
</template>

<script>
import Twitter from 'vue-material-design-icons/Twitter.vue'
import Facebook from 'vue-material-design-icons/Facebook.vue'
import Instagram from 'vue-material-design-icons/Instagram'

export default {
  components: {
    Twitter,
    Facebook,
    Instagram
  }
}
</script>

<style scoped lang="scss">
    .row {
        margin-left: 0;
        margin-right: 0;
    }
    .main {
        width: 100vw;
        height: 100vh;
    }
    .head {
        height: 80px !important;
        margin-right: 0;
    }
    .social {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        padding-right: 0;
        width: 100%;

        .icons {
            margin-left: auto;
            display: flex;
            span {
                font-size: 1.5em;
                margin: 10px;
                color: #101c54;
            }
        }
    }
    .logo-old {
        height: 100%;
        padding-left: 0;
        img {
            height: 100% !important;
            width: unset;
        }
    }
    .main-container {
        height: calc(100% - 80px);
        width: 100%;
        background: #ffffff;
        display: flex;
        align-items: center;

        img {
            width: 100%;
            margin-bottom: 2em;
        }

        h1 {
            margin-top: 1em;
            padding: 0;
            text-align: center;
            color: #dbdbdb;
            font-weight: lighter;
            text-transform: uppercase;
        }
    }
</style>
