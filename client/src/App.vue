<template>
  <div class="page-index">
    <mt-swipe :auto="2500" class="swipe">
      <mt-swipe-item>
        <img src="@/assets/img/swiper-1.jpg" alt="" height="200">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="@/assets/img/swiper-2.jpg" alt="" height="200">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="@/assets/img/swiper-3.jpg" alt="" height="200">
      </mt-swipe-item>
    </mt-swipe>
    <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.page-index .swipe {
  height: 200px;
}
.page-index .swipe img{
  width: 100%;
  object-fit: cover;
}
</style>
