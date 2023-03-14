import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../http/services/AuthService";
import { LoginUserDto, RegisterUserDto } from "../../models/User/UserDto";
import { AxiosError } from 'axios';
import { AuthResponse } from "../../models/Auth/authResponse";
import decodeErrorMessage from "../../utils/decodeErrorMessage";


export const registerUser = createAsyncThunk<AuthResponse, RegisterUserDto, { rejectValue: string }>(
  'auth/registration',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await AuthService.signUp(body);
      return data;
    } catch (error) {
      const message = (error as AxiosError).message;
      return rejectWithValue(decodeErrorMessage(message));
    }
  },

);

export const loginUser = createAsyncThunk<string, LoginUserDto, { rejectValue: string }>(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await AuthService.signIn(body);
      return data;
    } catch (error) {
      const message = (error as AxiosError).message;
      return rejectWithValue(decodeErrorMessage(message));
    }
  },
);