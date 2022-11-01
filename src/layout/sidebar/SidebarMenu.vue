<script setup lang="ts">
import menu from '@/config/sidebar/menu';
import { useSidebarStore } from '@/stores/sidebar';
import SideBarMenuMedial from './SideBarMenuMedial.vue';

const { sidebar } = useSidebarStore();
</script>

<template>
	<div v-for="group in menu" :key="group.name">
		<div class="group-divider" :class="{ groupDividerCollapse: !sidebar.open }">
			<span>{{ group.name.trim() }}</span>
		</div>
		<ul v-if="group.children">
			<SideBarMenuMedial
				v-for="item in group.children"
				:key="item.name"
				:item="item"
			/>
		</ul>
	</div>
</template>

<style>
.sidebar-item-start {
	display: flex;
	gap: 12px;
	height: 100%;
	width: 100%;
	align-items: center;
	padding-right: 40px;
	overflow: hidden;
}

ul {
	padding: 10px;
}

.group-divider {
	height: 2px;
	background: rgba(255, 255, 255, 0.466);
	border-radius: 9999px;
	margin: 1em 10px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.group-divider.groupDividerCollapse {
	visibility: hidden;
}

.group-divider > span {
	line-height: 0px;
	display: block;
	width: fit-content;
	margin-top: -3px;
	box-shadow: 0px 0px 0px 4px #ff9595;
	color: rgba(255, 255, 255, 0.849);
}
</style>
