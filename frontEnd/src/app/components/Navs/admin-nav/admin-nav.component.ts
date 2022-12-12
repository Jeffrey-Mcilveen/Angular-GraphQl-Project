import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  logOUT(){
    this.router.navigate(['/logout'])
  }
  gotoList(){
    this.router.navigate(['/adminListView'])
  }
  gotoAdd(){
    this.router.navigate(['/addList'])
  }
  gohome(){
    this.router.navigate(['/adminLand'])
  }

}
