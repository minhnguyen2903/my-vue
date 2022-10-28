import type { MenuItem } from '@/types/Sidebar';

const menuItem: MenuItem = {
	name: 'Application',
	type: 'group',
	children: [
		{
			name: 'Dashboard',
			type: 'item',
			icon: 'fa-gauge',
			// path: '/dashboard',
		},
		{
			name: 'User',
			type: 'collapse',
			icon: 'fa-users',
			children: [
				{
					name: 'List',
					icon: 'fa-list-ul',
					type: 'item',
					path: '/user/list',
				},
			],
			path: '/',
		},
		{
			name: 'Setting',
			type: 'item',
			icon: 'fa-gear',
			path: '/setting',
		},
	],
};

export default menuItem;
