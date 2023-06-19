import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  googleLoginUrl: string;

  constructor(private authService: AuthService) {
    this.googleLoginUrl = authService.getGoogleOAuthUrl();
  }

  ngOnInit(): void {}
}
