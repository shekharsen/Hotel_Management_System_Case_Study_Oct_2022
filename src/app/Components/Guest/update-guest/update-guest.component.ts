import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Guest } from 'src/app/models/Guest.model';
import { GuestService } from 'src/app/services/guest.service';

@Component({
  selector: 'app-update-guest',
  templateUrl: './update-guest.component.html',
  styleUrls: ['./update-guest.component.css']
})
export class UpdateGuestComponent implements OnInit {
  guestForm = new FormGroup({
    Guest_id:new FormControl('',Validators.required),
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

  UpdateDetails: Guest={
    Guest_Id:0,
      Guest_Name:'',
      Guest_Email:'',
      Guest_Age:0,
      Guest_Phone_Number:0,
      Guest_Aadhar_Id:0,
      Guest_Address:''

  };

  constructor(private route: ActivatedRoute, private GuestService:
     GuestService,private router:Router) { }
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
    this.route.paramMap.subscribe({
      next:(params)=>{
       const Guest_Id= params.get('Guest_Id');

       if(Guest_Id){
        this.GuestService.GetGuest(Guest_Id)
        .subscribe({
          next:(response)=> {
            this.UpdateDetails=response;

          }
        });


       }
      }
    })
  }

  updateGuest(){
    this.GuestService.updateGuest(this.UpdateDetails.Guest_Id,this.UpdateDetails)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['Guest']);
      }
    });

  }

}
