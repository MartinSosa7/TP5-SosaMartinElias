import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { Transaccion } from 'src/app/models/transaccion';
import { ServiciosTransaccionService } from 'src/app/services/servicios-transaccion.service';

@Component({
  selector: 'formulario-transacciones',
  templateUrl: './formulario-transacciones.component.html',
  styleUrls: ['./formulario-transacciones.component.css']
})
export class FormularioTransaccionesComponent implements OnInit {

  transaccion!:Transaccion;
  constructor(private serviciosTransaccion: ServiciosTransaccionService) { 
    this.transaccion = new Transaccion();
  }

  ngOnInit(): void {
  }

  
  conversion(tasaConversion:number,monedaOrigen:string,monedaDestino:string){

    this.serviciosTransaccion.postConvert(tasaConversion,monedaOrigen,monedaDestino).subscribe(
      result=>{
        console.log(result);
        this.transaccion.cantidadDestino = result.result;
        this.createTransaccion(this.transaccion);
      },
      error=>{
        console.log(error);
      }
    )

  }

  createTransaccion(nuevaTransaccion: Transaccion){
    this.serviciosTransaccion.postTransaccion(nuevaTransaccion).subscribe(
      result=>{
        alert(result.msg);
        this.transaccion = new Transaccion();
      },
      error=>{
        console.log(error);
      }
    )

  }

}
