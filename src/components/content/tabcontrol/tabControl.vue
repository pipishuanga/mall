<template>
  <div id="tabcontrol">
    <div class="tabcontrol-home" :class="{active:currentindex == i}" @click="itemclick(i)" v-for="(item,i) in titles" :key="i">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentindex: 0
    };
  },
  methods:{
      itemclick(i){
          this.currentindex = i
          this.$emit('tab-click',i)
      }
  }
};
</script>

<style scoped>
#tabcontrol {
  display: flex;
  text-align: center;
  font-size: 18px;
  height: 40px;
  line-height: 40px;
}
.tabcontrol-home {
  flex: 1
}
.tabcontrol-home span{
    padding: 5px
}
.active{
    color: var(--color-high-text)
}
.active span {
    border-bottom: 2px solid red
}
</style>
