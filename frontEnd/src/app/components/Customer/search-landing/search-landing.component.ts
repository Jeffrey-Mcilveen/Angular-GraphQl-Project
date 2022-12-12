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
  
  username!: string;
  // LoginName!: String

  ngOnInit(): void {
    let name = localStorage.getItem("username")
    this.username = name == null ? 'Guest': name
    // this.LoginName = this.activeRoute.snapshot.queryParamMap.get('name')!
    // console.log(this.LoginName)
    
  }
  goto(){
    this.router.navigate(['/searchCity'])
  }
  goto2(){
    this.router.navigate(['/searchUser'])
  }
  goto3(){
    this.router.navigate(['/Postal'])
  }

}
