import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Guest } from 'src/app/models/Guest.model';
import { GuestService } from 'src/app/services/guest.service';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})
export class GuestListComponent implements OnInit {
  searchText:any;
  Guests: Guest[]=[];
  guestId:any;
  constructor(private GuestService: GuestService,private router:Router) { 
    let token=localStorage.getItem("token")
     if (token==null){
       this.router.navigate(['/login'])   
       alert("Please Login First")
    }
  }
  logout(){
    localStorage.removeItem("token");
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
    this.GuestService.GetGuests()
    .subscribe({
      next: (Guest)=>{
       this.Guests=Guest;
      },
      error: (response) =>{
        console.log(response);
      }
    })
  }
  // guestList(){
  //   this.GuestService.GetGuests()
  //   .subscribe({
  //     next: (Guest)=>{
  //      this.Guests=Guest;
  //     },
  //     error: (response) =>{
  //       console.log(response);
  //     }
  //   })
  // }

  getGuestid(item:any){
    this.GuestService.GetGuests()
    .subscribe((guestId:any)=>
    {
      console.log(this.Guests);
      
      localStorage.setItem("guestId",item.Guest_Id);
      console.log(guestId);
      
      
    })
  }

}
