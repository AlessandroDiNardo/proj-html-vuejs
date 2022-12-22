/* Set up using Vue 3 */
import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBolt, faMagnifyingGlass, faPaperPlane, faQuestion, faTrophy, faUser, faClock, faPerson, faPhone, faEnvelope, faAngleLeft, faAngleRight, faPlay, faSignal, faGear, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { faGooglePlus, faLinkedin, faPinterestP, faSquareFacebook, faSquarePinterest, faSquareTwitter, faTwitter } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faMagnifyingGlass, faTrophy, faBolt, faQuestion, faClock, faPaperPlane, faUser, faPerson, faPhone, faEnvelope, faAngleLeft, faAngleRight, faPlay, faSignal, faGear, faSquareFacebook, faTwitter, faSquareTwitter, faLinkedin, faGooglePlus, faSquarePinterest, faEllipsis)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')

