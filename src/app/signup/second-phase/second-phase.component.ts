import { Component } from '@angular/core';
import { SignupService } from 'src/app/services/signup.service';
import { iUser } from 'src/app/shared/user.model';

@Component({
  selector: 'app-second-phase',
  templateUrl: './second-phase.component.html',
  styleUrls: ['./second-phase.component.css']
})
export class SecondPhaseComponent {
  signup!: iUser;
  constructor(private signupService: SignupService) {}

  ngOnInit() {
    this.signupService.currentSignup.subscribe(signup => this.signup = signup);
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.signup.photo = event.target.result;
    });

    reader.readAsDataURL(file);
  }
}
