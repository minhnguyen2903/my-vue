export interface MenuItem {
	name: string;
	type: 'group' | 'collapse' | 'item';
	path?: MenuItem['type'] extends 'group' ? null : Partial<string>;
	icon?: string;
	children?: MenuItem['type'] extends 'item' ? null : MenuItem[];
}
