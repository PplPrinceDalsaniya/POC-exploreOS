import { Injectable } from '@angular/core';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';

@Injectable()
export class AuthService {
  constructor(private socialAuthService: SocialAuthService) {}

  user!: SocialUser;

  getAuthState() {
    return this.socialAuthService.authState;
  }

  setUser(user: SocialUser) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }

  logoutUser() {
    this.socialAuthService.signOut();
  }
}
