import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { Producto } from 'src/app/models/producto';
import { ServiciosProductoService } from 'src/app/services/servicios-producto.service';

@Component({
  selector: 'formulario-productos',
  templateUrl: './formulario-productos.component.html',
  styleUrls: ['./formulario-productos.component.css']
})
export class FormularioProductosComponent implements OnInit {

  producto:Producto;
  constructor(private serviciosProducto: ServiciosProductoService) { 
    this.producto = new Producto();
  }

  ngOnInit(): void {
  }

  createProducto(){
    this.serviciosProducto.postProducto(this.producto).subscribe(
      result=>{
        alert(result.msg);
        this.producto = new Producto();
      },
      error=>{
        console.log(error);
      }
    )

  }


 
}



