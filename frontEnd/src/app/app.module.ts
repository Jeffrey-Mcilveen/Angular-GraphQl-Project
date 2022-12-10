import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {MatButtonModule} from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { AdminLandingComponent } from './components/Admin/admin-landing/admin-landing.component';
import { AdminAddListingComponent } from './components/Admin/admin-add-listing/admin-add-listing.component';
import { CustomerLandingComponent } from './components/Customer/customer-landing/customer-landing.component';
import { ViewBookingComponent } from './components/Customer/view-booking/view-booking.component';
import { AdminViewListingComponent } from './components/Admin/admin-view-listing/admin-view-listing.component';
import { ViewListingComponent } from './components/Customer/view-listing/view-listing.component';
import { CreatebookingComponent } from './components/Customer/createbooking/createbooking.component';
import { SearchLandingComponent } from './components/Customer/search-landing/search-landing.component';
import { SearchByCityComponent } from './components/Customer/search-by-city/search-by-city.component';
import { SearchByNameComponent } from './components/Customer/search-by-name/search-by-name.component';
import { SearchBypostalComponent } from './components/Customer/search-bypostal/search-bypostal.component';
import { SearchPostalComponent } from './components/Customer/search-postal/search-postal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    AdminLandingComponent,
    AdminAddListingComponent,
    CustomerLandingComponent,
    ViewBookingComponent,
    AdminViewListingComponent,
    ViewListingComponent,
    CreatebookingComponent,
    SearchLandingComponent,
    SearchByCityComponent,
    SearchByNameComponent,
    SearchBypostalComponent,
    SearchPostalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    GraphQLModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ApolloModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
