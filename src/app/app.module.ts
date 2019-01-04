import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{
  path: "", 
  component: HomeComponent
},
{
  path: "viewdetails", 
  loadChildren: "./viewdetails/viewdetails.module#ViewdetailsModule"
},
{
  path: "about", 
  loadChildren: "./about/about.module#AboutModule"
}];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
