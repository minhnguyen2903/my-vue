<script setup lang="ts">
import { defineProps, ref } from 'vue';
import type { MenuItem } from '@/types/Sidebar';
import SideBarItem from '@/layout/sidebar/SideBarItem.vue';
import SideBarMenuMedial from './SideBarMenuMedial.vue';

defineProps<{
	itemCollapse: MenuItem;
}>();

const collapse = ref(true);
</script>

<template>
	<SideBarItem
		@click="collapse = !collapse"
		:collapse="collapse"
		:item="itemCollapse"
	/>
	<div class="collapse-container" :class="{ collapse: collapse }">
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
	height: auto;
	transition: 0.3s;
	padding-left: 16px;
}

.collapse {
	height: 0px;
}
</style>
