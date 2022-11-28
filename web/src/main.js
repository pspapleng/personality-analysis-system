import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMagicWandSparkles,
  faPeopleGroup,
  faCode,
  faQuestion,
  faMars,
  faVenus,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
  faMagicWandSparkles,
  faPeopleGroup,
  faLightbulb,
  faCode,
  faQuestion,
  faMars,
  faVenus,
  faCheck
);

const pinia = createPinia();
createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .use(pinia)
  .mount("#app");
