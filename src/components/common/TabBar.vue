<template>
  <div id='tab_bar'>
    <div class='tab_bar_item'>
      <!-- <img src="~assets/img/tabbar/home_active.png" > -->
      <img src="~assets/img/tabbar/home.png" >
      <div>首页</div>
    </div>
    <div class='tab_bar_item'>
      <img src="~assets/img/tabbar/shopping.png" >
      <!-- <img src="~assets/img/tabbar/shopping_active.png" > -->
      <div>订单</div>
    </div>
    <div class='tab_bar_item'>
      <img src="~assets/img/tabbar/profile.png" >
      <!-- <img src="~assets/img/tabbar/profile_active.png" > -->
      <div>我的</div>
    </div>
    
  </div>
</template>

<script>

export default {
  name:'TabBar',
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
}
</script>

<style scoped>
#tab_bar{
  display: flex;
  height: 49px;
  line-height: 49px;
  position: fixed;
  left: 0; bottom: 500px; right: 0; left: 0;
  background-color: rgba(0, 0, 0, 0.024);
  box-shadow: 0 -2px 1px rgba(0, 0, 0, 0.019)
}
.tab_bar_item{
  text-align: center;
  flex: 1;
}
.tab_bar_item img{
  width: 20px;
}
</style>