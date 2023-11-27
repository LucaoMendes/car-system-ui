import { Component } from '@angular/core'
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { iUser } from '../shared/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  user!: iUser

  constructor(
    private userService: UserService,
    private router: Router
  ){
    this.userService.current.subscribe(user => this.user = user)
  }

  isOnTableRoute(){
    return this.router.url === '/dashboard/table'
  }
}
