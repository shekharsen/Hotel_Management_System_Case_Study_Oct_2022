import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bill } from 'src/app/models/bill.model';
import { BillsService } from 'src/app/services/bills.service';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.css']
})
export class AddBillComponent implements OnInit {

  addBillRequest: Bill={
    Bill_Id: 0,
    Guest_Id:0,
    Bill_Amount:0,
    Bill_Date:new Date(),
    Reservation_Id:0,
    Paid:false
  }; 

  constructor(private billService:BillsService,private router:Router) { }

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
    this.addBillRequest.Reservation_Id=localStorage.getItem("reservationId");
    console.log(this.addBillRequest.Reservation_Id);
    this.addBillRequest.Guest_Id=localStorage.getItem("guestId");
    console.log(this.addBillRequest.Guest_Id);

  }

  addBill(){
    this.billService.addBill(this.addBillRequest.Guest_Id,this.addBillRequest.Reservation_Id,this.addBillRequest)
    .subscribe({
      next:(bill)=>{
        this.router.navigate(['Bill'])
        localStorage.removeItem("guestId")
        localStorage.removeItem("reservationId")
      },
      error:(err)=>{
        if(err.status==404 || err.status==400)
        alert("Invalid Input Details");
        else
        console.log(err);
      }
    });
    
  }
  

}
