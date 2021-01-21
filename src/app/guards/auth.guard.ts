import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {


  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.auth.authenticated()) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  
  }
 
}
