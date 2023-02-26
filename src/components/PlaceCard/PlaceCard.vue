<template>
  <div class="card-container">
    <div class="card-top">
      <p class="card-top-num">{{ topNum }}</p>
      <svg
        width="58"
        height="56"
        viewBox="0 0 58 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M56.7892 29.2077C56.886 29.0374 57.1451 29.1588 57.0762 29.3422L53.4838 38.9079C53.4617 38.9667 53.4454 39.0274 53.4352 39.0893L53.2226 40.3708C52.4271 45.1659 49.2433 49.2253 44.776 51.1406L37.5783 54.2265C33.8763 55.3855 29.923 55.481 26.1693 54.5021L22.6498 53.5843C20.8174 53.1065 19.029 52.4736 17.3039 51.6925L7.95206 47.4584C7.12138 47.0823 6.33157 46.6218 5.59511 46.0841C2.24732 43.64 0.230356 39.7748 0.140172 35.6308L0 29.1896L0.0817715 28.4429C0.868887 21.2552 4.15335 14.5715 9.3627 9.55695L12.7443 6.33506C14.8786 4.30144 17.4464 2.77825 20.2543 1.88004L21.453 1.4966C26.3818 -0.080057 31.7613 0.68786 36.0522 3.58061C37.2769 4.40625 38.6045 5.06782 40.0011 5.54841L42.6304 6.45317C45.4872 7.43624 48.2524 8.7155 50.558 10.668C53.324 13.0103 56.7969 16.5964 57.6316 20.3798C58.5207 24.4098 57.623 27.4736 56.8086 29.2248C56.7263 29.4019 56.6927 29.3775 56.7892 29.2077Z"
          fill="#F9CD02"
        />
      </svg>
    </div>
    <img class="card-img" :src="imgSrc" />
    <svg
      width="374"
      height="334"
      viewBox="0 0 374 334"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M155.698 310.544C209.304 310.821 290.337 295.614 337.559 254.292C393.685 205.177 374.096 110.917 337.524 69.1247C293.393 18.6921 140.935 -36.2883 57.285 36.911C-20.253 105.116 -10.9782 213.724 47.571 280.633C102.955 343.925 202.213 354.989 284.784 282.734C356.561 219.924 350.362 130.622 303.769 77.376C238.011 2.22937 115.907 18.9623 76.396 47.8607C15.8738 91.9519 14.9008 169.791 40.9605 219.718C67.8054 271.086 119.178 311.281 199.319 296.143"
        stroke="#DC0000"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
    </svg>
    <p class="card-title">{{ cardTitle }}</p>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: { type: String, default: "/src/assets/img/06406.jpg" },
    cardTitle: { type: String, default: "" },
    topNum: { type: Number },
  },
};
</script>

<style>
.card-container {
  max-width: 388px;
  max-height: 420px;
  cursor: pointer;
  transition: 1s;
}
.card-container:hover {
  transform: scale(1.1);
}
.card-img {
  max-width: 264px;
  max-height: 264px;
  border-radius: 100px;
  position: absolute;
  top: 10%;
  left: 10%;
}
.card-title {
  font-family: "Komika Title - Axis RUS-LAT";
  font-weight: 400;
  font-size: 22px;
  text-align: center;
}
.card-top {
  position: absolute;
  z-index: 66;
  top: 15%;
  left: 10%;
}
.card-top-num {
  font-family: "Komika Title - Axis RUS-LAT";
  position: absolute;
  z-index: 67;
  font-size: 22px;
  top: 13%;
  left: 30%;
}
@media screen and (max-width: 1200px) {
  .card-container {
    margin: 0 auto;
  }
}
</style>
