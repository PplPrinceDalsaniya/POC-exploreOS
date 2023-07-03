import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/auth/services/auth.service';
import { googleUser } from 'src/app/auth/models/user.model';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  user!: googleUser;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const params = this.route.snapshot.queryParams;

    if (
      params &&
      params['access_token'] &&
      params['refresh_token'] &&
      params['userObj']
    ) {
      const access_token = params['access_token'];
      const refresh_token = params['refresh_token'];
      const userObj: googleUser = JSON.parse(params['userObj']);

      this.authService.setUserData(userObj, access_token, refresh_token, true);

      this.location.replaceState('/home');
    } else {
      const isAuthenticated = this.authService.getIsAuthenticated();

      if (!isAuthenticated) {
        this.router.navigate(['/login']);
      }
    }

    this.user = this.authService.getUserDetails();
    this.location.replaceState('/home');
  }

  handleLogout() {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }
}
