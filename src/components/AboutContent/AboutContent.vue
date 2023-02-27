<template>
  <div class="about-container-inner">
    <div>
      <h3 class="about-title">{{ place.name }}</h3>
      <p class="about-p">{{ place.text }}</p>
    </div>

    <div><img :src="place.img" /></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["id"],
  computed: {
    place() {
      return this.getPlaces.find((e) => e.id == this.id);
    },
    ...mapGetters(["getPlaces"]),
  },
  methods: {},
};
</script>

<style>
.about-container-inner {
  padding-top: 200px;
  padding-bottom: 100px;
  display: flex;
  justify-content: space-around;
}
.about-title {
  font-family: "Komika Title - Axis RUS-LAT";
  font-style: normal;
  font-weight: 400;
  font-size: 46px;
}
.about-p {
  font-size: 18px;
}
</style>
