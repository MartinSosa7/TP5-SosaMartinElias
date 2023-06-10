import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ServiciosProductoService } from 'src/app/services/servicios-producto.service';

@Component({
  selector: 'productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  ArrayProductos: Array<Producto>;
  destacado!:boolean;
  
  constructor(private serviciosProducto: ServiciosProductoService) { 
    this.ArrayProductos = new Array<Producto>();
  }

  ngOnInit(): void {
    this.cargarProductos(true);
  }

  cargarProductos(destacado: boolean){
    this.ArrayProductos = new Array<Producto>();
    this.serviciosProducto.getProductos(destacado).subscribe(
      result=>{
        let unProducto = new Producto();
        result.forEach((element:any) => {
          Object.assign(unProducto,element);
          this.ArrayProductos.push(unProducto);
          unProducto = new Producto();
        });

      },
      error=>{
        console.log(error);
      }
    )
  }

}
