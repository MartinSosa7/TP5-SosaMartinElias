import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { FormularioProductosComponent } from './components/formulario-productos/formulario-productos.component';
import { TransaccionesComponent } from './components/transacciones/transacciones.component';
import { FormularioTransaccionesComponent } from './components/formulario-transacciones/formulario-transacciones.component';

const routes: Routes = [
  {path:'productos',component:ProductosComponent},
  {path:'formulario-productos', component:FormularioProductosComponent},
  {path:'transacciones',component:TransaccionesComponent},
  {path:'formulario-transacciones',component:FormularioTransaccionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
