import Vue from 'vue'

import './styles/quasar.styl'
import lang from 'quasar/lang/pt-br.js'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import { Quasar, QTable, QInput } from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: { QTable, QInput },
  directives: { /* not needed if importStrategy is not 'manual' */ },
  plugins: {
  },
  lang: lang
 })