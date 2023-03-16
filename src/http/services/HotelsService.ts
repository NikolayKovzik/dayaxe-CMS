import { $authApi } from '../api';
import { AxiosResponse } from 'axios';
import { Hotel } from '../../models/Hotels/Hotel';
import { HotelDto } from '../../models/Hotels/HotelDto';

const hotelsPath = '/hotels';

export default class HotelsService {
  static async getAllHotels(): Promise<AxiosResponse<Hotel[]>> {
    return $authApi.get<Hotel[]>(hotelsPath);
  }

  static async getHotelById(id: string): Promise<AxiosResponse<Hotel>> {
    return $authApi.get<Hotel>(`${hotelsPath}/${id}`);
  }

  static async createHotel(body: HotelDto): Promise<AxiosResponse<Hotel>> {
    return $authApi.post<Hotel>(hotelsPath, body);
  }

  static async updateHotel(id: string, body: HotelDto): Promise<AxiosResponse<Hotel>> {
    return $authApi.put<Hotel>(`${hotelsPath}/${id}`, body);
  }

  static async deleteHotel(id: string): Promise<AxiosResponse<Hotel>> {
    return await $authApi.delete<Hotel>(`${hotelsPath}/${id}`);
  }
}
