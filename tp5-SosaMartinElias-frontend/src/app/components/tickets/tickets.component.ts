import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { error } from 'console';
import { Ticket } from 'src/app/models/ticket';
import { ServiciosTicketsService } from 'src/app/services/servicios-tickets.service';

@Component({
  selector: 'tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  ArrayTickets: Array<Ticket>;
  catEspectador!: any;
  constructor(private serviciosTicket: ServiciosTicketsService, private router: Router) {
    this.ArrayTickets = new Array<Ticket>();
  }

  ngOnInit(): void {
    this.cargarTickets('');
  }

  cargarTickets(categoriaEspectador: any) {
    this.ArrayTickets = new Array<Ticket>();
    this.serviciosTicket.getTickets(categoriaEspectador).subscribe(
      result => {
        let unTicket = new Ticket();
        result.forEach((element: any) => {
          Object.assign(unTicket, element);
          this.ArrayTickets.push(unTicket);
          unTicket = new Ticket();
        });
        this.catEspectador = '';
      },
      error => {
        console.log(error);
      }
    )
  }

  eliminar(ticket: Ticket) {
    this.serviciosTicket.deleteTicket(ticket._id).subscribe(
      result => {
        alert(result.msg);
        this.cargarTickets('');
      },
      error => {
        console.log(error);
      }
    )

  }

  agregarTicket() {
    this.router.navigate(['formulario-tickets', 0]);
  }
  modificar(ticket: Ticket) {
    this.router.navigate(['formulario-tickets', ticket._id]);
  }

}
