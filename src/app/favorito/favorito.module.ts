import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritoPageRoutingModule } from './favorito-routing.module';

import { FavoritosPage } from './favorito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritoPageRoutingModule
  ],
  declarations: [FavoritosPage]
})
export class FavoritoPageModule {}
