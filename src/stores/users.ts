import { ref, type Ref } from 'vue';
import { defineStore } from 'pinia';

import type { UserInterface } from '@/types/User';
import userAPI from '@/services/apis/user';

export const useUserStore = defineStore('user', () => {
	const user: Ref<UserInterface> = ref({
		list: [],
		detail: null,
	});

	async function getList() {
		const { data } = await userAPI.get();
		user.value.list = data;
	}

	return { user, getList };
});
