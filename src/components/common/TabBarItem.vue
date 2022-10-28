<template>
    <div class='tab-bar-item' @click="itemClick" >
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>


export default {
  name:'TabBarItem',
  components: {},
  props:{
    path: String,
    activeColor:{
      type: String,
      default:'red',
    }
  },
  data() {
    return {
      // path:'/home'
    };
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path)?false:true
    },
    activeStyle(){
      return this.isActive?{color:this.activeColor}:{}
    }
  },
  methods: {
    itemClick(){
      this.$router.replace(this.path).catch(error=>error)
    }
  },
}
</script>

<style>
.tab-bar-item{
  margin-top: 3px;
  text-align: center;
  font-size: 14px;
  flex: 1;
}
.tab-bar-item img{
  width: 24px;
  vertical-align: middle;
}
</style>