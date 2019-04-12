import {BrowserModule} from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {TransferHttpCacheModule} from '@nguniversal/common';
import { AboutusComponent } from './home/aboutus/aboutus.component';
// import { AdminComponent } from './admin/admin.component';
// import { AboutusComponent } from './aboutus/aboutus.component';

import {LazyComponent} from './lazy/lazy.component';
import { ShareModule } from './sharemodule/share.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LazyComponent,
    AboutusComponent  
  ],
  imports: [
    ShareModule,
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      { path: 'aboutus', component: AboutusComponent },
      // { path: 'contact',      component: ContactComponent },
      // {path: 'admin',      component: AdminComponent },
      
  { path: 'dashboard',component:LazyComponent, loadChildren: './lazy/lazy.module#LazyModule'},
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: '**', component:LazyComponent,loadChildren: './lazy/lazy.module#LazyModule'}
    ]),
    TransferHttpCacheModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
