<template>
    <div class="pageDetail">
        <h1 class="red">{{name}}</h1>
    </div>
</template>

<script>
export default {
    middleware: 'auth',
    asyncData(context) {
        return { 
            name: "nuxt页面详情配置"
        };
    },

    layout: "pageDetail",

    fetch() {},

    head() {
        return {
            title: "nuxt页面详情",
            mate: [
                {
                    hid: "description",
                    name: "description",
                    content: "My custom description"
                }
            ]
        };
    }
};
</script>

<style>
.red {
    color: red;
}
</style>

