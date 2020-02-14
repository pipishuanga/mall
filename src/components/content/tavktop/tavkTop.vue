<template>
  <div class="backtop" @click="backclick">
      <img src="../../../assets/img/common/top.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "backTop",
    methods:{
      backclick(){
        this.$emit('backTopclick')
      }
      
      }
     
    }

</script>

<style scoped>
.backtop{
    position: fixed;
    right: 8px;
    bottom: 48px;
}
.backtop img{
    height: 43px;
    width: 43px;
}
</style>
