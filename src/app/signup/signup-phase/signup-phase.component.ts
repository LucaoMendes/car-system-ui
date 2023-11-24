import { Component , Input } from '@angular/core'
import { SignupPhase } from './signup-phase.enum'

@Component({
  selector: 'app-signup-phase',
  templateUrl: './signup-phase.component.html',
  styleUrls: ['./signup-phase.component.css']
})
export class SignupPhaseComponent {

  @Input({ required: true })
  signupPhase: SignupPhase = SignupPhase.SECOND

  changePhase(){
    alert(this.signupPhase)
    this.signupPhase = this.signupPhase === SignupPhase.FIRST ? SignupPhase.SECOND : SignupPhase.FIRST
  }
}
