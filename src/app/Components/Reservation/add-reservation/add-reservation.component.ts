import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/models/Reservation.model';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {
  reservationForm = new FormGroup({
    Room_id: new FormControl('',Validators.required),
    Guest_id: new FormControl('',Validators.required),
    Check_in: new FormControl('',Validators.required),
    Check_out: new FormControl('',Validators.required),
    Guest:new FormControl('',[Validators.required,Validators.min(1),Validators.max(4),Validators.pattern('^[0-4]*$')]),
  })
  get no(): FormControl {
    return this.reservationForm.get('Guest') as FormControl;
  }

   addreservationrequest:Reservation= {
    Reservation_Id:0,
    Resevation_Check_In:new Date(),
    Resevation_Check_Out:new Date(),
    Reservation_No_of_Guests:0,
    Room_Id:0,
    Guest_Id:0,
    Reservation_Status:true


  };
  constructor(private reservationservice:ReservationService,private router:Router) {
   }
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
    this.addreservationrequest.Room_Id=localStorage.getItem("roomId");
    console.log(this.addreservationrequest.Room_Id);
    this.addreservationrequest.Guest_Id=localStorage.getItem("guestId");
    console.log(this.addreservationrequest.Guest_Id);
    }
    addReservation(){
      this.reservationservice.addReservation(this.addreservationrequest.Guest_Id,this.addreservationrequest.Room_Id,this.addreservationrequest,)
      .subscribe({
        next:(reservation)=>{
          console.log(reservation);
          
          this.router.navigate(['Reservation']);
        },
      error:(err)=>{
        if(err.status==404 || err.status==400)
        alert("Fill up the required fields");
        else
        console.log(err);
      }}
      );
  }

}
