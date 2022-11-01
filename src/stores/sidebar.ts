import { ref, type Ref } from 'vue';
import { defineStore } from 'pinia';

import type { SidebarStore } from '@/types/Sidebar';

export const useSidebarStore = defineStore('sidebar', () => {
	const sidebar: Ref<SidebarStore> = ref({
		open: true,
		active: [''],
	});

	return { sidebar };
});
