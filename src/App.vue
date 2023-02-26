<script>
import TheHeader from "./components/TheHeader/TheHeader.vue";
import TheFooter from "./components/TheFooter/TheFooter.vue";

export default {
  components: { TheHeader, TheFooter },
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<template>
  <the-header></the-header>
  <RouterView />
  <the-footer></the-footer>
</template>

<style></style>
