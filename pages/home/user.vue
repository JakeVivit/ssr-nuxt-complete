<template>
    <div class="pageDetail" >
        <div v-if="$store.state.userInfo">
            <x-input title="用户名：" v-model="$store.state.userInfo.loginName"></x-input>
            <x-input title="性别：" v-model="$store.state.userInfo.sex"></x-input>
            <x-input title="手机：" v-model="$store.state.userInfo.phone"></x-input>
            <x-input title="用户认证：" v-model="$store.state.userInfo.typeDisplay"></x-input>
        </div>
        <x-button style="margin-top:50px;" type="primary" @click.native="$store.dispatch('logout')">退出登录</x-button>
    </div>
</template>

<script>
import { XInput, XButton } from "vux";
export default {
  middleware: "auth",
  asyncData(context) {
    return {
      value1: "h啊哈哈哈"
    };
  },

  components: {
    XInput,
    XButton
  },

  layout: "pageDetail",

  fetch({ store }) {
    if (store.state.Authorization) {
      return store.dispatch("getUser");
    }
  },

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

<style lang="scss">
.pageDetail {
  padding: 15px;
}
.red {
  color: red;
}
</style>

