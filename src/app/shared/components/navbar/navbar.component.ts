import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { iUser } from '../../user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  user!: iUser
  constructor(
    private userService: UserService,
    private router: Router
  ){
    this.userService.current.subscribe(user => this.user = user)
  }

  checkRouteToShowNavbar(){
    console.log(this.router.url)
    return this.router.url !== '/' && this.router.url !== '/signup'
  }

  checkIsCurrentRoute(route: string){
    return this.router.url === route
  }
}
