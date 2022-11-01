<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router';
import MainPageVue from '@/components/MainPage.vue';
import SideBarContainer from '@/layout/sidebar/SideBarContainer.vue';
import HeaderContainer from '@/layout/header/HeaderContainer.vue';
import { watch, onMounted } from 'vue';
import { useSidebarStore } from './stores/sidebar';

const route = useRoute();
const { sidebar } = useSidebarStore();
onMounted(() => {
	watch(route, (prevRoute, nextRoute) => {
		sidebar.active = nextRoute.path.split('/').filter((path) => !!path);
	});
});
</script>

<template>
	<div id="container-grid">
		<div id="section-left">
			<SideBarContainer />
		</div>
		<div id="section-right">
			<HeaderContainer />
			<main-page-vue>
				<RouterView />
			</main-page-vue>
		</div>
	</div>
</template>

<style scoped>
#container-grid {
	display: flex;
}

#section-right {
	flex-grow: 1;
}
</style>
