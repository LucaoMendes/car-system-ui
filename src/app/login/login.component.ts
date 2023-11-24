import { Component } from '@angular/core'
import { eLoginMessageStatus, iLogin } from './model/login.model'
import { UserService } from '../services/user.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loading = false

  message = undefined
  messageStatus: eLoginMessageStatus = eLoginMessageStatus.INFO

  login:iLogin = {
    username: '',
    password: ''
  }

  constructor(
    private userService: UserService,
    private router: Router
  ){ }


  onSubmitLogin(){
    this.loading = true
    this.userService.login(this.login)
      .then(() => {
        this.loading = false
        this.router.navigate(['/dashboard'])
      })
      .catch(err => {
        this.message = err.message
        this.messageStatus = eLoginMessageStatus.ERROR
      })
      .finally(() => this.loading = false)
  }

  ableToSendLogin(){
    return  this.login.username !== '' &&
            this.login.password !== '' &&
            this.login.username.length >= 3 &&
            this.login.password.length >= 5
  }

  getMessageClass(){
    switch (this.messageStatus) {
      case eLoginMessageStatus.ERROR:
        return 'text-red-500'
      case eLoginMessageStatus.INFO:
        return 'text-gray-400'
      case eLoginMessageStatus.WARNING:
        return 'text-yellow-500'
    }
  }
}
