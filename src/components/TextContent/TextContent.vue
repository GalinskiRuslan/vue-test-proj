<template>
  <h3 class="text-title">{{ title }}</h3>
  <div
    class="text-container"
    :style="[imgRight ? 'flex-direction: row-reverse;' : '']"
  >
    <div class="text-img-conteiner">
      <img :src="imgSrc" alt="Img" class="text-img" />
    </div>
    <div class="text-content">
      <p class="text-p">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["imgRight", "imgSrc", "text", "title"],
  data() {
    return {};
  },
};
</script>

<style>
.text-container {
  max-width: 1220px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}
.text-img-conteiner {
  max-width: 470px;
  max-height: 600px;
}
.text-p {
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 18px;
}
.text-content {
  display: flex;
  justify-content: center;
  max-width: 700px;
  align-content: center;
  flex-wrap: wrap;
}
.text-title {
  text-align: center;
  font-family: "Komika Title - Axis RUS-LAT";
  font-weight: 400;
  font-size: 22px;
  margin-top: 60px;
}
@media screen and (max-width: 1200px) {
  .text-container {
    display: block;
  }
  .text-img {
    width: 100%;
  }
  .text-content {
    margin: 0 auto;
  }
  .text-img-conteiner {
    margin: 0 auto;
  }
}
</style>
