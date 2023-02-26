<template>
  <h3 class="wat-title">{{ TitleWay }}</h3>
  <div class="way-container">
    <div
      v-for="place in getPlaces"
      :key="place.id"
      :class="'way-card' + place.id"
    >
      <place-card
        :imgSrc="place.img"
        :cardTitle="place.name"
        :topNum="place.id"
      ></place-card>
    </div>
  </div>
</template>

<script>
import PlaceCard from "../PlaceCard/PlaceCard.vue";
import { mapGetters } from "vuex";
export default {
  props: {
    TitleWay: { type: String, default: "" },
  },
  components: {
    PlaceCard,
  },
  computed: {
    ...mapGetters(["getPlaces"]),
  },
};
</script>

<style>
.way-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 1220px;
  margin: 0 auto;
  margin-bottom: 11%;
}
.wat-title {
  font-family: "Komika Title - Axis RUS-LAT";
  font-weight: 400;
  font-size: 22px;
  text-align: center;
  margin-top: 150px;
  margin-bottom: 50px;
}
.way-card2 {
  margin-top: 50px;
}
.way-card3 {
  margin-top: 20%;
  margin-left: 15%;
}
.way-card4 {
  margin-left: 30%;
  top: 37%;
}
.way-card5 {
  position: absolute;
  top: 44%;
  left: 38%;
}
.way-card6 {
  margin-top: 27%;
}
.way-card7 {
  margin-top: 60%;
  margin-left: 40%;
  z-index: 999;
}
.way-card8 {
  margin-left: 40%;
}
.way-card9 {
  margin-left: 21%;
  top: 24%;
}
.way-card2::before {
  content: url("../../assets/img/way/way1.svg");
  position: absolute;
  top: 21%;
  left: -51%;
}
.way-card3::before {
  content: url("../../assets/img/way/way2.svg");
  position: absolute;
  top: -56%;
  left: 45%;
}
.way-card4::before {
  content: url("../../assets/img/way/way3.svg");
  position: absolute;
  top: 25%;
  left: -93%;
}
.way-card5::before {
  content: url("../../assets/img/way/way4.svg");
  position: absolute;
}
.way-card6::before {
  content: url("../../assets/img/way/way5.svg");
  position: absolute;
  top: 7%;
  left: 37%;
}
.way-card7::before {
  content: url("../../assets/img/way/way6.svg");
  position: absolute;
  top: 23%;
  left: -155%;
}
.way-card8::before {
  content: url("../../assets/img/way/way7.svg");
  position: absolute;
  top: -42%;
  left: 46%;
}
.way-card9::before {
  content: url("../../assets/img/way/way8.svg");
  position: absolute;
  top: 33%;
  left: -43%;
}
@media screen and (max-width: 1200px) {
  .way-container {
    display: block;
    max-width: 1220px;
    margin: 0 auto;
    margin-bottom: 11%;
  }
  .way-card2 {
    margin: 0 auto;
  }
  .way-card3 {
    margin: 0 auto;
  }
  .way-card4 {
    margin: 0 auto;
  }
  .way-card5 {
    position: relative;
    top: 0;
    left: 0;
  }
  .way-card6 {
    margin: 0 auto;
  }
  .way-card7 {
    margin: 0 auto;
  }
  .way-card8 {
    margin: 0 auto;
  }
  .way-card9 {
    margin: 0 auto;
  }
  .way-card2::before {
    content: none;
    position: relative;
    top: 0;
    left: 0;
  }
  .way-card3::before {
    content: none;
    position: relative;
    top: 0;
    left: 0;
  }
  .way-card4::before {
    content: none;
    position: relative;
    top: 0;
    left: 0;
  }
  .way-card5::before {
    content: none;
    position: relative;
    top: 0;
    left: 0;
  }
  .way-card6::before {
    content: none;
    position: relative;
    top: 0;
    left: 0;
  }
  .way-card7::before {
    content: none;
    position: relative;
    top: 0;
    left: 0;
  }
  .way-card8::before {
    content: none;
    position: relative;
    top: 0;
    left: 0;
  }
  .way-card9::before {
    content: none;
    position: relative;
    top: 0;
    left: 0;
  }
}
</style>
