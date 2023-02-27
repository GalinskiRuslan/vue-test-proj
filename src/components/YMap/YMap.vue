<template>
  <div class="map-container">
    <YandexMap :coordinates="[43.237161, 76.945626]" :zoom="13" :controls="{}">
      <YandexMarker
        v-for="place in getPlaces"
        :key="place.id"
        :coordinates="place.coords"
        :marker-id="place.id"
        :options="{
          iconImageHref: place.img,
          iconLayout: 'default#imageWithContent',
          iconImageSize: [180, 180],
          contentLayout: 'asdadsada',
          layout: 'islands#balloon',
        }"
        :properties="{
          iconContent: '<div class=\'place-p \'>' + place.name + '</div> ',
          iconContentOffset: 'default#imageWithContent',
          balloonContentBody: 'asdsad',
        }"
        :balloon-template="'<div>BALOOOOOOOON!!!!!!</div>'"
      />
    </YandexMap>
  </div>
</template>

<script>
import { YandexMap, YandexMarker } from "vue-yandex-maps";
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  components: { YandexMap, YandexMarker },
  computed: {
    ...mapGetters(["getPlaces"]),
  },
};
</script>

<style>
.map-container {
  width: 100%;
  height: 725px;
}
.yandex-container {
  width: 100%;
  height: 100%;
}
.place-p {
  background-image: url("../../assets/icons/Group.svg");
  color: #f9f7f3;
  font-weight: 700;
  font-size: 16px;
  padding-top: 30px;
  border-radius: 10px;
  margin-top: 125px;
  margin-left: 15px;
  width: 163px;
  height: 69px;
}
.yandex-balloon {
  width: 200px;
  height: 200px;
}
</style>
