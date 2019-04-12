import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  pageid: any;
  usedBooklist1 = [{
    name:'daniyal',
    id:'123'

  },
  {
    name:'daniyalkhan',
    id:'1234'

  },
  {
    name:'daniyalnajeeb',
    id:'12345'

  },{
    name:'daniy',
    id:'123456'

  },
  {
    name:'daniy',
    id:'123456'

  },{
    name:'daniy',
    id:'123456'

  },{
    name:'daniy',
    id:'123456'

  },{
    name:'daniy',
    id:'123456'

  },{
    name:'daniy',
    id:'123456'

  },{
    name:'daniy',
    id:'123456'

  },{
    name:'daniy',
    id:'123456'

  },{
    name:'daniy',
    id:'123456'

  },{
    name:'daniy',
    id:'123456'

  },{
    name:'daniy',
    id:'123456'

  },{
    name:'daniy',
    id:'123456'

  },{
    name:'daniy',
    id:'123456'

  },{
    name:'daniy',
    id:'123456'

  },{
    name:'daniy',
    id:'123456'

  },{
    name:'daniy',
    id:'123456'

  },{
    name:'daniy',
    id:'123456'

  },{
    name:'daniy',
    id:'123456'

  },{
    name:'daniy',
    id:'123456'

  },{
    name:'daniy',
    id:'123456'

  }
];



navigateTodetailPage(book){
  console.log(book);
  this.router.navigate([`/dashboard/detail/${book.id}`]);
 }

  constructor(private router:Router,private activatedRoute: ActivatedRoute) {
    console.log("i am here");
    this.activatedRoute.params.subscribe(params => {
      console.log("i am here",params);
       this.pageid = params['page'];
       
      console.log(this.pageid); // Print the parameter to the console. 
  });
    
   }

  ngOnInit() {
  }

}
