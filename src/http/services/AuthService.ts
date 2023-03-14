import { $api } from '../api';
import { AxiosResponse } from 'axios';
import { LoginUserDto, RegisterUserDto } from '../../models/User/UserDto';
import { AuthResponse } from '../../models/Auth/authResponse';

const signUpPath = '/auth/registration';
const signInPath = '/auth/login';


export default class AuthService {
  static async signUp(body: RegisterUserDto): Promise<AxiosResponse<AuthResponse>> {
    return $api.post(signUpPath, body)
  }

  static async signIn(body: LoginUserDto): Promise<AxiosResponse<string>> {
    return $api.post<string>(signInPath, { ...body });
  }
}