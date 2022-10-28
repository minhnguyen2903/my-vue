export interface User {
	createdAt: Date;
	name: string;
	avatar: string;
	birth: Date;
	email: string;
	active: boolean;
	phone: string;
	country: string;
	bankBalance: number;
	timezone: string;
	id: string;
}

export interface UserInterface {
	list: User[];
	detail: User | null;
}
