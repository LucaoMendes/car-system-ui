export interface iCar {
  id?: number
  photo: string
  licensePlate: string
  model: string
  color: string
  year: number
}

export type iCars = iCar[] | []
