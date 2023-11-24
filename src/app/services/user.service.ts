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
    await this.randomRun(forceError)

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

    await this.randomRun(forceError)
    this.loggedUser.next(user)
  }

  generateRandom(){
    const crypto = window.crypto || window.Crypto;
    const array = new Uint32Array(1);
    return crypto.getRandomValues(array)[0] / 4294967295;
  }

  async randomRun(forceError: boolean){
    const randomMs = Math.floor(this.generateRandom() * 5000)
    const probabilityError = Math.floor( this.generateRandom() * 100 )

    await Utils.delay(randomMs)

    if (probabilityError < 10 || forceError) {
      throw new Error('Server error on login')
    }
  }
}
