import { iCars } from "./car.model"

export interface iUser {
  id?: number
  photo?: string
  firstName: string
  lastName: string
  email: string
  birthday: string
  login: string
  password: string
  phone: string
  cars: iCars
}
