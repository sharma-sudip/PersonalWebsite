import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "/node_modules/primeflex/primeflex.css";
import "primeflex/themes/primeone-light.css";
import "primeflex/themes/primeone-dark.css";
import router from "./router/vue-router";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/lara-light-green/theme.css";
import Button from "primevue/button";
import Card from "primevue/card";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareFacebook,
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import Divider from "primevue/divider";

library.add(faUserSecret);
library.add(faSquareFacebook);
library.add(faFacebook);
library.add(faInstagram);
library.add(faTwitter);
library.add(faLinkedin);
library.add(faGithub);
library.add(faLocationDot);

const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.component("Button", Button);
app.component("Card", Card);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("Divider", Divider);
app.mount("#app");
