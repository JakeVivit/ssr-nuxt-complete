<template>
    <div class="login">
        <div class="login-input">
            <group title="登录">
                <x-input v-model="phone" title="手机号" text-align="left" placeholder="请输入手机号"></x-input>
                <x-input title="验证码" placeholder="请输入验证码" v-model="code" class="weui-vcode">
                    <x-button slot="right" type="primary" mini @click.native="setCode">发送验证码</x-button>
                </x-input>
            </group>
        </div>
        <img src="~assets/images/bg.jpg" alt="">
        <button class="button" @click="submit">立即登录</button>
        <toast v-model="show" type="text"></toast>
    </div>
</template>
<script>
import { XInput, Group, XButton, Alert, Toast } from "vux";
import axios from "axios";
export default {
    data() {
        return {
            phone: "",
            code: "",
            show: false
        };
    },
    layout: "entrance",
    components: {
        XInput,
        Group,
        XButton,
        Alert,
        Toast
    },
    methods: {
        async setCode() {
            if (/^1[345789]\d{9}$/.test(this.phone)) {
                let params = {
                    messageType: 3,
                    phone: this.phone
                };
                let { data } = await this.$axios.$post(
                    "https://b.zhulogic.com/designer_api/account/login_quick_code",
                    params
                );
                if (data.data) {
                    this.show = true;
                    this.$vux.toast.text("验证码发送成功");
                } else {
                    this.show = true;
                    this.$vux.toast.text("验证码发送失败，请重新发送");
                }
            } else if (!this.phone) {
                this.show = true;
                this.$vux.toast.text("手机号不能为空");
            } else {
                this.show = true;
                this.$vux.toast.text("手机号格式不正确");
            }
        },
        async submit() {
            if (/^1[345789]\d{9}$/.test(this.phone) && this.code) {
                let params = {
                    channel: '"zhulogic"',
                    code: this.code,
                    messageType: 3,
                    phone: this.phone
                };
                let data = await this.$axios.$post(
                    "https://b.zhulogic.com/designer_api/account/login_quick",
                    params
                );
                if (data.data) {
                    //存储token
                    await this.$store.dispatch('setUser', data.data);
                    this.$router.push({path: '/home'});
                } else {
                    this.show = true;
                    this.$vux.toast.text("登录失败，请检查验证码！");
                }
            } else if (!/^1[345789]\d{9}$/.test(this.phone)) {
                this.show = true;
                this.$vux.toast.text("手机号格式不正确");
            } else if (!this.phone) {
                this.show = true;
                this.$vux.toast.text("手机号不能为空");
            } else if (!this.code) {
                this.show = true;
                this.$vux.toast.text("验证码不能为空");
            }
        }
    }
};
</script>

<style lang="scss">
.login {
    .login-input {
        width: 340px;
        position: absolute;
        margin: 150px 20px;
        .weui-cell {
            background: rgba(250, 250, 250, 0.4);
        }
        .weui-cells__title {
            font-size: 30px;
            color: #fff;
        }
    }
}
</style>



