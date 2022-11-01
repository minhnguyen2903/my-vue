export interface MenuItem {
	name: string;
	type: MenuItemType;
	path?: string;
	icon?: string;
	children?: MenuItem[];
}

export interface SidebarStore {
	open: boolean;
	active: Array<string>;
}

export enum MenuItemType {
	group = 'group',
	collapse = 'collapse',
	item = 'item',
}
