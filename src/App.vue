<script>
import TheHeader from "./components/TheHeader/TheHeader.vue";
import TheFooter from "./components/TheFooter/TheFooter.vue";
import AboutPage from "./Pages/AboutPage.vue";

export default {
  components: { TheHeader, TheFooter, AboutPage },
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
