<template>
  <div class="container">
    <x-header :title="title" :left-options="topBar"></x-header>
    <div class="rightUserimg" @click="timpHandle">
      <img v-if="!$store.state.userInfo" class="default" src="~assets/images/timg.jpg" alt="">
      <img v-if="$store.state.userInfo && $store.state.userInfo.avatarFile" class="default" :src="'http://oss.zhulogic.com/' + $store.state.userInfo.avatarFile.key" alt="">
    </div>
    <nuxt-child/>
    
    <tabbar style="position:fixed;">
      <tabbar-item link="/home" selected>
        <x-icon type="ios-ionic-outline" size="30"></x-icon>
        <span slot="label">首页</span>
      </tabbar-item>

      <tabbar-item show-dot link="/home/user">
        <x-icon type="ios-ionic-outline" size="30"></x-icon>
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { XHeader, Tabbar, TabbarItem } from "vux";

export default {
  middleware: "userinfo",
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
  fetch({ store }) {
    if (store.state.Authorization) {
      return store.dispatch("getUser");
    }
  },
  methods: {
    timpHandle() {
      this.$router.push({ path: "/home/user" });
    }
  }
};
</script>

<style lang="scss">
.container {
  justify-content: center;
  align-items: center;
  text-align: center;
  .rightUserimg {
    position: absolute;
    top: 9px;
    right: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
    background: #1fbca2;
    img.default {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.links {
  padding-top: 15px;
}
.vux-header .vux-header-title > span {
  font-size: 25px;
}
</style>

