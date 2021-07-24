const axios = require('axios');
window.axios = axios;
window.axios.defaults.headers.common = {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
};


window.axios.defaults.headers.get["Accept"] = "application/json";
window.axios.defaults.headers.post["Accept"] = "application/json";
window.axios.defaults.headers.delete["Accept"] = "application/json";
window.axios.defaults.baseURL = "http://127.0.0.1:8000";
// Import Vue
import { createApp } from 'vue';

// Import Framework7
import Framework7 from 'framework7/lite-bundle';

// Import Framework7-Vue Plugin
import Framework7Vue, { registerComponents } from 'framework7-vue/bundle';

// Import Framework7 Styles
import 'framework7/framework7-bundle.css';

// Import Icons and App Custom Styles

import '../css/icons.css';
import '../css/app.scss';
// Import App Component
import App from '../components/app.vue';

// Init Framework7-Vue Plugin
Framework7.use(Framework7Vue);

// Init App
const app = createApp(App);

// Register Framework7 Vue components
registerComponents(app);

// Mount the app
app.mount('#app');
