<template>
    <div class="main">
        <div class="row">
            <div class="col-8 container container-left">
                <div class="row half-block half-block-top">
                    <div class="col-6 offset-3">
                    </div>
                </div>
                <div class="row half-block half-block-bottom">
                    <div class="logo col-6 offset-3">
                        <img src="../assets/logo-blue.svg" alt="Lumen Investments"/>
                        <h6>Coming soon</h6>
                    </div>
                </div>
            </div>
            <div class="col-4 container container-right"></div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .main {
        width: 100vw;
        height: 100vh;
    }
    .row {
        height: 100%;
    }
    .container {
        height: 100%;
        &-left {
            background: #000000;
        }
        &-right {
            background: #3049FC;
        }
    }
    .half-block {
        height: 50% !important;

        &-top {
            background: #000000;
        }
        &-bottom {
            background: #dbdbdb;
        }

        h5 {
            color: #dbdbdb;
            text-align: center;
            text-transform: uppercase;
        }
    }
    .logo {

        img {
            width: 100%;
        }
    }
</style>
