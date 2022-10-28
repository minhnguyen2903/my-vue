import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
	faUserSecret,
	faUsers,
	faGear,
	faGauge,
	faChevronDown,
	faChevronUp,
	faBars,
	faListUl,
} from '@fortawesome/free-solid-svg-icons';

library.add(
	faUserSecret,
	faUsers,
	faGear,
	faGauge,
	faChevronDown,
	faChevronUp,
	faBars,
	faListUl
);

import App from '@/App.vue';
import router from '@/router';
import '@/assets/main.css';

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(createPinia());
app.use(router);

app.mount('#app');
