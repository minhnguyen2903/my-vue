<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import MainPageVue from '@/components/MainPage.vue';
import SideBarContainer from '@/layout/sidebar/SideBarContainer.vue';
import HeaderContainer from '@/layout/header/HeaderContainer.vue';
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
	display: grid;
	grid-template-columns: 300px auto;
}
</style>
