<template>
	<header id="header">
		<div class="header-container">
			<div class="logo"></div>
			<div class="header-menu">
				<div class="avatar">M</div>
			</div>
		</div>
	</header>
</template>

<style scoped>
#header {
	height: 80px;
	position: sticky;
	top: 0;
	background: #ff9595;
	box-shadow: 4px 0px 4px 0px rgba(0, 0, 0, 0.26);
}

.header-container {
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 20px;
}

.header-menu {
	display: flex;
	justify-content: flex-end;
	height: 100%;
	align-items: center;
}

.avatar {
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background: blue;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.25em;
	font-weight: 500;
	color: white;
}
</style>
