<template>
  <div id="tab-bar">
    <slot>
    </slot>
  </div>
</template>

<script>

export default {
  name: "TabBar",
  components: {
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>
#tab-bar {
  display: flex;
  height: 49px;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.024);
  box-shadow: 0 -2px 1px rgba(0, 0, 0, 0.019);
}
</style>