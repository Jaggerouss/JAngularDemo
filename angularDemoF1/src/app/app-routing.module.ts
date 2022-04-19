import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  {
    path:'home',component:IndexComponent
  },
  {
    path:'content',component:ContentComponent
  },
  {
    path:'**',redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
