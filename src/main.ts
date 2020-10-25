import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './sass/app.scss'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faMap, faPaperPlane, faChevronRight, faQuoteLeft, faCalendar, faUser, faComment, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { faVk, faOdnoklassniki, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(
  faUserSecret,
  faVk,
  faOdnoklassniki,
  faInstagram,
  faMap,
  faPaperPlane,
  faChevronRight,
  faQuoteLeft,
  faCalendar,
  faUser,
  faComment,
  faMapMarker,
);

const app = createApp(App)
  .use(router)
  .use(store)
  .component('fa', FontAwesomeIcon)
  .mount('#app')
