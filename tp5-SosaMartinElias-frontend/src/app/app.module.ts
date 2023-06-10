import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductosComponent } from './components/productos/productos.component';
import { FormularioProductosComponent } from './components/formulario-productos/formulario-productos.component';
import { HeaderComponent } from './components/header/header.component';
import { TransaccionesComponent } from './components/transacciones/transacciones.component';
import { FormularioTransaccionesComponent } from './components/formulario-transacciones/formulario-transacciones.component';
import { TicketsComponent } from './components/tickets/tickets.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    FormularioProductosComponent,
    HeaderComponent,
    TransaccionesComponent,
    FormularioTransaccionesComponent,
    TicketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
