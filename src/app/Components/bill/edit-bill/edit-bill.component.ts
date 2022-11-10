import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bill } from 'src/app/models/bill.model';
import { BillsService } from 'src/app/services/bills.service';

@Component({
  selector: 'app-edit-bill',
  templateUrl: './edit-bill.component.html',
  styleUrls: ['./edit-bill.component.css']
})
export class EditBillComponent implements OnInit {

  billDetails:Bill={
    Bill_Id: 0,
    Guest_Id:0,
    Bill_Amount:0,
    Bill_Date:new Date(),
    Reservation_Id:0,
    Paid:false
  };

  constructor(private route:ActivatedRoute, private billService:BillsService,private router:Router) { }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login'])
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        const id=params.get('Bill_Id');

        if(id){
          this.billService.getBillById(id)
          .subscribe({
            next:(response)=>{
              this.billDetails=response;
            }
          });
        }
      }
    })
  }

  updateBill(){
    this.billService.updateBill(this.billDetails.Bill_Id,this.billDetails.Guest_Id,this.billDetails.Reservation_Id,this.billDetails)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['Bill'])
      },
      error:(err)=>{
        if(err.status==404 || err.status==400)
        alert("Invalid Credentails");
        else
        console.log(err);
      }
    });
  }

  deleteBill(id:any){
    this.billService.deleteBill(id)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['Bill'])
      }
    });
  }

}
