import { HotelPassDto } from './HotelPassDto';

export interface HotelPassAttributes extends HotelPassDto {
  id: string;
  image: string;
  type: string;
  title: string;
  passType: string;
  location: string;
  ratingPercentage: string;
  ratingAmount: string;
  price: string;
}
