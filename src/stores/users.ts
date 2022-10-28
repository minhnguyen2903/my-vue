import { ref, computed, type Ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

import type { UserInterface } from '@/types/User';

export const useUserStore = defineStore('counter', () => {
	const user: Ref<UserInterface> = ref({
		list: [],
		detail: null,
	});

	async function getList() {
		const { data } = await axios.get(
			'https://61ecf915f3011500174d2262.mockapi.io/users'
		);
		user.value.list = data;
	}

	return { user, getList };
});
