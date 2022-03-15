import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import './index.css'

// Animate Animate Onscroll Setup.
import AOS from "aos";
import "aos/dist/aos.css";

// FontAwesomeIcon
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas, far, fab)

const app = createApp(App)

app.AOS = new AOS.init();

app.use(AOS).use(createPinia()).component('FontAwesomeIcon', FontAwesomeIcon).mount('#app')
