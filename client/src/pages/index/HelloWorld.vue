<template>
  <div class="page-index">
    <van-swipe class="my-swipe" :autoplay="3000">
      <van-swipe-item>
        <img src="@/assets/img/swiper-1.jpg" alt height="200" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/img/swiper-2.jpg" alt height="200" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/img/swiper-3.jpg" alt height="200" />
      </van-swipe-item>
    </van-swipe>

    <van-grid :gutter="10" class="font-size-12 grid">
      <van-grid-item text="文字" v-for="item in tabs" :key="item.id">
        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" width="50" height="50" />
        <div class="color-656565 margin-top-6">{{item.name}}</div>
      </van-grid-item>
    </van-grid>

    <van-tabbar v-model="active" class="fixed-footer-tabs">
      <van-tabbar-item :icon="item.icon" v-for="item in footerTabs" :key="item.id">{{item.name}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        {id: 1, name: "鲁菜"},
        {id: 2, name: "川菜"},
        {id: 3, name: "粤菜"},
        {id: 4, name: "苏菜"},
        {id: 5, name: "闽菜"},
        {id: 6, name: "浙菜"},
        {id: 7, name: "徽菜"},
        {id: 8, name: "湘菜"}
      ],
      footerTabs: [
        {id: 1, name: "首页", icon: "home-o"},
        {id: 2, name: "分类", icon: "apps-o"},
        {id: 3, name: "食材", icon: "search"},
        {id: 4, name: "我的", icon: "user-o"}
      ],
      active: 0
    };
  },
};
</script>

<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
}
.my-swipe .van-swipe-item img {
  width: 100%;
  object-fit: cover;
}
.grid img {
  border-radius: 50%;
}

.van-grid-item__content {
  padding: 0 8px;
}
.van-grid-item {
  margin-top: 20px !important;
}
[class*="van-hairline"]::after {
  border: none;
}

/* 底部tabs */
.fixed-footer-tabs {
  border-top: 1px solid #e8e8e8;
}

</style>
