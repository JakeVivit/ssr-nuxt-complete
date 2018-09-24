import Vue from 'vue'
// import { AlertPlugin } from 'vux'
// Vue.use(AlertPlugin);

let common = {
    install(Vue) {
        Vue.prototype.$alertMsg = function(title, msg) {
            console.log(55556)
                // this.$vux.alert.show({
                //     title: title,
                //     content: msg
                // });
        }
    }
};

export default common