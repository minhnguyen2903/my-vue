<template>
	<main>
		<div class="main-page">
			<slot></slot>
		</div>
	</main>
</template>

<style scoped>
.main-page {
	padding: 10px;
	height: calc(100vh - 80px);
	width: calc(100vw - 300px);
	overflow: auto;
	box-sizing: border-box;
}
</style>
