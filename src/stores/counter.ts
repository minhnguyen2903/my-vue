import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
	const count = ref(0);
	const doubleCount = computed(() => count.value * 2);
	const name = ref('minh');
	function increment() {
		count.value++;
	}
	function changeName(newName: string) {
		name.value = newName;
	}

	return { count, doubleCount, name, increment, changeName };
});
