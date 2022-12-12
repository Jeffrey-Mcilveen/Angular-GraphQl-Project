import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router ,RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomGuard implements CanActivate {


  constructor(private router: Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    

      let url = state.url
      let isValidCustomer = localStorage.getItem("isValidCustomer")

      if(isValidCustomer !=null && isValidCustomer == 'true'){
        if(url == '/login'){
          //If user already logged In
          return this.router.navigate(['/customLand'])
        }else{
          //For all secure URLs
          return true;
        }
      }else{
        //User required to login
        return this.router.navigate(['/logout'])
      }

  }
  
}
