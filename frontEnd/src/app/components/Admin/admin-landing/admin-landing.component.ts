import { Component, OnInit } from '@angular/core';
import { Apollo,gql } from 'apollo-angular';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-admin-landing',
  templateUrl: './admin-landing.component.html',
  styleUrls: ['./admin-landing.component.css']
})
export class AdminLandingComponent implements OnInit {

  //LoginName!: String
  username!: string;
  constructor(private apolloClient: Apollo,private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let name = localStorage.getItem("username")
    this.username = name == null ? 'Guest': name
    //this.LoginName = this.activeRoute.snapshot.queryParamMap.get('name')!
    console.log("test on init")
    //console.log(this.LoginName)
  }
  //,{queryParams: {name: this.LoginName}}
  goto(){
    this.router.navigate(['/addList'])
  }
  goto2(){
    this.router.navigate(['/adminListView'])
  }

}
