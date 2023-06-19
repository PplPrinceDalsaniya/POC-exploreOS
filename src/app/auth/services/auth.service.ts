import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  getGoogleOAuthUrl() {
    const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount';
    const options = {
      redirect_uri: environment.googleOAuthRedirectUrl,
      client_id: environment.googleClientID,
      access_type: "offline",
      response_type: "code",
      prompt: "consent",
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
      ].join(" "),
    }
    const qs = new URLSearchParams(options);
    // console.log(qs.toString());

    return `${rootUrl}?${qs.toString()}`
  }

  public getUserDetails(): any {
    return JSON.parse(sessionStorage.getItem('userDetails') || '');
  }

  public getAccessToken(): any {
    return sessionStorage.getItem('access_token');
  }

  public getRefreshToken(): any {
    return sessionStorage.getItem('refresh_token');
  }

  public getIsAuthenticated(): boolean {
    return JSON.parse(sessionStorage.getItem('isAuthenticated') || 'false');
  }

  public setIsAuthenticated(falg: boolean): void {
    return sessionStorage.setItem('isAuthenticated', JSON.stringify(falg));
  }

  public setUserData(userDetails: any, access_token: string, refresh_token: string, isAuthenticated: boolean): void {
    sessionStorage.setItem('userDetails', JSON.stringify(userDetails));
    sessionStorage.setItem('access_token', access_token);
    sessionStorage.setItem('refresh_token', refresh_token);
    sessionStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
  }

  public logOut(): void {
    sessionStorage.clear();
    this.setIsAuthenticated(false);
  }
}
