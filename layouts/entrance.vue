<template>
    <div class="index">
        <nuxt/>
    </div>
</template>

<style lang="scss">
.index {
    width: 375px;
    height: 666px;
    position: relative;
    overflow: hidden;
    object-fit: cover;
    font-size: 0px;
    > img {
        position: absolute;
        width: 375px;
        height: 666px;
        object-fit: cover;
    }
    .button {
        position: absolute;
        top: 70%;
        left: 40%;
        z-index: 1000;
        padding: 10px 45px;
        border: none;
        /* opacity: 0.6; */
        background: #00b4ff;
        color: #fff;
        left: 30%;
        font-size: 16px;
    }
}
</style>
