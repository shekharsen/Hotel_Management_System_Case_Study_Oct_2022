import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Guest } from 'src/app/models/Guest.model';
import { GuestService } from 'src/app/services/guest.service';

@Component({
  selector: 'app-all-guest',
  templateUrl: './all-guest.component.html',
  styleUrls: ['./all-guest.component.css']
})
export class AllGuestComponent implements OnInit {
  Guests: Guest[]=[];
 

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
    if(localStorage.getItem("role")=="Owner"){

    }
    else{
      alert("You are not authorized to view this page, please login first")
      this.router.navigate(['/login'])
      localStorage.clear()
    }
    this.GuestService.GetGuestDetails()
    .subscribe({
      next: (Guest)=>{
       this.Guests=Guest;
      },
      error: (response) =>{
        console.log(response);
      }
    })
  }

}
