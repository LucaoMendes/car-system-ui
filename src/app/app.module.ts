import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'
import { LoginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component'
import { FirstPhaseComponent } from './signup/first-phase/first-phase.component'
import { SecondPhaseComponent } from './signup/second-phase/second-phase.component'
import { SignupPhaseComponent } from './signup/signup-phase/signup-phase.component'
import { ThirdPhaseComponent } from './signup/third-phase/third-phase.component'
import { LoadingComponent } from './shared/components/loading/loading.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarsTableComponent } from './dashboard/components/cars-table/cars-table.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { DeleteModalComponent } from './dashboard/components/delete-modal/delete-modal.component';

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
    DashboardComponent,
    CarsTableComponent,
    NavbarComponent,
    DeleteModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
