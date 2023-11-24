import { Component , ViewChild , ElementRef, OnInit } from '@angular/core'
import { SignupService } from 'src/app/services/signup.service'
import { iCar } from 'src/app/shared/car.model'
import { iUser } from 'src/app/shared/user.model'

@Component({
  selector: 'app-third-phase',
  templateUrl: './third-phase.component.html',
  styleUrls: ['./third-phase.component.css']
})
export class ThirdPhaseComponent implements OnInit {
  signup!: iUser
  @ViewChild('imageInput') imageInput!: ElementRef
  loading = false
  licensePlateInvalid = false

  constructor(private signupService: SignupService) {}

  ngOnInit() {
    this.signupService.currentSignup.subscribe(signup => this.signup = signup)
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

    this.imageInput.nativeElement.value = ''
  }

  processFile(imageInput: HTMLInputElement) {
    const file: File | null = imageInput.files ? imageInput?.files[0] : null
    if (!file) return

    const reader = new FileReader()

    this.loading = true
    reader.addEventListener('load', (event: ProgressEvent<FileReader>) => {
      this.tempCar.photo = String(event?.target?.result)
      this.loading = false
    })

    reader.readAsDataURL(file)
  }

  checkAbleToAddCar(){
    if(this.loading) return false

    return  this.tempCar.color.length > 0 &&
            this.tempCar.licensePlate.length > 0 &&
            this.tempCar.licensePlate.length <= 8 &&
            this.tempCar.model.length > 0 &&
            String(this.tempCar.year).length == 4
  }

  onChangeYear(value: string){
    //remove non numeric characters
    value = value.replace(/\D/g,'')
    this.tempCar.year = Number(value)
  }

  onChangeLicensePlate(event: any) {
    this.tempCar.licensePlate = this.tempCar.licensePlate.toUpperCase()

    const firstMask = /^([A-Z]{3})(\d{4})$/
    const secondMask = /^([A-Z]{3}\d{1}[A-Z]{1}\d{2})$/
    const firstMaskFinal = /^([A-Z]{3}-\d{4})$/

    if (firstMaskFinal.test(this.tempCar.licensePlate) || secondMask.test(this.tempCar.licensePlate)) {
      // Se já estiver no formato final ou corresponder à segunda máscara, não faça nada
      event.target.value = this.tempCar.licensePlate
      return
    }

    if (firstMask.test(this.tempCar.licensePlate)) {
      // Se corresponder à primeira máscara, adicione o hífen no meio
      this.tempCar.licensePlate = this.tempCar.licensePlate.replace(firstMask, '$1-$2')
    }else if (this.tempCar.licensePlate.length >= 7 && secondMask.test(this.tempCar.licensePlate.substring(0, 7))) {
      this.tempCar.licensePlate = this.tempCar.licensePlate.substring(0, 7)
    }else if (this.tempCar.licensePlate.length >= 8 && firstMaskFinal.test(this.tempCar.licensePlate.substring(0, 8))) {
      this.tempCar.licensePlate = this.tempCar.licensePlate.substring(0, 8)
    }else{
      // Se não corresponder à primeira máscara nem a segunda, remova os caracteres não correspondentes
      this.tempCar.licensePlate = this.tempCar.licensePlate.substring(0, 8)
      this.licensePlateInvalid = true
    }


    event.target.value = this.tempCar.licensePlate
    console.log('chegou ao fim')

  }
}
