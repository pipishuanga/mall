<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null,
      message: "哈哈哈哈"
    };
  },
  mounted() {
    // 1.  创建scoll
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });
    // this.scroll.scrollTo(0,0)
    // 2. 监听滚动位置
    this.scroll.on("scroll", position => {
      // console.log(position);
      this.$emit("scroll", position);
    });

    // 监听滚动到底部的事件 pullingUp
    this.scroll.on('pullingUp',() => {
      this.$emit('pullingUp') // 发出的事件pullingUp
      // console.log('滚动到底部');
    })
  },
  methods: {
    // 回到顶部的
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    },
    // 这里封装的着 refresh() 可以拿到scroll.refresh();
    refresh() {
      // console.log("******");
      this.scroll.refresh();
    }
  }
};
</script>

<style scoped>
</style>
