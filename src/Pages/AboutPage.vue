<template>
  <div class="about-container">
    <router-view></router-view>
    <y-map></y-map>
  </div>
</template>

<script>
import YMap from "../components/YMap/YMap.vue";

export default {
  components: { YMap },
};
</script>

<style></style>
