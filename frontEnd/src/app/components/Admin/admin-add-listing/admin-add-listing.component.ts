import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Apollo,gql } from 'apollo-angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-add-listing',
  templateUrl: './admin-add-listing.component.html',
  styleUrls: ['./admin-add-listing.component.css']
})
export class AdminAddListingComponent implements OnInit {

  response:any;
  username!: string;

  constructor(private apolloClient: Apollo,private activeRoute: ActivatedRoute, private router: Router) { }

  listingForm = new FormGroup({
    // listing_id: new FormControl(),
    listing_title: new FormControl(),
    description: new FormControl(),
    street: new FormControl(),
    city: new FormControl(),
    postal_code: new FormControl(),
    price: new FormControl(),
    email: new FormControl(),
  })
//$List_id: String!,
  private NEWLISTING = gql`
  mutation addAdminlisting($list_title:String!, $descrip: String!, $Streetinput: String!,
   $cityinput: String!, $postal__code: String!, $prices: Float!, $E_mail: String!, $userN: String! ){
    addAdminlisting(
    # listing_id: $List_id
    listing_title: $list_title
    description:  $descrip
    street: $Streetinput
    city : $cityinput
    postal_code: $postal__code
    price: $prices
    email: $E_mail
    username: $userN
  ){
    # listing_id
    listing_title
    description
    street
    city
    postal_code
    price
    email
    username
  } 
  } `


  ngOnInit(): void {
    let name = localStorage.getItem("username")
    this.username = name == null ? 'Guest': name
  }
  

  onSubmit(input: any){
    console.log(input)
  


    this.apolloClient.mutate({
      mutation: this.NEWLISTING,
      variables:{
        list_title: input.listing_title,
        descrip: input.description,
        Streetinput: input.street,
        cityinput: input.city,
        postal__code: input.postal_code,
        prices: input.price,
        E_mail: input.email,
        userN: this.username
      }
    }).subscribe(resp=>{
      console.log(resp)
      alert(`Listing ${input.listing_title} added`)
      this.router.navigate(['/adminLand'] )
      this.response = `Listing ${input.listing_title} added`
      this.listingForm.reset()
      console.log("listing submitted")
    }, err => this.response = `Listing was not added`
    )
    // this.ADDListing(input.listing_id,input.listing_title,input.description
    //   ,input.street,input.city,input.postal_code,
    //   input.price,input.email,this.LoginName)
      console.log("should reset")
      this.listingForm.reset() 
  }

}
