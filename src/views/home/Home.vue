<template>
  <div id="home">
    <!-- 导航栏 -->
      <nav-bar class="home-nav">
        <div slot="center">购物街</div>
      </nav-bar>

      <!-- 轮播图 -->
      <home-swiper :banners="banners"></home-swiper>

      <!-- 推荐 -->
      <recommend-home :recommends="recommends"></recommend-home>

      <!-- 本周流行 -->
      <popular-home/>

      <tab-control :titles="['流行','新款','精选']"> </tab-control>

           <ul>
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
           <li>哈哈11</li>
           <li>哈哈12</li>
           <li>哈哈13</li>
           <li>哈哈14</li>
           <li>哈哈15</li>
           <li>哈哈16</li>
           <li>哈哈17</li>
           <li>哈哈18</li>
           <li>哈哈19</li>
           <li>哈哈20</li>
           <li>哈哈21</li>
           <li>哈哈22</li>
           <li>哈哈23</li>
           <li>哈哈24</li>
           <li>哈哈25</li>
           <li>哈哈26</li>
           <li>哈哈27</li>
           <li>哈哈28</li>
           <li>哈哈29</li>
           <li>哈哈30</li>
       </ul>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'

import HomeSwiper from './childhome/HomeSwiper'
import RecommendHome from './childhome/RecommendHome'

import PopularHome from './childhome/PopularHome'
import tabControl from '../../components/content/tabcontrol/tabControl'

// 导入的网络请求
import {getHomeMultidata,getHomeGoods} from '../../network/home'

// import SwiperItem from '../../components/common/swiper'
// import Swiper from '../../components/common/swiper'



  export default {
    name: "home",
    components:{
      NavBar,
      HomeSwiper,
      RecommendHome,
      PopularHome,
      tabControl
    },
    data(){
      return{
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]},
        }     
      }
    },
    created(){
      //  1.  请求的多数据
     this.getHomeMultidatas()

    //   2.  请求的商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
    },
    methods:{
      //  1.  请求的多数据
      getHomeMultidatas(){
         getHomeMultidata().then(res =>{
        console.log(res);
        // this.banners=res
        this.banners=res.data.banner.list
        this.recommends=res.data.recommend.list
        // console.log(this.banners);
      })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res =>{
          // console.log(res.data.list);
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

        })
      }
    }
  }
</script>

<style scoped>
#home{
  margin-top: 44px;
}
.home-nav{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: var(--color-tint);
  color: #fff;
}
</style>
