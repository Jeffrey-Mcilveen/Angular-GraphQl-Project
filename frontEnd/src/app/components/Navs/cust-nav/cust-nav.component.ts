import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-cust-nav',
  templateUrl: './cust-nav.component.html',
  styleUrls: ['./cust-nav.component.css']
})
export class CustNavComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  logOUT(){
    this.router.navigate(['/logout'])
  }
  gotobooking(){
    this.router.navigate(['/vbook'])
  }
  gotoCreate(){
    this.router.navigate(['/listing'])
  }
  gohome(){
    this.router.navigate(['/customLand'])
  }
  searchList(){
    this.router.navigate(['/search'])
  }
}
