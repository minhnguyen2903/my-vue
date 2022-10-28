import type { MenuItem } from '@/types/Sidebar';

const menuItem: MenuItem = {
	name: 'Application',
	type: 'group',
	children: [
		{
			name: 'Dashboard',
			type: 'item',
			path: '/dashboard',
		},
		{
			name: 'User',
			type: 'collapse',
			children: [
				{
					name: 'List',
					type: 'collapse',
					// path: '/user/list',
					children: [
						{
							name: 'List Child',
							type: 'item',
							path: '/user/list/child',
						},
					],
				},
			],
		},
		{
			name: 'Setting',
			type: 'item',
			path: '/setting',
		},
	],
};

export default menuItem;
