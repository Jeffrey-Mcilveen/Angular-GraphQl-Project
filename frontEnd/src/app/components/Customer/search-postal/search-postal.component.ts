import { Component, OnInit } from '@angular/core';
import { Apollo,gql } from 'apollo-angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-postal',
  templateUrl: './search-postal.component.html',
  styleUrls: ['./search-postal.component.css']
})
export class SearchPostalComponent implements OnInit {

  LoginName!: String;
  errorsPostal: any
  postalOutput : any;
  
  constructor(private apolloClient: Apollo, private activeRoute: ActivatedRoute, private router: Router) {
    
   }


  getPostalForm = new FormGroup({
    postal_code: new FormControl()
  })

  ngOnInit(): void {
    this.LoginName = this.activeRoute.snapshot.queryParamMap.get('name')!
    console.log(this.LoginName)
  }

  private POSTALLISTING = gql`
  query getPostalCODE($code: String!){
  getAdminlistingsbyPostalCode(postal_code: $code){
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
    getPostal(input: any){
      console.log(input)
      this.errorsPostal = null
      this.postalOutput = null
      console.log("getPostal() input is "+ input)
      this.apolloClient.watchQuery<any>({
        query: this.POSTALLISTING,
        variables:{
          code: input
        }
      }).valueChanges.subscribe(resp =>{
        console.log(resp.data.getAdminlistingsbyPostalCode)
        if(resp.data.getAdminlistingsbyPostalCode.length == 0){
          this.errorsPostal = "NO Data found"
        }else{
          console.log(resp)
          this.postalOutput = resp.data.getAdminlistingsbyPostalCode
        } 
      })
    }

}
