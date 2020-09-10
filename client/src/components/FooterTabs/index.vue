<template>
  <van-tabbar v-model="active" class="fixed-footer-tabs">
    <van-tabbar-item
      :icon="item.icon"
      v-for="item in footerTabs"
      :key="item.id"
      :to="item.path"
    >{{item.name}}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      footerTabs: [
        { id: 1, name: "首页", icon: "home-o", path:"/" },
        { id: 2, name: "分类", icon: "apps-o", path:"/category" },
        { id: 3, name: "食材", icon: "search", path:"/food" },
        { id: 4, name: "我的", icon: "user-o", path:"/user" },
      ],
      active: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>