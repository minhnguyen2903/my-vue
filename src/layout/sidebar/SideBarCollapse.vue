<script setup lang="ts">
import { defineProps, ref } from 'vue';
import type { MenuItem } from '@/types/Sidebar';
import SideBarItem from '@/layout/sidebar/SideBarItem.vue';
import SideBarMenuMedial from './SideBarMenuMedial.vue';
import { useSidebarStore } from '@/stores/sidebar';

const props = defineProps<{
	itemCollapse: MenuItem;
}>();

const { sidebar } = useSidebarStore();

const expand = ref(
	window.location.pathname
		.split('/')
		.includes(props.itemCollapse.name.toLocaleLowerCase())
);
</script>

<template>
	<SideBarItem
		@click="expand = !expand"
		:expand="expand"
		:item="$props.itemCollapse"
	/>
	<div
		class="collapse-container"
		:class="{ expand: expand, collapseContainerCollapse: !sidebar.open }"
		:style="{
			height: expand
				? `${(itemCollapse?.children?.length || 0) * 62}px`
				: '0px',
		}"
	>
		<SideBarMenuMedial
			v-for="item in itemCollapse.children"
			:key="item.name"
			:item="item"
		/>
	</div>
</template>

<style scoped>
.collapse-container {
	overflow: hidden;
	height: 0;
	transition: 0.3s;
	padding-left: 16px;
}

.collapse-container.collapseContainerCollapse {
	padding-left: 0;
}

.expand {
	height: auto;
}
</style>
