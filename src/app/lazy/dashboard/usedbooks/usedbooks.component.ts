import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usedbooks',
  templateUrl: './usedbooks.component.html',
  styleUrls: ['./usedbooks.component.css']
})
export class UsedbooksComponent implements OnInit {
 


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

  }
];

usedBooklist2 = [{
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
  name:'daniyal',
  id:'123456'

}
];
usedBooklist3 = [{
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
  name:'daniya',
  id:'123456'

}
];

navigateTodetailPage(book){
 console.log(book);
 this.router.navigate([`/dashboard/detail/${book.id}`]);
}
navigateTolistingPage(page){
  if (page=='used') {
    console.log(page);
   this.router.navigate([`/dashboard/used`]);
  }else if (page=='new') {
    console.log(page);
   this.router.navigate([`/dashboard/new`]);
  }else if (page=='trend') {
    console.log(page);
   this.router.navigate([`/dashboard/trending`]);
  }


}


curoselprev(data){
  if (data=='used') {
    let element: HTMLElement =  document.getElementsByClassName('carousel-control-prev')[2] as HTMLElement;
 element.click();
  }
  else if (data=='new') {
    let element: HTMLElement =  document.getElementsByClassName('carousel-control-prev')[3] as HTMLElement;
 element.click();
  }else if (data=='trend') {
    let element: HTMLElement =  document.getElementsByClassName('carousel-control-prev')[1] as HTMLElement;
 element.click();
  }

  
}
curoselnext(data){
  if (data=='used') {
    let element: HTMLElement =  document.getElementsByClassName('carousel-control-next')[2] as HTMLElement;
 element.click();
  }
  else if (data=='new') {
    let element: HTMLElement =  document.getElementsByClassName('carousel-control-next')[3] as HTMLElement;
 element.click();
  }else if (data=='trend') {
    let element: HTMLElement =  document.getElementsByClassName('carousel-control-next')[1] as HTMLElement;
 element.click();
  }


 
}
  constructor(private router:Router) { }

  ngOnInit() {
  }

}
