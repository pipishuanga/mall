<template>
  <div id="recommendhome">
      <div class="home-item" v-for="(item,i) in recommends" :key="i">
          <a :href="item.link">
              <img :src="item.image" alt="">
          </a>
          <div>{{item.title}}</div>
      </div>
  </div>
</template>

<script>
export default {
  name: "recommendhome",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
#recommendhome{
    display: flex;
    text-align: center;
    padding: 10px 0 20px;
    font-size: 12px;
    border-bottom: 10px solid #eee;

}
.home-item{
    flex: 1
}
.home-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 8px;
}
</style>
