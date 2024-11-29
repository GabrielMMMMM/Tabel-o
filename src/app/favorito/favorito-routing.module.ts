import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoritosPage } from './favorito.page';

const routes: Routes = [
  {
    path: '',
    component: FavoritosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritoPageRoutingModule {}
