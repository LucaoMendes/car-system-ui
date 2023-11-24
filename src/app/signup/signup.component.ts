import { Component } from '@angular/core';
import { iUser } from '../shared/user.model';
import { SignupService } from '../services/signup.service';
import { SignupPhase } from './signup-phase/signup-phase.enum';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signUpPhase = SignupPhase.FIRST
  loading = false

  constructor(
      private signupService: SignupService,
      private userService: UserService,
      private router: Router
    ) {
    this.signupService.currentSignup.subscribe(signup => {
      this.signup = signup;
    });
  }

  signup:iUser = {
    firstName: '',
    photo: '',
    lastName: '',
    email: '',
    birthday: '',
    login: '',
    password: '',
    phone: '',
    cars: []
  }

  nextPhase() {
    this.loading = true;
    this.updateSignup();

    if(this.signUpPhase === SignupPhase.THIRD){
      this.userService.signup(this.signup)
        .then(()=> this.router.navigate(['/dashboard']))
        .catch(()=> {
          alert('Erro ao cadastrar usuário');
        })
        .finally(()=> this.loading = false);
        return
    }

    this.signUpPhase =  this.signUpPhase === SignupPhase.FIRST ? SignupPhase.SECOND :
                        this.signUpPhase === SignupPhase.SECOND ? SignupPhase.THIRD : SignupPhase.FIRST;

    this.loading = false;
  }

  ableToNextPhase(){
    return  (this.signUpPhase === SignupPhase.FIRST &&
              (
                this.signup.firstName.length >= 2 &&
                this.signup.lastName.length >= 2 &&
                this.signup.email.length >= 2 &&
                this.signup.birthday.length >= 2 &&
                this.signup.phone.length >= 2
              )
            ) ||
            (this.signUpPhase === SignupPhase.SECOND &&
              (
                this.signup.login.length >= 2 &&
                this.signup.password.length >= 2
              )
            ) ||
            (this.signUpPhase === SignupPhase.THIRD &&
              (
                this.signup.cars.length > 0
              )
            )
  }

  previousPhase(){
    this.updateSignup();

    if(this.signUpPhase === SignupPhase.FIRST)
      return

    if(this.signUpPhase === SignupPhase.THIRD)
      this.signUpPhase = SignupPhase.SECOND
    else
      this.signUpPhase = SignupPhase.FIRST
  }

  getPhaseSubmitBtnText(){
    return this.signUpPhase != SignupPhase.THIRD ? 'Próximo' : 'Enviar';
  }

  updateSignup() {
    this.signupService.changeSignup(this.signup);
  }


}
