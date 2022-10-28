<template>
  <div>
    <router-view/>   <!-- 占位  -->
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from 'components/content/MainTabBar.vue';

export default {
  name:'App',
  components: {
    MainTabBar,

  }
}
</script>
<style>
@import url(./assets/css/base.css);
</style>
