import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class ServiciosProductoService {

  urlbase:string = "http://localhost:3000/api/producto";

  constructor(private _http: HttpClient) { }



  getProductos(destacado: any):Observable<any> {
    if(destacado == false){
      destacado = '';
    }
    const HttpOptions = {
      headers: new HttpHeaders({


      }),
      params: new HttpParams().append('destacado',destacado)
    }

    return this._http.get(this.urlbase,HttpOptions);
  }

  postProducto(producto:Producto):Observable<any>{
    const HttpOptions = {
      headers: new HttpHeaders({
        "Content-type": "application/json"

      }),
      params: new HttpParams()

    }
    const body = JSON.stringify(producto);
    return this._http.post(this.urlbase,body,HttpOptions);
  }
}


