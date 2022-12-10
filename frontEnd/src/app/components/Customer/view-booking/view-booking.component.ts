import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo,gql } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {

  loginCheck!: Observable<any>;
  LoginName!: String;
  Datetest!: any
  BookingOutput = new Observable<any>();
  constructor(private apolloClient: Apollo, private getEndPoint: HttpClient,private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.LoginName = this.activeRoute.snapshot.queryParamMap.get('name')!

    this.BookingOutput = this.apolloClient.watchQuery<any>({
      query: this.GETBOOKING
    }).valueChanges.pipe(
      map((resp:any)=>{
        console.log(resp.data.getuserbooking)
        return resp.data.getuserbooking
      })
    )
  }
  DateAjustor(input: any){
    let inputTY = parseInt(input)
    const output = new Date(inputTY).toString()
    return output
  }
  private GETBOOKING = gql`
  query{
    getuserbooking{
    listing_id
    # booking_id
    booking_date
    booking_start
    # booking_id
    booking_end
    username
  }
  }
  `
}

