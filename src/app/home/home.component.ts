import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user!: SocialUser;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.user = this.authService.getUser();
  }

  handleLogout() {
    console.log(this.authService.logoutUser());
  }
}
