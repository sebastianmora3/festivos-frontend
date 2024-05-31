import { Routes } from '@angular/router';
import { FestivoanioComponent } from './features/componentes/festivoanio/festivoanio.component';
import { FestivofechaComponent } from './features/componentes/festivofecha/festivofecha.component';

export const routes: Routes = [
   {path:"festivosfecha", component:FestivofechaComponent},
   {path:"festivosanio", component:FestivoanioComponent}
];
