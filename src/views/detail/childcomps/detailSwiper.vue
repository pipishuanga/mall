<template>
  <swiper class="swiper-item">
      <swiper-item v-for="item in topimages" :key="item.id">
          <img :src="item" alt="">
      </swiper-item>
  </swiper>
</template>

<script>

import { Swiper, SwiperItem } from "../../../components/common/swiper";
  export default {
    name: "detailSwiper",
    components:{
        Swiper,
        SwiperItem
    },
    props:{
        topimages:{
            type:Array,
            default(){
                return []
            }
        }
    }
  }
</script>

<style scoped>
.swiper-item{
    height: 300px;
    overflow: hidden;
}
</style>
