<template>
  <div>
      <router-view></router-view>
      <footer-tabs></footer-tabs>
  </div>
</template>

<script>
import FooterTabs from "@/components/FooterTabs/index"
export default {
    components: {
        FooterTabs
    }
};
</script>

<style lang="css" scoped>
</style>