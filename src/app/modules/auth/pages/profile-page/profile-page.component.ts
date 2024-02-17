import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {
  
  constructor(private authService: AuthService, private router: Router) {}
  
  logout() {
    
    sessionStorage.removeItem('token-app');

    this.router.navigate(['/']);
  }

}
