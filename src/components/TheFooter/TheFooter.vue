<template>
  <div class="footer-out">
    <svg
      width="536"
      height="6"
      viewBox="0 0 536 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.394531 2.59743C174.05 5.59121 349.901 2.93256 534.15 2.4209"
        stroke="#DC0000"
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>

    <svg
      class="footer-svg"
      width="1377"
      height="10"
      viewBox="0 0 1377 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.50879 2.02441C333.776 10.7806 665.942 9.91816 1377 2.65011"
        stroke="#F9CD02"
        stroke-width="3"
        stroke-linecap="round"
        stroke-dasharray="9 9"
      />
    </svg>
  </div>

  <div class="footer-container">
    <div class="footer-container-left">
      <router-link to="/">
        <img src="../../assets/icons/image 10.png" />
      </router-link>
    </div>
    <div class="footer-container-right">
      <div class="footer-container-right-flex">
        <div class="footer-container-right-inner">
          <p class="footer-p">Алматы</p>
          <p class="footer-p">Астана</p>
          <p class="footer-p">Павлодар</p>
        </div>
        <div class="footer-container-right-inner">
          <p class="footer-p">Петропавловск</p>
          <p class="footer-p">Семей</p>
          <p class="footer-p">Караганда</p>
        </div>
        <div class="footer-container-right-inner">
          <p class="footer-p">Тараз</p>
          <p class="footer-p">Усть-Каменогорск</p>
          <p class="footer-p">Актобе</p>
        </div>
      </div>
      <div class="footer-container-right-bottom">
        <div><p class="footer-p">О нас</p></div>
        <div><p class="footer-p">Все права защищены © 2022</p></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer-container {
  padding: 65px 0;
  display: flex;
  justify-content: space-around;
}
.footer-out {
  padding-top: 150px;
  display: flex;
}
.footer-container-right-flex {
  display: flex;
}
.footer-container-right-inner {
  margin: 0 45px;
}
.footer-container-right-bottom {
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
}
.footer-p {
  cursor: pointer;
  font-size: 18px;
  line-height: 22px;
  padding: 8px 0;
}
@media screen and (max-width: 1200px) {
  .footer-container {
    text-align: center;
    display: block;
  }
  .footer-container-right-flex {
    display: block;
  }
}
</style>
