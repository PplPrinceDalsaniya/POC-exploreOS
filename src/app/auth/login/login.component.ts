import { Component, OnInit } from '@angular/core';
import { SocialUser } from "@abacritt/angularx-social-login";
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user!: SocialUser;
  loggedIn!: boolean;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.getAuthState().subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      this.authService.setUser(this.user);
      console.log(this.user);

      if (this.user != null) {
        this.router.navigateByUrl('/');
      } else {
        this.router.navigateByUrl('/login');
      }
    });
  }

}
