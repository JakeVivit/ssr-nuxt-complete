<template>
  <div class="container">
    <x-header :title="title" :left-options="topBar"></x-header>
    <div class="rightUserimg" @click="timpHandle">
      <img class="default" src="~assets/images/timg.jpg" alt="">
    </div>
    <nuxt-child/>
    <tabbar>
      <tabbar-item link="/home">
        <x-icon type="ios-ionic-outline" size="30"></x-icon>
        <span slot="label">首页</span>
      </tabbar-item>

      <tabbar-item show-dot link="/login">
        <x-icon type="ios-ionic-outline" size="30"></x-icon>
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
// import AppLogo from '~/components/AppLogo.vue'
import { XHeader, Tabbar, TabbarItem } from "vux";

export default {
    data() {
        return {
            title: "ssr-nuxt",
            topBar: {
                showBack: false
            }
        };
    },
    components: {
        XHeader,
        Tabbar,
        TabbarItem
    },
    fetch({store}) {
      return store.dispatch('checkLogin');
    },
    methods:{
      timpHandle(){
        if(this.$store.state.isLogin){
          console.log('/user')
          this.$router.push({path: '/home/user'})
        }else{
          console.log('/login')
          this.$router.push({path: '/login'})
        }
      }
    }
};
</script>

<style lang="scss">
.container {
    /* min-height: 100vh; */
    justify-content: center;
    align-items: center;
    text-align: center;
    .rightUserimg{
      position: absolute;
      top: 9px;
      right:10px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      overflow: hidden;
      background: #1fbca2;
      img.default{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
}

.links {
    padding-top: 15px;
}
.vux-header .vux-header-title>span{
  font-size: 25px;
}
</style>

