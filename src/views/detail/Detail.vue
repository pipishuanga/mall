<template>
  <div class="detail">
    <child-comps />
    <detail-swiper :topimages="topimages"/>
  </div>
</template>

<script>
import childComps from "./childcomps/childComps";
import detailSwiper from "./childcomps/detailSwiper";

import {getDetail} from "../../network/detail";
export default {
  name: "Detail",
  components: {
    childComps,
    detailSwiper
  },
  data() {
    return {
      iid: null,
      topimages:[]
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      this.topimages = res.result.itemInfo.topImages
    });
  }
};
</script>

<style scoped>
</style>
