import { Component, Input } from '@angular/core';
import { iCar } from 'src/app/shared/car.model';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent {
  @Input({required: true}) car!: iCar
  @Input({required: true}) modalId!: string
}
