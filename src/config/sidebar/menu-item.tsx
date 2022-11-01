import type { MenuItem } from '@/types/Sidebar';
import { MenuItemType } from '@/types/Sidebar';

const menuItem: MenuItem = {
	name: 'Application',
	type: MenuItemType.group,
	children: [
		{
			name: 'Dashboard',
			type: MenuItemType.item,
			icon: 'fa-gauge',
			path: '/dashboard',
		},
		{
			name: 'User',
			type: MenuItemType.collapse,
			icon: 'fa-users',
			children: [
				{
					name: 'List',
					icon: 'fa-list-ul',
					type: MenuItemType.item,
					path: '/user/list',
				},
			],
		},
		{
			name: 'Setting',
			type: MenuItemType.item,
			icon: 'fa-gear',
			path: '/setting',
		},
	],
};

export default menuItem;
