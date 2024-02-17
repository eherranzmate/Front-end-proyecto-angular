import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable, catchError, map, of } from 'rxjs';

export const adminGuard: CanActivateFn = (route, state): Observable<boolean> => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const isAdmin :Observable<boolean> = authService.isAdmin().pipe(
    map((permiso) => {
      if(permiso){
        console.log(permiso)
        return true
      }
      router.navigate([''])
      return false
    }),
    catchError((error) => {
      router.navigate([''])
      return of(false);
    })
  )

  return isAdmin

};
