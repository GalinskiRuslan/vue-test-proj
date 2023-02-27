import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/main.css";
import YmapPlugin from "vue-yandex-maps";

const settings = {
  apiKey: "", // Индивидуальный ключ API
  lang: "ru_RU", // Используемый язык
  coordorder: "latlong", // Порядок задания географических координат
  debug: false, // Режим отладки
  version: "2.1", // Версия Я.Карт
};
const app = createApp(App);

app.use(store);
app.use(router);
app.use(YmapPlugin, settings);

app.mount("#app");
