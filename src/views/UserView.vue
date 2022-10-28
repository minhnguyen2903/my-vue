<script lang="ts" setup>
import { useUserStore } from '@/stores/users';
import { onMounted, ref, type Ref } from 'vue';
import type { User } from '@/types/User';

const { user, getList } = useUserStore();

const tableRows = ref([
	'active',
	'avatar',
	'bankBalance',
	'birth',
	'country',
	'createdAt',
	'email',
	'id',
	'name',
	'phone',
	'timezone',
]);

onMounted(() => {
	getList();
});
</script>

<template>
	<div class="user">
		<div class="data-grid-container">
			<div class="data-grid">
				<div class="data-grid-header">
					<div
						class="data-grid-row"
						:style="{
							gridTemplateColumns: `repeat(${tableRows.length}, ${
								100 / tableRows.length
							}%)`,
						}"
					>
						<div class="data-grid-cell" v-for="item in tableRows" :key="item">
							{{ item }}
						</div>
					</div>
				</div>
				<div class="data-grid-body">
					<div
						class="data-grid-row"
						:style="{
							gridTemplateColumns: `repeat(${tableRows.length},  ${
								100 / tableRows.length
							}%)`,
						}"
						v-for="element in user.list"
						:key="element.id"
					>
						<div class="data-grid-cell" v-for="item in tableRows" :key="item">
							{{ element[item as keyof User] }}
						</div>
						<!-- <div class="data-grid-cell">0</div>
						<div class="data-grid-cell">Hello World</div>
						<div class="data-grid-cell">22</div>
						<div class="data-grid-cell">032442123</div>
						<div class="data-grid-cell">Minnhnv@email.com</div> -->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.data-grid-container {
	padding: 5px;
	border: solid 1px #6d6d6d;
}

.data-grid-row {
	display: grid;
}

.data-grid-cell {
	border: solid 1px;
	padding: 4px 8px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>
