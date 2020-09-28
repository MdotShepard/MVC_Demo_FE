import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from '../app/app.component';
import {DemoComponent} from '../app/demo/demo.component';


const routes: Routes = [
  { path:'home', component:AppComponent },
  { path:'demo', component:DemoComponent },
  { path:'**', component:DemoComponent },
  { path:'', component:DemoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
