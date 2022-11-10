import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bill } from 'src/app/models/bill.model';
import { BillsService } from 'src/app/services/bills.service';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {
  searchKey:string="";
  bills:Bill[]=[];

  constructor(private billServices:BillsService,private router:Router) { }
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
    //localStorage.removeItem("guestId")
    //localStorage.removeItem("reservationId")
    //localStorage.removeItem("roomId")
    this.billServices.getBill()
    .subscribe({
      next: (bills) =>{
        this.bills=bills
      },
      error:(response) =>{
        console.log(response);
        
      }
    });
  }
  getBillid(item:any){
    this.billServices.getBill()
    .subscribe((billId:any)=>
    {
      console.log(this.bills);
      localStorage.setItem("billId",item.Bill_Id);
    })
  }

}
