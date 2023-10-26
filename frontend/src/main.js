import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import 'primevue/resources/themes/viva-light/theme.css'
import Password from 'primevue/password'
import FileUpload from 'primevue/fileupload';
import Card from 'primevue/card'
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
const app = createApp(App)
app.use(PrimeVue)
app.component('Button', Button)
app.component('Input', InputText)
app.component('Dropdown', Dropdown)
app.component('Password', Password)
app.component('Upload',FileUpload)
app.component('Card', Card)
app.component('Accordion', Accordion)
app.component('AccordionTab', AccordionTab)
app.use(createPinia())
app.use(router)

app.mount('#app')
