import { Component, OnInit } from '@angular/core';
import { Apollo,gql } from 'apollo-angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrls: ['./search-by-name.component.css']
})
export class SearchByNameComponent implements OnInit {

  LoginName!: String
  errorsUser: any
  userOutput: any

  getUsernameForm = new FormGroup({
    username: new FormControl()
  })

  constructor(private apolloClient: Apollo, private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.LoginName = this.activeRoute.snapshot.queryParamMap.get('name')!
    console.log(this.LoginName)
  }
  private USERLISTING = gql`
  query getbyuser($userIN: String!){
  getAdminlistingsbyUsername(userName:$userIN){
        listing_title
        description
        street
        city
        price
        email
        username
    		postal_code
  }
}
  `

  getUsername(input: any){
    console.log(input)
    this.errorsUser = null
    this.userOutput = null
    console.log("getUsername() input is "+ input)
    this.apolloClient.watchQuery<any>({
      query: this.USERLISTING,
      variables:{
        userIN: input
      }
    }).valueChanges.subscribe(resp =>{
      console.log(resp.data.getAdminlistingsbyUsername)
      if(resp.data.getAdminlistingsbyUsername.length == 0){
        this.errorsUser = "NO Data found"
      }else{
        console.log(resp)
        this.userOutput = resp.data.getAdminlistingsbyUsername
      }
      
    })
  }

}
