import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { Transaccion } from 'src/app/models/transaccion';
import { ServiciosTransaccionService } from 'src/app/services/servicios-transaccion.service';

@Component({
  selector: 'transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.css']
})
export class TransaccionesComponent implements OnInit {

  monedaOrigen:any = null;
  monedaDestino:any = null;
  ArrayTransacciones:Array<Transaccion>;

  constructor(private serviciosTransaccion: ServiciosTransaccionService) {
    this.ArrayTransacciones = new Array<Transaccion>();
   }

  ngOnInit(): void {
    this.getTransacciones(null,null);
  }

  getTransacciones(monedaOrigen:any, monedaDestino:any){
    this.ArrayTransacciones = new Array<Transaccion>();
    this.serviciosTransaccion.getTransacciones(monedaOrigen,monedaDestino).subscribe(
      result=>{
        let unaTransaccion = new Transaccion();
        result.forEach((element:any) => {
          Object.assign(unaTransaccion,element);
          this.ArrayTransacciones.push(unaTransaccion);
          unaTransaccion = new Transaccion();
        });
        this.monedaDestino = null;
        this.monedaOrigen = null;
        
      },
      error=>{
        console.log(error);
      }
    )

  }

}
