import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { MapPageRoutingModule } from './map-routing.module';
import { MapPage } from './map.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MapPageRoutingModule,
  ],
  declarations: [MapPage],
})
export class MapPageModule {}
