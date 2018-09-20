<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">页面丢失</h1>
    <h1 v-else>An error occurred</h1>
    <nuxt-link to="/">返回主页</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog' // you can set a custom layout for the error page
}
</script>