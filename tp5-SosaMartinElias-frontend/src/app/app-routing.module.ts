import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { FormularioProductosComponent } from './components/formulario-productos/formulario-productos.component';
import { TransaccionesComponent } from './components/transacciones/transacciones.component';
import { FormularioTransaccionesComponent } from './components/formulario-transacciones/formulario-transacciones.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { FormularioTicketsComponent } from './components/formulario-tickets/formulario-tickets.component';

const routes: Routes = [
  {path:'productos',component:ProductosComponent},
  {path:'formulario-productos', component:FormularioProductosComponent},
  {path:'transacciones',component:TransaccionesComponent},
  {path:'formulario-transacciones',component:FormularioTransaccionesComponent},
  {path:'tickets', component: TicketsComponent},
  {path: 'formulario-tickets/:id', component:FormularioTicketsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
