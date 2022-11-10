import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/models/room.model';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-unbooked-rooms',
  templateUrl: './unbooked-rooms.component.html',
  styleUrls: ['./unbooked-rooms.component.css']
})
export class UnbookedRoomsComponent implements OnInit {
  searchText:any;
  rooms:Room[]=[];
  roomId:any;
  constructor(private roomService:RoomsService,private activatedRoute:ActivatedRoute,private router:Router) { }
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
    localStorage.setItem("roomId","");
    localStorage.setItem("guestId","");
    this.roomService.getUnBookedRooms()
    .subscribe(
    {
      next:(rooms)=>{
        this.rooms=rooms;
        //let roomId=this.rooms[0];
        //localStorage.setItem("roomId",roomId)
      }
    });
  }
  
  
  // getUnbookedRoom(){
  //   this.roomService.getUnBookedRooms()
  //   .subscribe(
  //   {
  //     next:(rooms)=>{
  //       this.rooms=rooms;
  //       //let roomId=this.rooms[0];
  //       //localStorage.setItem("roomId",roomId)
  //     }
  //   });
  // }
  getRoomid(item:any){
    this.roomService.getUnBookedRooms()
    .subscribe((roomId:any)=>
    {
      console.log(this.rooms);
      
      localStorage.setItem("roomId",item.Room_Id);
    })
  }

}
