<script setup lang="ts">
import type { MenuItem } from '@/types/Sidebar';
import { defineProps } from 'vue';
import SideBarCollapse from '@/layout/sidebar/SideBarCollapse.vue';
import SidebarItem from '@/layout/sidebar/SideBarItem.vue';
defineProps<{
	item: MenuItem;
}>();
</script>

<template>
	<SideBarCollapse v-if="item.type === 'collapse'" :item-collapse="item" />
	<SidebarItem v-if="item.type === 'item'" :item="item" />
</template>
