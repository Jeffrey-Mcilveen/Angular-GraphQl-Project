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
//import { SearchBypostalComponent } from './components/Customer/search-bypostal/search-bypostal.component';
import { SearchPostalComponent } from './components/Customer/search-postal/search-postal.component';
import { AuthGuard } from './Guard/auth.guard';
import { LogoutComponent } from './components/logout/logout.component';
import { CustomGuard } from './Guard/custom.guard'


const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'login', component: LoginComponent}, //no loggin required
  {path: 'signUp', component: SignUpComponent},//no loggin required
  {path: 'adminLand', component: AdminLandingComponent, canActivate:[AuthGuard]},
  {path:'addList', component: AdminAddListingComponent,canActivate:[AuthGuard]},
  {path: 'customLand', component: CustomerLandingComponent, canActivate:[CustomGuard]},
  {path: 'adminListView', component: AdminViewListingComponent, canActivate:[AuthGuard]},
  {path: 'listing', component: ViewListingComponent},
  {path:'cBooking',component: CreatebookingComponent,canActivate:[CustomGuard]},
  {path:'vbook',component: ViewBookingComponent, canActivate:[CustomGuard]},
  {path: 'search',component: SearchLandingComponent},//no login required
  {path: 'searchCity', component: SearchByCityComponent},//no login required
  {path: 'searchUser', component: SearchByNameComponent},//no login required
  {path: 'Postal',component: SearchPostalComponent},//no login required
  {path: 'logout',component: LogoutComponent }//no login required
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
