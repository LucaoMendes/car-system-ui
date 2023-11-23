import { Component , ViewChild , ElementRef } from '@angular/core';
import { SignupService } from 'src/app/services/signup.service';
import { iCar } from 'src/app/shared/car.model';
import { iUser } from 'src/app/shared/user.model';

@Component({
  selector: 'app-third-phase',
  templateUrl: './third-phase.component.html',
  styleUrls: ['./third-phase.component.css']
})
export class ThirdPhaseComponent {
  signup!: iUser;
  @ViewChild('imageInput') imageInput!: ElementRef;
  loading = false

  constructor(private signupService: SignupService) {}

  ngOnInit() {
    this.signupService.currentSignup.subscribe(signup => this.signup = signup);
  }

  tempCar:iCar = {
    color: '',
    licensePlate: '',
    model: '',
    photo: '',
    year: 0,
  }

  addCar(){
    this.signup.cars = [
      ...this.signup.cars,
      this.tempCar
    ]
    this.tempCar = {
      color: '',
      photo: '',
      licensePlate: '',
      model: '',
      year: 0,
    }

    this.imageInput.nativeElement.value = '';
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    this.loading = true;
    reader.addEventListener('load', (event: any) => {
      this.tempCar.photo = event.target.result;
      this.loading = false;
    });

    reader.readAsDataURL(file);
  }

  checkAbleToAddCar(){
    if(this.loading) return false

    return  this.tempCar.color.length > 0 &&
            this.tempCar.licensePlate.length > 0 &&
            this.tempCar.licensePlate.length <= 8 &&
            this.tempCar.model.length > 0 &&
            String(this.tempCar.year).length == 4
  }
}
