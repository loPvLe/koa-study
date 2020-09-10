<template>
  <div class="p-category">
    <van-sidebar v-model="activeKey">
      <van-sidebar-item :title="item.name" v-for="item in tabs" :key="item.id" />
    </van-sidebar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeKey: 0,
      tabs: [
        { id: 1, name: "鲁菜" },
        { id: 2, name: "川菜" },
        { id: 3, name: "粤菜" },
        { id: 4, name: "苏菜" },
        { id: 5, name: "闽菜" },
        { id: 6, name: "浙菜" },
        { id: 7, name: "徽菜" },
        { id: 8, name: "湘菜" },
      ],
    };
  },
};
</script>

<style lang="css" scoped>
.p-category,
.van-sidebar {
  height: 100%;
}
.van-sidebar {
  background-color: #f7f8fa;
}
.van-sidebar-item {
  text-align: center;
}
</style>