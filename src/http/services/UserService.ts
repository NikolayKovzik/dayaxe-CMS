import $api from '../api';
import { AxiosResponse } from 'axios';
import { User } from '../../models/User/User';
import { CreateUser } from '../../models/User/CreateUser';
import { UpdateUser } from '../../models/User/UpdateUser';

const usersPath = '/users';

export default class UserService {
  static async getAllUsers(): Promise<AxiosResponse<User[]>> {
    return $api.get<User[]>(usersPath);
  }

  static async getUserById(id: string): Promise<AxiosResponse<User>> {
    return $api.get<User>(`${usersPath}/${id}`);
  }

  static async createUser(body: CreateUser): Promise<AxiosResponse<User>> {
    return $api.post<User>(usersPath, { ...body });
  }

  static async updateUser(id: string, body: UpdateUser): Promise<AxiosResponse<User>> {
    return $api.put<User>(`${usersPath}/${id}`, { ...body });
  }

  static async deleteUser(id: string): Promise<AxiosResponse<User>> {
    return $api.delete<User>(`${usersPath}/${id}`);
  }
}
