import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo,gql } from 'apollo-angular';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { map, Observable, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-createbooking',
  templateUrl: './createbooking.component.html',
  styleUrls: ['./createbooking.component.css']
})
export class CreatebookingComponent implements OnInit {

  ListingsOutput = new Observable<any>();

  loginCheck!: Observable<any>;
  LoginName!: String;
  List_ID!: String;
  response:any;
  username!: string;
  
  constructor(private apolloClient: Apollo,private activeRoute: ActivatedRoute, private router: Router) {
   }
   bookingform = new FormGroup({
    // booking_id: new FormControl(),
    booking_start: new FormControl(),
    booking_end: new FormControl()

   })
   

  ngOnInit(): void {
    // this.ListingsOutput = this.apolloClient.watchQuery<any>({
    //   query: this.GET_LISTING
    // }).valueChanges.pipe(
    //   map((resp: any)=>{
    //     console.log(resp.data.getAdminListings)
    //     return resp.data.getAdminListings
    //   })
    // )
    let name = localStorage.getItem("username")
    this.username = name == null ? 'Guest': name
    // this.LoginName = this.activeRoute.snapshot.queryParamMap.get('name')!
    this.List_ID = this.activeRoute.snapshot.queryParamMap.get('list_id')!
  }

  // private GET_LISTING = gql`
  // query {
  //   getAdminListings{
  //     listing_id
  //     listing_title
  //       description
  //       street
  //       city
  //       price
  //       email
  //       username
  //       postal_code
  //   }
  // }
  // `
  //,$booking_id1:String!
  private CREATEBOOKING = gql`
  mutation adduserbooking($listing_id1:String!,
  $booking_start1:String!,$booking_end1:String!,$username1:String!){
    adduserbooking(
    listing_id: $listing_id1
    # booking_id: $booking_id1
    booking_start: $booking_start1
    booking_end: $booking_end1
    username: $username1
    )
    { 
    listing_id
    # booking_id
    booking_date
    booking_start
    booking_end
    username
    }
  }
  `
  onSubmit(input:any){
    let listIN = this.List_ID
    let bookID = this.bookingform.value.booking_id
    let bookstart = this.bookingform.value.booking_start
    let bookend = this.bookingform.value.booking_end
    let inputuser = this.username
    console.log(this.bookingform.value.booking_start)
    this.AddBooking(listIN,bookID,bookstart,bookend,inputuser)
  }

  
  AddBooking(listing_id:any,booking_id:any,booking_start:any,booking_end:any,username:any){
    console.log(listing_id,booking_id,booking_start,booking_end,username)
    this.apolloClient.mutate({
      mutation: this.CREATEBOOKING,
      variables:{
        listing_id1: listing_id,
        booking_id1: booking_id,
        booking_start1:booking_start,
        booking_end1: booking_end,
        username1: username
      }
    }).subscribe(resp=>{
      console.log(resp)
      alert(`Booking added`)
      this.router.navigate(['/customLand'] )
      this.response = `Booking added`
      this.bookingform.reset()
      
    })
  }

}
