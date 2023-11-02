import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsPagesComponent } from './pages/basics-pages/basics-pages.component';
import { NumberPagesComponent } from './pages/number-pages/number-pages.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';

const routes: Routes = [
  {
   path: '',
   component: BasicsPagesComponent
  },
  {
    path: 'numbers',
    component: NumberPagesComponent
  },
  {
    path: 'uncommon',
    component: UncommonPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
