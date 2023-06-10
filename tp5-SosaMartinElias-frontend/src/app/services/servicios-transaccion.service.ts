import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaccion } from '../models/transaccion';

@Injectable({
  providedIn: 'root'
})
export class ServiciosTransaccionService {

  urlbase:string = "http://localhost:3000/api/transaccion";
  constructor(private _http: HttpClient) { }

  postTransaccion(nuevaTransaccion: Transaccion):Observable<any>{

    const HttpOptions = {
      headers: new HttpHeaders({
        "Content-type": "application/json"
      }),
      params: new HttpParams()

    }
    const body = JSON.stringify(nuevaTransaccion);
    return this._http.post(this.urlbase,body,HttpOptions);
  }

  getTransacciones(monedaOrigen:any, monedaDestino:any):Observable<any>{
    const HttpOptions = {
      headers: new HttpHeaders({

      }),

      params: new HttpParams().append('monedaOrigen',monedaOrigen).append('monedaDestino',monedaDestino)

    }

    return this._http.get(this.urlbase,HttpOptions);
  }


  postConvert(tasaConversion:number,monedaOrigen:string,monedaDestino:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Host': 'community-neutrino-currency-conversion.p.rapidapi.com',
      'X-RapidAPI-Key': '2d33926868msh8de360aeaa83759p13a389jsn8fcf2308aabc'
      })
      };
      const body = new HttpParams()
      .set('from-value', tasaConversion)
      .set('from-type', monedaOrigen)
      .set('to-type', monedaDestino);
      return this._http.post("https://community-neutrino-currency-conversion.p.rapidapi.com/convert",body, httpOptions);
  }
}
