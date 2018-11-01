import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreciosComponent } from './precios/precios.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { DecksComponent } from './decks/decks.component';

const routes: Routes = [
  { path: 'precios'   , component: PreciosComponent },
  { path: 'decks'     , component: DecksComponent },
  { path: 'jugadores' , component: JugadoresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
