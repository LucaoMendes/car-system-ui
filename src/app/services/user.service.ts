import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { iUser } from '../shared/user.model'
import { Utils } from '../shared/utils'
import { iLogin } from '../login/model/login.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loggedUser = new BehaviorSubject<iUser>({
    firstName: '',
    lastName: '',
    email: '',
    birthday: '',
    login: '',
    password: '',
    phone: '',
    cars: []
  })
  current = this.loggedUser.asObservable()

  async login({username,password}: iLogin, forceError = false) {
    const randomMs = Math.floor(Math.random() * 5000)
    const probabilityError = Math.floor(Math.random() * 100)

    await Utils.delay(randomMs)

    if (probabilityError < 10 || forceError) {
      throw new Error('Server error on login')
    }

    this.loggedUser.next({
      firstName: 'Lucas',
      lastName: 'Mendes',
      email: 'lucas.mendes@gmail.com',
      birthday: '1999-06-24',
      login: username,
      password,
      cars: [
      ],
      phone: '81912345678'
    })
  }

  async signup(user: iUser, forceError = false) {
    const randomMs = Math.floor(Math.random() * 5000)
    const probabilityError = Math.floor(Math.random() * 100)

    await Utils.delay(randomMs)

    if (probabilityError < 10 || forceError) {
      throw new Error('Server error on login')
    }

    this.loggedUser.next(user)
  }
}
