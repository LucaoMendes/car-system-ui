import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { iUser } from '../shared/user.model'

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private signupSource = new BehaviorSubject<iUser>({
    firstName: '',
    lastName: '',
    email: '',
    birthday: '',
    login: '',
    password: '',
    phone: '',
    cars: []
  })
  currentSignup = this.signupSource.asObservable()

  changeSignup(signup: iUser) {
    this.signupSource.next(signup)
  }
}
