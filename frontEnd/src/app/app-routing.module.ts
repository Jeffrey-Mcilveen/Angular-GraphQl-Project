import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
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

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'adminLand', component: AdminLandingComponent},
  {path:'addList', component: AdminAddListingComponent},
  {path: 'customLand', component: CustomerLandingComponent},
  {path: 'adminListView', component: AdminViewListingComponent},
  {path: 'listing', component: ViewListingComponent},
  {path:'cBooking',component: CreatebookingComponent},
  {path:'vbook',component: ViewBookingComponent},
  {path: 'search',component: SearchLandingComponent},
  {path: 'searchCity', component: SearchByCityComponent},
  {path: 'searchUser', component: SearchByNameComponent},
  {path: 'searchPostal;', component: SearchBypostalComponent},
  {path: 'Postal',component: SearchPostalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
