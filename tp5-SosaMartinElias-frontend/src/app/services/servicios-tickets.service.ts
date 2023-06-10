import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Espectador } from '../models/espectador';

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


  deleteTicket(IdTicket: any):Observable<any>{
    const HttpOptions = {
      headers: new HttpHeaders({
        
      }),
      params: new HttpParams()
    }
    

    return this._http.delete(this.urlbase+'/'+IdTicket,HttpOptions)
  }
}
