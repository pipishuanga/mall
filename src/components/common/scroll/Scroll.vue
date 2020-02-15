<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot>
          </slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default:false
      }
    },
    data(){
        return{
            scroll:null,
            message:'哈哈哈哈'
        }
    },
    mounted(){
        // 1.  创建scoll
        this.scroll = new BScroll(this.$refs.wrapper,{
          click:true,
          probeType:this.probeType ,
          pullUpLoad:this.pullUpLoad
        })        
        // this.scroll.scrollTo(0,0)
        // 2. 监听滚动位置
        this.scroll.on('scroll',(position) => {
          // console.log(position);
          this.$emit('scroll',position)         
        })
        console.log(this.scroll);

        // // 3. 监听上拉加载更多
        // this.scroll.on('pullingUp',() => {
        //    this.$emit('pullingUp') 
        //   // console.log('上拉加载更多');
           
        // })

    },
    methods:{
      // 回到顶部的
      scrollTo(x,y,time=300){
        this.scroll.scrollTo(x,y,time)
      },
      // finishPullUp(){
      //   this.scroll.finishPullUp()
      // }
      refresh(){
        this.scroll.refresh()
      }
    }
  }
</script>

<style scoped>

</style>
