import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo,gql } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-view-listing',
  templateUrl: './admin-view-listing.component.html',
  styleUrls: ['./admin-view-listing.component.css']
})
export class AdminViewListingComponent implements OnInit {

  dataList: any[] = []
  ListingsOutput = new Observable<any>();
  username!: any;
  constructor(private apolloClient: Apollo, private getEndPoint: HttpClient, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let name = localStorage.getItem("username")
    this.username = name == null ? 'Guest': name
    this.ListingsOutput = this.apolloClient.watchQuery<any>({
       query: this.GET_LISTING
     }).valueChanges.pipe(
       map((resp: any)=>{
         console.log(resp.data.getAdminListings)
         return resp.data.getAdminListings
       })
     )
  }
  private GET_LISTING = gql`
  query {
    getAdminListings{
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
        // variables:{
        //   listing_title,
        //   description,
        //   street,
        //   city,
        //   price,
        //   email,
        //   username,
        //   postal_code,
        // }
      }).valueChanges.subscribe(resp=>{
        console.log(resp)
      })
    }

}
