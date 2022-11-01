<script setup lang="ts">
import { defineProps, ref, watch } from 'vue';
import type { MenuItem } from '@/types/Sidebar';
import router from '@/router';
import { useRoute } from 'vue-router';
import { useSidebarStore } from '@/stores/sidebar';

defineProps<{
	item: MenuItem;
	expand?: boolean;
}>();

const { sidebar } = useSidebarStore();
const sidebarRef = ref(sidebar);

const navigate = (to: string | undefined) => {
	to && router.push(to);
};
</script>

<template>
	<li
		@click="navigate(item.path)"
		:class="{
			sidebarActive:
				sidebarRef.active.includes(item.name.toLocaleLowerCase()) || expand,
		}"
	>
		<p class="sidebar-item-start">
			<font-awesome-icon :icon="`fa-solid ${item.icon}`" />
			<span>{{ item.name }}</span>
		</p>
		<p
			v-if="item.type === 'collapse'"
			class="end-icon"
			:class="{ endIconRevert: expand }"
		>
			<font-awesome-icon icon="fa-solid fa-chevron-down" />
		</p>
	</li>
</template>

<style scoped>
li {
	user-select: none;
	list-style-type: none;
	padding: 0 16px;
	height: 50px;
	color: rgb(255, 255, 255);
	border-radius: 3px;
	margin-bottom: 12px;
	box-sizing: border-box;
	text-transform: capitalize;
	border: solid 1px transparent;
	cursor: pointer;
	display: flex;
	justify-content: space-between;
	overflow: hidden;
}

li.sidebarActive {
	background: rgb(255, 255, 255);
	/* box-shadow: 0px 0px 4px 0px rgb(255, 255, 255); */
	color: #121120;
	font-weight: 500;
}

li:hover {
	background: rgb(255, 255, 255);
	/* box-shadow: 0px 0px 4px 0px rgb(255, 255, 255); */
	color: #121120;
	transition: 0.1s;
}

li svg {
	font-size: 1.25em;
}

.sidebar-item-start {
	display: flex;
	gap: 12px;
	height: 100%;
	width: 100%;
	align-items: center;
	padding-right: 40px;
	overflow: hidden;
}

.sidebar-item-start span {
	line-height: 1.5em;
	display: block;
}

a {
	text-decoration: none;
	color: inherit;
}

.end-icon {
	transition: 0.1s;
	margin-left: 4px;
	display: flex;
	align-items: center;
}

.end-icon.endIconRevert {
	transform: rotate(180deg);
}

svg {
	width: 20px;
	height: 20px;
}
</style>
