import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.css']
})
export class DetailpageComponent implements OnInit {
  idBook: any;

  constructor(private activatedRoute: ActivatedRoute) {
console.log("i am here");
    this.activatedRoute.params.subscribe(params => {
      console.log("i am here",params);
       this.idBook = params['id'];
       
      console.log(this.idBook); // Print the parameter to the console. 
  });
   }

  ngOnInit() {
  }

}
