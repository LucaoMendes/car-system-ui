import { Component } from '@angular/core';
import { iCar } from 'src/app/shared/car.model';

@Component({
  selector: 'app-cars-table',
  templateUrl: './cars-table.component.html',
  styleUrls: ['./cars-table.component.css']
})
export class CarsTableComponent {
  car: iCar = {
    color: 'blue',
    id: 1,
    model: 'Tesla',
    licensePlate: 'ABC123',
    year: 2021,
    photo: 'https://www.tesla.com/xNVh4yUEc3B9/04_Desktop.jpg'
  }

  getDeleteModal(car: iCar){
    return `delete-modal-${car.id}`
  }
}
