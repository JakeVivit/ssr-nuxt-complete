<template>
    <div class="index">
        <img src="~assets/images/bg.jpg" alt="">
        <nuxt-link to="/home">
            <button class="button">立即进入</button>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "ssr-nuxt",
            topBar: {
                showBack: false
            }
        };
    },
     layout: 'entrance',
    components: {}
};
</script>