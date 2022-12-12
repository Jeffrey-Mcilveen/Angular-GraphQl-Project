import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let url = state.url
    //let isValidUser = localStorage.getItem("isValidUser")
    let isValidAdmin = localStorage.getItem("isValidAdmin")
    // let AdminKey = localStorage.getItem("isValidUser")
    // let CustomerKey = localStorage.getItem("isValidUser")
    

    if(isValidAdmin !=null && isValidAdmin == 'true'){
      if(url == '/login'){
        //If user already logged In
        return this.router.navigate(['/adminLand'])
      }else{
        //For all secure URLs
        return true;
      }
    }else{
      //User required to login
      console.log("invaild route navigation logging out")
      return this.router.navigate(['/logout'])
    }

  }
  
}
