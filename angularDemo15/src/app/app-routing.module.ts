import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { OtherComponent } from './components/other/other.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:'user',component:UserComponent
  },
  {
    path:'other',component:OtherComponent
  },
  {
    path:'form',component:FormComponent
  },
  {
    path:'**',redirectTo:'/home',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
