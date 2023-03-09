export enum Modules {
	USERS = 'Users',
	DAYCATION = 'Daycation',
	HOTEL_PASSES = 'Hotel Passes',
	MOMENTS = 'Moments',
	PROMOTIONS = 'Promotions',
}

export type AccessType = 'create' | 'read' | 'update' | 'delete';

export type Access = {
	[module in Modules]: AccessType[];
};

export interface UserDto {
	username: string;
	password: string;
	email: string;
	access: Access;
}
