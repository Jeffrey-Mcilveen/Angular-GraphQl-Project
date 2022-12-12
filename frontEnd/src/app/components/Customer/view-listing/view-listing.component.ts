import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo,gql } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-listing',
  templateUrl: './view-listing.component.html',
  styleUrls: ['./view-listing.component.css']
})
export class ViewListingComponent implements OnInit {

  dataList: any[] = []
  ListingsOutput = new Observable<any>();
  username!: string;
  ListID!: String;
  constructor(private apolloClient: Apollo, private getEndPoint: HttpClient, private activeRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    let name = localStorage.getItem("username")
    this.username = name == null ? 'Guest': name
    // this.LoginName = this.activeRoute.snapshot.queryParamMap.get('name')!
    this.ListingsOutput = this.apolloClient.watchQuery<any>({
       query: this.GET_LISTING
     }).valueChanges.pipe(
       map((resp: any)=>{
         console.log(resp.data.getAdminListings)
         return resp.data.getAdminListings
       })
     )
  }
  private get_listID = gql`
    query get_by_listID{
      getlistingbyID(code: String){
        listing_id
        listing_title
        description
        street
        city
        postal_code
        price
        email
    }
    }
  `
  private GET_LISTING = gql`
  query {
    getAdminListings{
      id
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
    getListing(){
      console.log("active")
      this.apolloClient.watchQuery<any>({
        query: this.GET_LISTING
      }).valueChanges.subscribe(resp=>{
        console.log(resp)
      })
    }
    goto(input: String){
      // let input = args
      console.log("input is: " +input)
      // this.apolloClient.watchQuery<any>({
      //   query: this.get_listID,
      //   variables:{
      //     code: input
      //   }
      // }).valueChanges.subscribe(resp =>{
      //   console.log(resp.data.getlistingbyID)
      //   this.ListID = resp.data.getlistingbyID.listing_id
      // })
      this.ListID = input
      this.router.navigate(['/cBooking'],{queryParams: {list_id: this.ListID  }})
    }

}
