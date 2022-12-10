import { Component, OnInit } from '@angular/core';
import { Apollo,gql } from 'apollo-angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-landing',
  templateUrl: './search-landing.component.html',
  styleUrls: ['./search-landing.component.css']
})
export class SearchLandingComponent implements OnInit {

  constructor(private apolloClient: Apollo,private activeRoute: ActivatedRoute, private router: Router) { }
  LoginName!: String
  ngOnInit(): void {
    this.LoginName = this.activeRoute.snapshot.queryParamMap.get('name')!
    console.log(this.LoginName)
    
  }
  goto(){
    this.router.navigate(['/searchCity'],{queryParams: {name: this.LoginName}})
  }
  goto2(){
    this.router.navigate(['/searchUser'],{queryParams: {name: this.LoginName}})
  }
  goto3(){
    this.router.navigate(['/Postal'],{queryParams: {name: this.LoginName}})
  }

}
