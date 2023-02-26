<template>
  <div class="main-container">
    <div class="main-inner-left">
      <h3 class="main-city">{{ city }}</h3>
      <p class="main-title">{{ title }}</p>
    </div>
    <div class="main-inner-right">
      <div class="main-inner-right-svg-top">
        <svg
          width="121"
          height="115"
          viewBox="0 0 121 115"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M92.9569 17.4156C77.9113 8.13833 52.5723 -1.41843 32.4137 2.29118C8.45381 6.70031 -1.68948 37.0062 1.66371 55.228C5.71011 77.2167 39.4974 119.092 75.2069 112.521C108.366 106.329 123.797 73.6911 118.428 44.5188C113.35 16.9233 87.2447 -3.27034 51.996 3.21617C21.355 8.85477 8.26538 35.4461 12.5375 58.6613C18.5668 91.4254 55.7216 107.593 71.6456 106.112C96.0085 103.893 109.213 81.8091 110.17 63.0658C111.146 43.7757 103.36 23.4714 78.2841 14.0474"
            stroke="#DC0000"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div class="main-inner-right-svg-top2">
        <svg
          width="120"
          height="123"
          viewBox="0 0 120 123"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M96.0972 105.174C67.1498 128.346 31.7919 124.826 13.5475 101.589M96.0972 105.174V105.174ZM12.1953 98.5462C-3.85087 73.9779 -1.83796 36.2811 23.9627 18.6108M23.0616 15.0874C48.9408 -5.86657 86.2149 0.209628 108.913 19.904M106.963 21.7152C123.994 48.2695 121.361 84.1743 100.357 106.588"
            stroke="#F9CD02"
            stroke-width="3"
            stroke-linecap="round"
            stroke-dasharray="9 9"
          />
        </svg>
      </div>
      <img :src="src" class="main-inner-right-img" />
      <div class="main-inner-right-background-svg">
        <svg
          width="522"
          height="466"
          viewBox="0 0 522 466"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M217.393 433.637C292.399 434.024 405.778 412.746 471.85 354.929C550.382 286.209 522.972 154.322 471.802 95.8464C410.054 25.2819 196.738 -51.6458 79.696 50.7735C-28.794 146.205 -15.8168 298.168 66.1043 391.785C143.597 480.342 282.476 495.823 398.008 394.725C498.438 306.843 489.764 181.892 424.572 107.391C332.564 2.24752 161.719 25.66 106.436 66.0942C21.754 127.786 20.3926 236.698 56.855 306.554C94.4158 378.428 166.295 434.667 278.427 413.487"
            stroke="#DC0000"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: "Алматы",
      title: "прогулка по «немецкой» истории города",
      src: "/src/assets/img/Rectangle3.png",
    };
  },
};
</script>

<style scoped>
.main-container {
  background-image: url(../../assets/img/MainBanner.png);
  background-size: contain;
  height: 850px;
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  justify-content: space-around;
}
.main-inner-right-img {
  width: 100%;
  position: absolute;
  z-index: 100;
}
.main-inner-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.main-inner-right-background-svg {
  top: 36px;
  left: 85px;
}
.main-inner-right-svg-top {
  position: absolute;
  z-index: 101;
  left: 63px;
}
.main-inner-right-svg-top2 {
  position: absolute;
  z-index: 101;
  left: 175px;
}
.main-city {
  font-family: "Komika Title - Axis RUS-LAT";
  font-weight: 400;
  font-size: 56px;
}
.main-title {
  font-family: "Komika Title - Axis RUS-LAT";
  font-size: 12px;
  color: #ab9995;
}
@media screen and (max-width: 768px) {
  .main-container {
    height: 350px;
    display: block;
  }
  .main-inner-right {
    height: 120px;
    max-width: 300px;
    margin: 0 auto;
  }
  .main-inner-right-img {
    height: 220px;
  }
  .main-inner-right-background-svg {
    display: none;
  }
  .main-inner-right-svg-top {
    display: none;
  }
  .main-inner-right-svg-top2 {
    display: none;
  }
}
</style>
