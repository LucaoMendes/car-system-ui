import { Component } from '@angular/core';
import { SignupService } from 'src/app/services/signup.service';
import { iUser } from 'src/app/shared/user.model';

@Component({
  selector: 'app-second-phase',
  templateUrl: './second-phase.component.html',
  styleUrls: ['./second-phase.component.css'],
})
export class SecondPhaseComponent {
  signup!: iUser;
  loading = false;
  constructor(private signupService: SignupService) {}

  ngOnInit() {
    this.signupService.currentSignup.subscribe(signup => this.signup = signup);
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    this.loading = true;
    reader.addEventListener('load', (event: any) => {
      this.signup.photo = event.target.result;
      this.loading = false;
    });

    reader.readAsDataURL(file);
  }
}
