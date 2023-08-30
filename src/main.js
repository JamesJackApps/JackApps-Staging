import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './index.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight, faCheck, faMagnifyingGlass, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'


library.add(faArrowRight, faMagnifyingGlass, faPaperPlane, faCheck);
library.add(faFacebook, faTwitter, faInstagram, faLinkedin);


createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");

