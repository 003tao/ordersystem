<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="rgb(0, 115, 255)">
      <template #item-icon><img src="~assets/img/tabbar/home.png" /></template>
      <template #item-icon-active
        ><img src="~assets/img/tabbar/home_active.png"
      /></template>
      <template #item-text><div>首页</div></template>
    </tab-bar-item>
    <tab-bar-item path="/about" activeColor="rgb(0, 115, 255)">
      <template #item-icon
        ><img name="item-icon" src="~assets/img/tabbar/shopping.png"
      /></template>
      <template #item-icon-active
        ><img src="~assets/img/tabbar/shopping_active.png"
      /></template>
      <template #item-text><div name="item-text">订单</div></template>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="rgb(0, 115, 255)">
      <template #item-icon
        ><img name="item-icon" src="~assets/img/tabbar/profile.png"
      /></template>
      <template #item-icon-active
        ><img src="~assets/img/tabbar/profile_active.png"
      /></template>
      <template #item-text><div name="item-text">我的</div></template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/TabBar.vue";
import TabBarItem from "components/common/TabBarItem.vue";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>
</style>