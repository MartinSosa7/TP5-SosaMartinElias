import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Espectador } from '../models/espectador';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class ServiciosTicketsService {

  urlbase:string = "http://localhost:3000/api/ticket";
  constructor(private _http: HttpClient) { }

  getTickets(categoriaEspectador: any):Observable<any>{

    const HttpOptions = {
      headers: new HttpHeaders({


      }),
      params: new HttpParams().append('categoriaEspectador',categoriaEspectador)
    }


    return this._http.get(this.urlbase,HttpOptions);
  }

  getTicket(id:any):Observable<any>{
    const HttpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()
    }


    return this._http.get(this.urlbase+'/'+id, HttpOptions);
  }


  deleteTicket(IdTicket: any):Observable<any>{
    const HttpOptions = {
      headers: new HttpHeaders({
        
      }),
      params: new HttpParams()
    }
    

    return this._http.delete(this.urlbase+'/'+IdTicket,HttpOptions)
  }


  putTicket(ticket: Ticket):Observable<any>{
    const HttpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      }),
      params: new HttpParams()
    }
    let body = JSON.stringify(ticket);

    return this._http.put(this.urlbase,body,HttpOptions);
    
  }

  postTicket(ticket: Ticket):Observable<any>{
    const HttpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'

      }),
      params: new HttpParams()
    }
    let body = JSON.stringify(ticket);

    return this._http.post(this.urlbase,body,HttpOptions);


  }

  getEspectadores():Observable<any>{
    const HttpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()
    }

    return this._http.get("http://localhost:3000/api/espectador",HttpOptions);
  }
}
