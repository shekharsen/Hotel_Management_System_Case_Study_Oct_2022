import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Guest } from 'src/app/models/Guest.model';
import { GuestService } from 'src/app/services/guest.service';

@Component({
  selector: 'app-add-guest',
  templateUrl: './add-guest.component.html',
  styleUrls: ['./add-guest.component.css']
})
export class AddGuestComponent implements OnInit {
  guestForm = new FormGroup({
    Guest_Name: new FormControl('',Validators.required),
    Guest_Aadhar_Id:new FormControl('',[Validators.required,Validators.minLength(12),Validators.maxLength(12),Validators.pattern('^[0-9]*$')]),
    Guest_Email:new FormControl('',[Validators.required,Validators.email]),
    Guest_Age:new FormControl('',[Validators.required,Validators.min(18),Validators.max(99),Validators.pattern('^[0-9]*$')]),
    Guest_Phone_Number:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('^[0-9]*$')]),
    Guest_Address:new FormControl('',Validators.required)
  })

  get Name(): FormControl {
    return this.guestForm.get('Guest_Name') as FormControl;
  }
  get id(): FormControl {
    return this.guestForm.get('Guest_Aadhar_Id') as FormControl;
  }
  get mail(): FormControl {
    return this.guestForm.get('Guest_Email') as FormControl;
  }
  get age(): FormControl {
    return this.guestForm.get('Guest_Age') as FormControl;
  }
  get no(): FormControl {
    return this.guestForm.get('Guest_Phone_Number') as FormControl;
  }
  get adrs(): FormControl {
    return this.guestForm.get('Guest_Address') as FormControl;
  }


    addGuestrequest:Guest={
      Guest_Id:0,
      Guest_Name:'',
      Guest_Email:'',
      Guest_Age:'',
      Guest_Phone_Number:'',
      Guest_Aadhar_Id:'',
      Guest_Address:''
    }
  constructor(private Guestservice: GuestService, private router:Router) { }
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
  }
  addGuest(){
    this.Guestservice.addGuest(this.addGuestrequest)
    .subscribe({
      next:(Guest)=>{
        this.router.navigate([Guest]);
      },
      error:(err)=>{
        if(err.status==404 || err.status==400)
        alert("Enter valid Credentails");
        else
        console.log(err);
      }
    });
  }

}