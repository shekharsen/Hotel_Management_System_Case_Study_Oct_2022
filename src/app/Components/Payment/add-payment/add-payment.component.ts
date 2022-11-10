import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Payment } from 'src/app/models/payment.model';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit {

  paymentForm = new FormGroup({
    paymentCard: new FormControl('',[Validators.required,Validators.minLength(16),Validators.maxLength(16),Validators.pattern('^[0-9]*$')]),
    cardHolder: new FormControl('', Validators.required),
    billId: new FormControl('', Validators.required)
  })
  get CNo(): FormControl {
    return this.paymentForm.get('paymentCard') as FormControl;
  }
  get holderName(): FormControl {
    return this.paymentForm.get('cardHolder') as FormControl;
  }
  get id(): FormControl{
    return this.paymentForm.get('billId') as FormControl;

  }
  addpayment:Payment = {
    Payment_Id:'',
    Payment_Card:'',
    Payment_Card_Holder_Name:'',
    Bill_Id:''
  }

  constructor(private paymentService: PaymentService, private router: Router) { }
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
    this.addpayment.Bill_Id=localStorage.getItem("billId");
    console.log(this.addpayment.Bill_Id);
    
  }

  addPayment(){
    this.paymentService.addPayment(this.addpayment).subscribe({
      next:(payment)=>{
        console.log(payment);
        this.router.navigate(['Payment']);
      },
      error:(err)=>{
        if(err.status==404 || err.status==400)
        alert("Invalid Credentails");
        else
        console.log(err);
      } 
    });
  }
}
