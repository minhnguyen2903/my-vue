<script setup lang="ts">
import SideBarMenu from '@/layout/sidebar/SidebarMenu.vue';
import { useSidebarStore } from '@/stores/sidebar';

const { sidebar } = useSidebarStore();

const toggleSideBarVisible = () => {
	console.log('toggle');
	sidebar.open = !sidebar.open;
};
</script>

<template>
	<div id="side-bar-container">
		<div id="side-bar" :class="{ sideBarOpen: sidebar.open }">
			<div class="side-bar-top">
				<div class="side-bar-logo">Logo</div>
				<div class="side-bar-collapse">
					<button class="side-bar-collapse-btn" @click="toggleSideBarVisible()">
						<font-awesome-icon icon="fa-solid fa-bars" />
					</button>
				</div>
			</div>

			<div class="side-bar-nav">
				<SideBarMenu />
			</div>
		</div>
	</div>
</template>

<style scoped>
#side-bar-container {
	background: #ff9595;
	height: 100vh;
	position: sticky;
	top: 0;
}
#side-bar {
	width: 70px;
	height: 100%;
	transition: 0.3s;
	overflow: hidden;
}

#side-bar.sideBarOpen {
	width: 300px;
}

.side-bar-collapse {
	width: 50px;
	display: flex;
	justify-content: center;
}
.side-bar-collapse-btn {
	cursor: pointer;
	width: 36px;
	height: 36px;
	padding: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 0.875em;
	border: none;
	background: transparent;
	color: white;
	transition: 0.3s;
	border-radius: 4px;
}

.side-bar-collapse-btn:hover {
	background: rgba(0, 0, 0, 0.05);
}

.side-bar-top {
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: white;
	padding: 10px;
	font-size: 1.85em;
}

.side-bar-logo {
	width: calc(100% - 50px);
	overflow: hidden;
}

.side-bar-nav {
	padding: 1em 0;
	overflow-y: auto;
	overflow-x: hidden;
	height: calc(100% - 80px);
}
</style>
