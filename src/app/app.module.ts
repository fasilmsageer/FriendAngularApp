import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { RouterComponent } from './router/router.component';
import { RouterModule } from '@angular/router';

const myRoute=[
  {
    path:"",
    component:AddFriendComponent
  },
  {
    path:"view",
    component:ViewAllComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddFriendComponent,
    ViewAllComponent,
    RouterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
