import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './index.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight, faCheck, faMagnifyingGlass, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTwitter, faFacebook, faInstagram, faLinkedin, faHtml5, faCss3Alt, faJs, faWordpress, faLaravel, faVuejs } from '@fortawesome/free-brands-svg-icons';
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'


library.add(faArrowRight, faMagnifyingGlass, faPaperPlane, faCheck, faCss3Alt, faJs, faWordpress, faLaravel, faVuejs);
library.add(faFacebook, faTwitter, faInstagram, faLinkedin, faHtml5);



createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(Toast).mount("#app");

