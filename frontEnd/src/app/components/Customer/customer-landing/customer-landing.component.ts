import { Component, OnInit } from '@angular/core';
import { Apollo,gql } from 'apollo-angular';
import { ActivatedRoute, Router } from '@angular/router';
import { CustNavComponent } from '../../Navs/cust-nav/cust-nav.component';

@Component({
  selector: 'app-customer-landing',
  templateUrl: './customer-landing.component.html',
  styleUrls: ['./customer-landing.component.css']
})
export class CustomerLandingComponent implements OnInit {
  
  LoginName!: String
  username!: string;
  constructor(private apolloClient: Apollo,private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let name = localStorage.getItem("username")
    this.username = name == null ? 'Guest': name
    // console.log(this.username)
    // this.LoginName = this.activeRoute.snapshot.queryParamMap.get('name')!
    // console.log("test on init")
    // console.log(this.LoginName)
    
  }
  goto(){
    this.router.navigate(['/listing'],{queryParams: {name: this.LoginName}})
  }
  goto2(){
    this.router.navigate(['/vbook'],{queryParams: {name: this.LoginName}})
  }
  goto3(){
    this.router.navigate(['/search'],{queryParams: {name: this.LoginName}})
  }

}
