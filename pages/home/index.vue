<template>
    <div class="home">
        <swiper :auto="true" :loop="true" height="aspect-ratio" v-model="index" :min-moving-distance="120">
            <swiper-item v-for="(item, index) in swiper" :key="index">
                <a :href="item.targetUrl">
                    <img :src="'http://oss.zhulogic.com/' + item.webCoverFile.key">
                </a>
            </swiper-item>
        </swiper>
        
          <card v-for="(item, index) in skipDate" :key="index" class="cardItem">
            <nuxt-link slot="header" to="/home">
              <img :src="'http://oss.zhulogic.com/' + item.showCoverFile.key">
            </nuxt-link>
            <div slot="content" class="card-padding">
              <p style="color:#999;font-size:14px;">{{item.bigTitle}}</p>
              <p style="font-size:14px;line-height:1.2;">{{item.subTitle}}</p>
            </div>
          </card>
    </div>
</template>
<script>
import http from "@/plugins/http";
import { Swiper, SwiperItem, Card } from "vux";
export default {
  data() {
    return {
      swiperSet: {},
      swiper: [],
      skipDate: [],
      index: 0
    };
  },
  async asyncData(context) {
    let { data } = await http.ajax.get(
      "/designer_api/show/page/v2?pageNum=0&pageSize=0&platform=web"
    );

    return {
      swiper: data.data.bannerShowResponseVOList,
      skipDate: data.data.designerShowResponseVOList
    };
  },
  components: {
    Swiper,
    SwiperItem,
    Card
  }
};
</script>

<style lang="scss">
.vux-swiper-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.cardItem {
  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
    display: block;
  }
  .card-padding {
    p {
      text-align: left;
      padding: 5px 10px;
      font-size: 16px;
    }
  }
}
</style>

