import { createAsyncThunk } from '@reduxjs/toolkit';
import { handleAxiosError } from '../../utils/handleAxiosErrors';
import { HotelPass } from '../../models/HotelPass/HotelPass';
import HotelPassesService from '../../http/services/HotelPassesService';
import { HotelPassAttributes } from '../../models/HotelPass/HotelPassAttributes';
import { HotelPassDto } from '../../models/HotelPass/HotelPassDto';

export const getAllHotelPasses = createAsyncThunk<HotelPass[], void, { rejectValue: string }>(
  'hotel-passes/getAllHotelPasses',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await HotelPassesService.getAllHotelPasses();
      return data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  },
);

export const createHotelPass = createAsyncThunk<HotelPass, HotelPassDto, { rejectValue: string }>(
  'hotel-passes/createHotelPass',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await HotelPassesService.createHotelPass(body);
      return data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  },
);

export const updateHotelPass = createAsyncThunk<HotelPass, HotelPassAttributes, { rejectValue: string }>(
  'hotel-passes/updateHotelPass',
  async (hotelPass, { rejectWithValue }) => {
    try {
      const { id, ...body } = hotelPass;
      const { data } = await HotelPassesService.updateHotelPass(id, body);
      return data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  },
);

export const deleteHotelPass = createAsyncThunk<string, string, { rejectValue: string }>(
  'hotel-passes/deleteHotelPass',
  async (id, { rejectWithValue }) => {
    try {
      await HotelPassesService.deleteHotelPass(id);
      return id;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  },
);
