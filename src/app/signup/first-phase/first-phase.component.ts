import { Component } from '@angular/core';
import { SignupService } from 'src/app/services/signup.service';
import { iUser } from 'src/app/shared/user.model';

@Component({
  selector: 'app-first-phase',
  templateUrl: './first-phase.component.html',
  styleUrls: ['./first-phase.component.css']
})

export class FirstPhaseComponent {
  signup!: iUser;

  constructor(private signupService: SignupService) {}

  ngOnInit() {
    this.signupService.currentSignup.subscribe(signup => this.signup = signup);
  }

  onChange(){
    this.signupService.changeSignup(this.signup);
  }
}
