import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { InfogasPageRoutingModule } from './infogas-routing.module';
import { InfogasPage } from './infogas.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    InfogasPageRoutingModule,
  ],
  declarations: [InfogasPage],
})
export class InfogasPageModule {}
