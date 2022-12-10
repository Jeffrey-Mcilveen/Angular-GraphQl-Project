import { Component, OnInit } from '@angular/core';
import { Apollo,gql } from 'apollo-angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-search-by-city',
  templateUrl: './search-by-city.component.html',
  styleUrls: ['./search-by-city.component.css']
})
export class SearchByCityComponent implements OnInit {

  cityOutPut: any
  errorsCity: any
  LoginName!: String
  getCityForm = new FormGroup({  
    cities: new FormControl()
  })

  constructor(private apolloClient: Apollo, private activeRoute: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.LoginName = this.activeRoute.snapshot.queryParamMap.get('name')!
    console.log(this.LoginName)
  }

  private CITYLISTING = gql`
  query Getlisting($cityinput: String!){
    getAdminlistingsbyCity(city: $cityinput){
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
  
    getCity(input: String){
      this.errorsCity = ""
      this.cityOutPut = null
      console.log("getCity() input is " + input)
      this.apolloClient.watchQuery<any>({
        query: this.CITYLISTING,
        variables:{
          cityinput: input
        }
      }).valueChanges.subscribe(resp =>{
        console.log(resp.data.getAdminlistingsbyCity)
        if(resp.data.getAdminlistingsbyCity.length == 0){
          this.errorsCity = "NO Data found"
        }else{
          this.cityOutPut = resp.data.getAdminlistingsbyCity
        }
        
      })
    }
    onSubmitCity(input: any){
      console.log(input.cities)
      this.apolloClient.watchQuery<any>({
        query: this.CITYLISTING,
        variables:{
          cityinput: input.cities
        }
      }).valueChanges.subscribe(resp =>{
        console.log(resp.data.getAdminlistingsbyCity)
        if(resp.data.getAdminlistingsbyCity.length == 0){
          this.errorsCity = "NO Data found"
        }else{
          this.cityOutPut = resp.data.getAdminlistingsbyCity
        }
        
      })
  
    }
}
