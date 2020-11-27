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
            <div class="col-10 col-md-6 offset-md-3 offset-1">
                <img class="logo-mounted" src="../assets/logo-blue.svg" alt="Lumen Investment Group">
                <hr>
                <h2>Webpage is under construction</h2>
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
    },
    data () {
        return {
            mounted: false
        }
    },
    mounted () {
        console.log('mounted')
        this.mounted = true
    }
}
</script>

<style scoped lang="scss">
    .row {
        margin-left: 0;
        margin-right: 0;
    }
    .main {
        width: 100%;
        height: 100vh;
    }
    .head {
        height: 50px !important;
        padding: 10px;
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
            margin: 10px;
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

        h2 {
            margin-top: 1em;
            padding: 0;
            text-align: center;
            color: #dbdbdb;
            font-weight: lighter;
            text-transform: uppercase;
            line-height: 30px;
            font-size: 1.5em;
            letter-spacing: 3px;
        }
    }
    hr {
        background: #dbdbdb;
        animation: .7s lineOut ease;
    }

    @keyframes lineOut {
        0% {
            width: 0%;
        }
        100% {
            width: 100%;;
        }
    }
</style>
