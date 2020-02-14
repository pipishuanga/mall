<template>
  <div id="home">
    <!-- 导航栏 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <!-- 滚动 -->
    <scroll class="content" ref="scrolls" :probe-type="3" @scroll="centclick" :pull-up-load="true" @pullingUp="pullingUp">
      <!-- 轮播图 -->
      <home-swiper :banners="banners"></home-swiper>

      <!-- 推荐 -->
      <recommend-home :recommends="recommends"></recommend-home>

      <!-- 本周流行 -->
      <popular-home />

      <tab-control :titles="['流行','新款','精选']" @tab-click="GetTabClick"></tab-control>

      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @backTopclick="backTopclick" v-show="isShow"></back-top>
    <!-- <ul>
      <li>哈哈1</li>
      <li>哈哈2</li>
      <li>哈哈3</li>
      <li>哈哈4</li>
      <li>哈哈5</li>
      <li>哈哈6</li>
      <li>哈哈7</li>
      <li>哈哈8</li>
      <li>哈哈9</li>
      <li>哈哈10</li>
      <li>哈哈4</li>
      <li>哈哈5</li>
      <li>哈哈6</li>
      <li>哈哈7</li>
      <li>哈哈8</li>
      <li>哈哈9</li>
      <li>哈哈10</li>
    </!--> 
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";

import HomeSwiper from "./childhome/HomeSwiper";
import RecommendHome from "./childhome/RecommendHome";

import PopularHome from "./childhome/PopularHome";
import tabControl from "../../components/content/tabcontrol/tabControl";

import GoodsList from "../../components/content/goods/GoodsList";
import Scroll from '../../components/common/scroll/Scroll'
import backTop from '.././../components/content/tavktop/tavkTop'

// 导入的网络请求
import { getHomeMultidata, getHomeGoods } from "../../network/home";

// import SwiperItem from '../../components/common/swiper'
// import Swiper from '../../components/common/swiper'

export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendHome,
    PopularHome,
    tabControl,
    GoodsList,
    Scroll,
    backTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShow:false
    };
  },
  // 计算属性
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  created() {
    //  1.  请求的多数据
    this.getHomeMultidatas();

    //   2.  请求的商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
  
    //  1.  请求的多数据
    getHomeMultidatas() {
      getHomeMultidata().then(res => {
        console.log(res);
        // this.banners=res
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        // console.log(this.banners);
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // console.log(res.data.list);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        //加载完之后必须调用一个方法 刷新 才能接着上拉加载
        this.$refs.scrolls.finishPullUP()
      });
    },

    // 监听事件
    GetTabClick(i) {
      // console.log(i);
      if (i == 0) {
        this.currentType = "pop";
      } else if (i == 1) {
        this.currentType = "new";
      } else {
        this.currentType = "sell";
      }
    },
      // 点击回到顶部
    backTopclick(){
      // console.log('BACKCLICK');scrollTo
      console.log(this.$refs.scrolls.message)
      this.$refs.scrolls.scrollTo(0,0)
    },
    // 自定义的事件 切换显示隐藏组件
    centclick(position){
      // console.log(position);
      this.isShow = (-position.y) > 1000
      // if(- position.y > 1000){
      //   this.isShow = !this.isShow
      // }
      
    },
    // 上拉加载更多
    pullingUp(){
      this.getHomeGoods(this.currentType)
    }

  }
};
</script>

<style scoped>
#home {
   height: 100vh;
  position: relative
}
.home-nav {
  position: fixed;
  /* top: 0; */
  left: 0;
  right: 0;
  z-index: 10;
  background-color: var(--color-tint);
  color: #fff;
}
.content{
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
/* .content{
  减的93是上面的nav 44 和下面的tabbar:49  44+49=93
  height: calc(100% - 93px);  
  margin-top: 44px;
  overflow: hidden;
} */
</style>
