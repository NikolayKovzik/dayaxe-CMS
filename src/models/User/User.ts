import { Access } from './UserDto';

export interface User {
  _id: string;
  username: string;
	email: string;
	access: Access;
}
