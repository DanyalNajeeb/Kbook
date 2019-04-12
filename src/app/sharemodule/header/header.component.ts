import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navigateTolistingPage(page){
    if (page=='used') {
      console.log(page);
     this.router.navigate([`/dashboard/used`]);
    }else if (page=='new') {
      console.log(page);
     this.router.navigate([`/dashboard/new`]);
    }else if (page=='donate') {
      console.log(page);
     this.router.navigate([`/dashboard/donate`]);
    }
  
  
  }




  constructor(private router:Router) { }

  ngOnInit() {
  }

}
