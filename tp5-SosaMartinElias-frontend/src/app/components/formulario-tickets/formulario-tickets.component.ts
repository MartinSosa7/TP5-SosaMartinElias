import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';
import { Espectador } from 'src/app/models/espectador';
import { Ticket } from 'src/app/models/ticket';
import { ServiciosTicketsService } from 'src/app/services/servicios-tickets.service';

@Component({
  selector: 'formulario-tickets',
  templateUrl: './formulario-tickets.component.html',
  styleUrls: ['./formulario-tickets.component.css']
})
export class FormularioTicketsComponent implements OnInit {

  accion!:string;
  ticket:Ticket;
  descuento!:number;
  date!:Date;
  arrayEspectadores: Array<Espectador>;
  constructor(private serviciosTickets: ServiciosTicketsService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.arrayEspectadores = new Array<Espectador>();
    this.ticket = new Ticket();
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params['id'] == "0"){
        this.accion = "new";
        this.ticket = new Ticket();
        this.getEspectadores();
      }else{
        this.accion = "update";
        this.getEspectadores();
        this.cargarTicket(params['id']);
      }
    })

  }

  cargarTicket(id: number){
    this.serviciosTickets.getTicket(id).subscribe(
      result=>{
        Object.assign(this.ticket, result);
        
        this.ticket.espectador = this.arrayEspectadores.find(e=>(e._id == this.ticket.espectador._id))!;
      },
      error=>{
        console.log(error);
      }
    )
  }

  putTicket(){
    this.serviciosTickets.putTicket(this.ticket).subscribe(
      result=>{
        console.log(result.msg);
        this.router.navigate(['tickets']);
      },
      error=>{
        console.log(error);
      }
    )

  }

  postTicket(){
    this.date = new Date();
    this.ticket.fechaCompra = this.date.toLocaleDateString();
    this.ticket.precioTicket = this.descuento;
    this.serviciosTickets.postTicket(this.ticket).subscribe(
      result=>{
        alert(result.msg);
        this.ticket = new Ticket();
      },
      error=>{
        console.log(error);
      }
    )


  }

  calcularDescuento(){
    this.descuento = this.ticket.precioTicket;
    if(this.ticket.categoriaEspectador == 'l'){
        this.descuento = this.ticket.precioTicket - (this.ticket.precioTicket * 0.20);
    }
    return true;
  }


  verTickets(){
    this.router.navigate(['tickets']);
  }

  getEspectadores(){
    this.arrayEspectadores = new Array<Espectador>();
    this.serviciosTickets.getEspectadores().subscribe(
      result=>{
        let unEspectador = new Espectador();
        result.forEach((element:any) => {
          Object.assign(unEspectador, element);
          this.arrayEspectadores.push(unEspectador);
          unEspectador = new Espectador();
        });
        
      },
      error=>{
        console.log(error);
      }
    )
    
  }

}
