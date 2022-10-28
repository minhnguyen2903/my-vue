<script setup lang="ts">
import { defineProps, onMounted } from 'vue';
import type { MenuItem } from '@/types/Sidebar';
defineProps<{
	item: MenuItem;
	collapse?: boolean;
}>();
</script>

<template>
	<li>
		<p class="sidebar-item-start">
			<font-awesome-icon :icon="`fa-solid ${item.icon}`" />
			<router-link v-if="item.path" :to="item.path">{{
				item.name
			}}</router-link>
			<span v-else>{{ item.name }}</span>
		</p>
		<p
			v-if="item.type === 'collapse'"
			class="end-icon"
			:class="{ endIconRevert: !collapse }"
		>
			<font-awesome-icon icon="fa-solid fa-chevron-down" />
		</p>
	</li>
</template>

<style scoped>
li {
	user-select: none;
	list-style-type: none;
	padding: 14px 16px;
	color: rgb(255, 255, 255);
	border-radius: 8px;
	margin-bottom: 12px;
	box-sizing: border-box;
	text-transform: capitalize;
	border: solid 1px transparent;
	cursor: pointer;
	display: flex;
	justify-content: space-between;
}

li.active {
	background: rgb(255, 255, 255);
	box-shadow: 0px 0px 4px 0px rgb(255, 255, 255);
	color: #121120;
	font-weight: 500;
}

li:hover {
	background: rgb(255, 255, 255);
	box-shadow: 0px 0px 4px 0px rgb(255, 255, 255);
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

a {
	text-decoration: none;
	color: inherit;
}

.endIconRevert {
	transform: rotate(180deg);
}

.end-icon {
	transition: 0.1s;
}
</style>
