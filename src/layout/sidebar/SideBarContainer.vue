<script setup lang="ts">
import SideBarMenu from '@/layout/sidebar/SidebarMenu.vue';
</script>

<template>
	<div id="side-bar">
		<div class="side-bar-top">
			<div class="side-bar-logo">Logo</div>
			<div class="side-bar-collapse">
				<font-awesome-icon icon="fa-solid fa-bars" />
			</div>
		</div>

		<div class="side-bar-nav">
			<SideBarMenu />
		</div>
	</div>
</template>

<style scoped>
.side-bar-top {
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: white;
	padding: 10px;
	font-size: 1.85em;
}

#side-bar {
	background: #ff9595;
	height: 100vh;
	position: sticky;
	top: 0;
}

.side-bar-nav {
	padding: 1em 0;
}
</style>
