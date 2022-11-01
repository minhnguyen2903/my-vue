<script lang="ts" setup>
import { AgGridVue } from 'ag-grid-vue3';
import { useUserStore } from '@/stores/users';
import { onMounted, ref, type Ref } from 'vue';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import type { User } from '@/types/User';
import axiosServices from '@/services/config/axios';

const { user, getList } = useUserStore();

const tableRows = ref<Array<{ field: keyof User; [key: string]: any }>>([
	{ field: 'active' },
	{ field: 'avatar', hide: true },
	{ field: 'bankBalance' },
	{ field: 'birth' },
	{ field: 'country' },
	{ field: 'createdAt' },
	{ field: 'email' },
	{ field: 'id' },
	{ field: 'name' },
	{ field: 'phone' },
	{ field: 'timezone' },
]);

const gridApi = ref(null); // Optional - for accessing Grid's API

// Obtain API from grid's onGridReady event
const onGridReady = (params: any) => {
	gridApi.value = params.api;
};

const rowData = ref([]); // Set rowData to Array of Objects, one Object per Row

// Each Column Definition results in one Column.

// DefaultColDef sets props common to all Columns
const defaultColDef = {
	sortable: true,
	filter: true,
	resizable: true,
};

// Example load data from sever
onMounted(async () => {
	const { data } = await axiosServices.get('/users');
	rowData.value = data;
});
</script>

<template>
	<div class="user">
		<ag-grid-vue
			class="ag-theme-alpine"
			style="height: calc(100vh - 80px - 20px)"
			:columnDefs="tableRows"
			:rowData="rowData"
			:defaultColDef="defaultColDef"
			sizeColumnsToFit="true"
			rowSelection="multiple"
			animateRows="true"
			@grid-ready="onGridReady"
		>
		</ag-grid-vue>
		<!-- <div class="data-grid-container">
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
							{{ element[item,] }}
						</div>
						<div class="data-grid-cell">0</div>
						<div class="data-grid-cell">Hello World</div>
						<div class="data-grid-cell">22</div>
						<div class="data-grid-cell">032442123</div>
						<div class="data-grid-cell">Minnhnv@email.com</div>
					</div>
				</div>

			</div>
		</div> -->
	</div>
</template>

<style scoped>
/* .data-grid-container {
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
} */
</style>
