export enum Modules {
	USERS = 'Users',
	DAYCATION = 'Daycation',
	HOTELS = 'Hotels',
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

export interface RegisterUserDto {
	username: string;
	password: string;
	email: string;
}

export interface LoginUserDto {
	password: string;
	email: string;
}
