import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContentComponent } from './components/content/content.component';

const routes: Routes = [
  {
    path:"home",component:HomeComponent
  },
  {
    path:"content/:id",component:ContentComponent
  },
  {
    path:"**",redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
