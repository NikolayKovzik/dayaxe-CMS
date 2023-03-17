export interface HotelPassDto {
  image: string,
  type: string,
  title: string,
  passType: string,
  location: string,
  ratingPercentage: string,
  ratingAmount: string,
  price: string
}

export interface HotelPassFormData {
  image: FileList,
  type: string,
  title: string,
  passType: string,
  location: string,
  ratingPercentage: string,
  ratingAmount: string,
  price: string
}