<template>
  <div class="about-container">
    <div>
      <h3>{{ title }}</h3>
      <p>{{ content }}</p>
    </div>
    <div><img :src="img" /></div>
  </div>
</template>

<script>
export default {
  props: ["title", "img", "content"],
};
</script>

<style></style>
