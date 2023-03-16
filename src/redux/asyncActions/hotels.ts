import { createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../../http/services/AuthService';
import { LoginUserDto, RegisterUserDto } from '../../models/User/UserDto';
import { AuthResponse } from '../../models/Auth/authResponse';
import { handleAxiosError } from '../../utils/handleAxiosErrors';
import HotelsService from '../../http/services/HotelsService';
import { Hotel } from '../../models/Hotels/Hotel';
import { HotelAttributes } from '../../models/Hotels/HotelAttributes';
import { HotelDto } from '../../models/Hotels/HotelDto';

export const getAllHotels = createAsyncThunk<Hotel[], void, { rejectValue: string }>(
  'hotels/getAllHotels',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await HotelsService.getAllHotels();
      return data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  },
);

export const createHotel = createAsyncThunk<Hotel, HotelDto, { rejectValue: string }>(
  'hotels/createHotel',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await HotelsService.createHotel(body);
      return data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  },
);

export const updateHotel = createAsyncThunk<Hotel, HotelAttributes, { rejectValue: string }>(
  'hotels/updateHotel',
  async (hotel, { rejectWithValue }) => {
    try {
      const { id, ...body } = hotel;
      const { data } = await HotelsService.updateHotel(id, body);
      return data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  },
);

export const deleteHotel = createAsyncThunk<string, string, { rejectValue: string }>(
  'hotels/deleteHotel',
  async (id, { rejectWithValue }) => {
    try {
      await HotelsService.deleteHotel(id);
      return id;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  },
);
