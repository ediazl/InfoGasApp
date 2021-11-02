import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfogasPage } from './infogas.page';

const routes: Routes = [
  {
    path: '',
    component: InfogasPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfogasPageRoutingModule {}
