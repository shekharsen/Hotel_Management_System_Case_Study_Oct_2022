import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/models/Reservation.model';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-get-reservation',
  templateUrl: './get-reservation.component.html',
  styleUrls: ['./get-reservation.component.css']
})
export class GetReservationComponent implements OnInit {

  Reservation:Reservation[]=[];
  reservationId:number;
  constructor(private reservationservice:ReservationService,private router:Router) { }
  logout(){
    localStorage.clear();
    this.router.navigate(['/login'])
  }

  ngOnInit(): void {
    if(localStorage.getItem("role")=="Receptionist"){

    }
    else{
      alert("You are not authorized to view this page, please login first")
      this.router.navigate(['/login'])
      localStorage.clear()
    }
this.reservationservice.getallReservation()
.subscribe({
  next: (Reservation)=>{
   this.Reservation=Reservation;
  },
  error: (response) =>{
    console.log(response);
  }

});

  }

  getReservationId(item:any){
    this.reservationservice.getallReservation()
    .subscribe((reservationId:any)=>
    {
      console.log(this.Reservation);
      
      localStorage.setItem("reservationId",item.Reservation_Id);
    })
  }

  Search(){
    this.Reservation=this.Reservation.filter(res=>{
      return res.Reservation_Id.equals(this.reservationId);
    });
  }


}
