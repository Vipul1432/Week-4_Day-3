import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    // Check if the entered credentials match
    if (this.username == 'admin' && this.password == 'Vipulkr') {
      // login
      this.authService.login();
      this.router.navigate(['/home']);
    } else {
      alert('Invalid credentials');
    }
  }
}
