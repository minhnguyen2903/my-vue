export interface MenuItem {
	name: string;
	type: string;
	path?: string;
	icon?: HTMLElement;
	children?: MenuItem[];
}
