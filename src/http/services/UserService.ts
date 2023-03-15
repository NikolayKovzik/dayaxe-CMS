import { $authApi } from '../api';
import { AxiosResponse } from 'axios';
import { User } from '../../models/User/User';
import { UserDto } from '../../models/User/UserDto';

const usersPath = '/users';

export default class UserService {
  static async getAllUsers(): Promise<AxiosResponse<User[]>> {
    return $authApi.get<User[]>(usersPath);
  }

  static async getUserById(id: string): Promise<AxiosResponse<User>> {
    return $authApi.get<User>(`${usersPath}/${id}`);
  }

  static async createUser(body: UserDto): Promise<AxiosResponse<User>> {
    return $authApi.post<User>(usersPath, { ...body });
  }

  static async updateUser(id: string, body: UserDto): Promise<AxiosResponse<User>> {
    return $authApi.put<User>(`${usersPath}/${id}`, { ...body });
  }

  static async deleteUser(id: string): Promise<AxiosResponse<User>> {
    console.log('delete');
    const c = await $authApi.delete<User>(`${usersPath}/${id}`);
    console.log(c);
    return c;
  }
}
