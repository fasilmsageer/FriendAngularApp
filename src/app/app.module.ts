import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { RouterComponent } from './router/router.component';
import { RouterModule } from '@angular/router';
import { SearchfriendComponent } from './searchfriend/searchfriend.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const myRoute=[
  {
    path:"",
    component:AddFriendComponent
  },
  {
    path:"view",
    component:ViewAllComponent
  },
  {
    path:"search",
    component:SearchfriendComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddFriendComponent,
    ViewAllComponent,
    RouterComponent,
    SearchfriendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
