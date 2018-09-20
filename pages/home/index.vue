<template>
    <div class="home">
        <swiper :auto="true" :loop="true" height="aspect-ratio" v-model="index" :min-moving-distance="120">
            <swiper-item v-for="(item, index) in swiper" :key="index">
                <a :href="item.targetUrl">
                    <img :src="'http://oss.zhulogic.com/' + item.webCoverFile.key">
                </a>
            </swiper-item>
        </swiper>
    </div>
</template>
<script>
import axios from "axios";
import { Swiper, SwiperItem } from "vux";
export default {
    data() {
        return {
            swiperSet: {},
            swiper: [],
            index: 0
        };
    },
    async asyncData() {
        let { data } = await axios.get(
            "https://b.zhulogic.com/designer_api/show/page/v2?pageNum=0&pageSize=0&platform=web"
        );
        
        return {
            swiper: data.data.bannerShowResponseVOList
        };
    },
    components: {
        Swiper,SwiperItem
    }
};
</script>

<style lang="scss">
    .vux-swiper-item img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>

