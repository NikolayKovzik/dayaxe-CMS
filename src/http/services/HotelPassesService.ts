import { $authApi } from '../api';
import { AxiosResponse } from 'axios';
import { HotelPassDto } from '../../models/HotelPass/HotelPassDto';
import { HotelPass } from '../../models/HotelPass/HotelPass';

const hotelPassesPath = '/hotel-passes';

export default class HotelPassesService {
  static async getAllHotelPasses(): Promise<AxiosResponse<HotelPass[]>> {
    return $authApi.get<HotelPass[]>(hotelPassesPath);
  }

  static async getHotelPassById(id: string): Promise<AxiosResponse<HotelPass>> {
    return $authApi.get<HotelPass>(`${hotelPassesPath}/${id}`);
  }

  static async createHotelPass(body: HotelPassDto): Promise<AxiosResponse<HotelPass>> {
    return $authApi.post<HotelPass>(hotelPassesPath, body);
  }

  static async updateHotelPass(id: string, body: HotelPassDto): Promise<AxiosResponse<HotelPass>> {
    return $authApi.put<HotelPass>(`${hotelPassesPath}/${id}`, body);
  }

  static async deleteHotelPass(id: string): Promise<AxiosResponse<HotelPass>> {
    return await $authApi.delete<HotelPass>(`${hotelPassesPath}/${id}`);
  }
}
