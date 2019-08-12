import { Router } from '@angular/router'
import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { User } from './../../interfaces/user'
import { UserService } from './../../../services/user.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  user$: Observable<User>

  constructor(
    private user: UserService,
    private router: Router) {
    this.user$ = this.user.getUser()
  }

  logout() {
    this.user.logout()
    this.router.navigate([''])
  }
}
