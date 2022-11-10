import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from 'src/app/models/Reservation.model';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-edit-reservation',
  templateUrl: './edit-reservation.component.html',
  styleUrls: ['./edit-reservation.component.css']
})
export class EditReservationComponent implements OnInit {
  updateReservations: Reservation={
    Reservation_Id:0,
    Resevation_Check_In:new Date(),
    Resevation_Check_Out:new Date(),
    Reservation_No_of_Guests:0,
    Room_Id:0,
    Guest_Id:0,
    Reservation_Status:true
    

  };
  ErrorReservation:any={
    msg:''
  }

  constructor(private route:ActivatedRoute, private reservationservice:ReservationService,private router:Router) { }
  logout(){
    localStorage.clear();
    this.router.navigate(['/login'])
  }
  currentDate : any = new Date();


  ngOnInit(): void {
    if(localStorage.getItem("role")=="Receptionist"){

    }
    else{
      alert("You are not authorized to view this page, please login first")
      this.router.navigate(['/login'])
      localStorage.clear()
    }
    this.route.paramMap.subscribe({
      next:(params)=>{
        const Reservation_Id=params.get('Reservation_Id');
        
        if(Reservation_Id){
          this.reservationservice.GetReservation(Reservation_Id).subscribe({
            next:(response)=>{
              this.updateReservations=response;

            }
          })

        }
      }
    })

  }

  updateReservation(){
    this.reservationservice.updateReservation(this.updateReservations.Room_Id,this.updateReservations.Guest_Id,this.updateReservations.Reservation_Id,this.updateReservations)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['Reservation']);
      },
      error:(response)=>{
        this.ErrorReservation.msg=response;
      }
    });
  
  }
  deleteReservation(Reservation_Id:any){
    this.reservationservice.DeleteReservation(Reservation_Id)
    .subscribe({
      next: (response)=>{
        this.router.navigate(['Reservation']);
      }
    });
  }
}
  

  


