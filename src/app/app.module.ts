import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FirstPhaseComponent } from './signup/first-phase/first-phase.component';
import { SecondPhaseComponent } from './signup/second-phase/second-phase.component';
import { SignupPhaseComponent } from './signup/signup-phase/signup-phase.component';
import { ThirdPhaseComponent } from './signup/third-phase/third-phase.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoadingComponent } from './shared/components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    FirstPhaseComponent,
    SecondPhaseComponent,
    SignupPhaseComponent,
    ThirdPhaseComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
