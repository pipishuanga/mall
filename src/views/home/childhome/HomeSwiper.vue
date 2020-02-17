<template>
  <div id="HomeSwiper">
    <!-- 轮播图 -->
    <swiper>
      <swiper-item v-for="(item,i) in banners" :key="i">
        <a :href="item.link">
          <img :src="item.image" alt @load="imgload" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "../../../components/common/swiper";
export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isLoad: false
    };
  },
  methods: {
    // 监听轮播图的加载是否完成,然后给home里面的offset 可以获取到这个offset的值
    imgload() {
      // console.log('图片');
      if (!this.isLoad) { // 节流阀 4次-->1次
        this.$emit("swiperImgLoad");
        this.isLoad = true;
      }
    }
  }
};
</script>

<style scoped>
</style>
