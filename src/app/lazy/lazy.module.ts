import {NgModule, Component} from '@angular/core';
import {RouterModule} from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SliderComponent } from './dashboard/slider/slider.component';
// import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
import {ShareModule} from '../sharemodule/share.module';
import { BsModalService, BsModalRef, ModalModule } from 'ngx-bootstrap/modal';

// import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap';
import { PaginationModule } from 'ngx-bootstrap/pagination';

// import {SliderComponent} from './slider/slider.component'
// import { from } from 'rxjs';
import { ListingComponent } from './listing/listing.component';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { UsedbooksComponent } from './dashboard/usedbooks/usedbooks.component';


@Component({
  selector: 'app-lazy-view',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazycomponent.css']
  
})
export class LazyComponent {}

@NgModule({
  declarations: [
    LazyComponent,
    SliderComponent,
    DashboardComponent,
    DetailpageComponent,
    ListingComponent,
    UsedbooksComponent,
    
  
  ],
  imports: [
    ShareModule,
    RouterModule.forChild([


      {
        path: 'detail/:id', component: DetailpageComponent
    },
        {
            path: ':page', component: ListingComponent
        },
       
        { path: '', component: DashboardComponent},
    
    ]
    
    ),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    CommonModule,
    // NgtUniversalModule,
    ShareModule,
     
     TransferHttpCacheModule,
    HttpClientModule,
  ],
  providers:[
    BsModalService
  ]
})
export class LazyModule {

}
