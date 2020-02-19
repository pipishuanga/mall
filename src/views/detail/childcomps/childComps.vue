<template>
  <div class="childComps">
    <nav-bar>
      <div slot="left" class="childComps-img" @click="imgclick">
        <img src="../../../assets/img/common/back.svg" alt />
      </div>
      <div slot="center" class="childComps-item">
        <div
          class="childComps-center"
          v-for="(item,index) in titls"
          :key="item.index"
          :class="{active:currentindex == index}"
          @click="childCompsClick(index)"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar";
export default {
  name: "childComps",
  components: {
    NavBar
  },
  data() {
    return {
      titls: ["商品", "参数", "评论", "推荐"],
      currentindex: 0
    };
  },
  methods: {
    childCompsClick(index) {
      this.currentindex = index;
    },
    imgclick(){
        this.$router.go(-1)
    }
  }
};
</script>

<style scoped>
.childComps-img {
  margin-top: 5px;
}
.childComps-item {
  display: flex;
}
.childComps-center {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
</style>
