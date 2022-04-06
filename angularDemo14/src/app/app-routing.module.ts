import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'user',
    loadChildren: () => import('./module/user/user.module').then((user) => user.UserModule)
  },
  {
    path:'article',
    loadChildren: () => import('./module/article/article.module').then((article) => article.ArticleModule)
  },
  {
    path:'product',
    loadChildren: () => import('./module/product/product.module').then((product) => product.ProductModule)
  },
  {
    path:'**',
    redirectTo:'user'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
