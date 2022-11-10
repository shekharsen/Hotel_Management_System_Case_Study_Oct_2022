import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Room } from 'src/app/models/room.model';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {

  roomForm = new FormGroup({
    Room_Type: new FormControl('',Validators.required),
    Room_Price:new FormControl('',[Validators.required,Validators.pattern('^[0-9]*$')]),
    Room_inventory:new FormControl('',Validators.required)
  })
  get room(): FormControl {
    return this.roomForm.get('Room_Type') as FormControl;
  }
  get price(): FormControl {
    return this.roomForm.get('Room_Price') as FormControl;
  }


  addroom:Room={
    Room_Id:'',
    Room_Comment:'',
    Room_Status:true,
    Room_Inventory:'',
    Room_Price:''
  };

  constructor(private roomService: RoomsService,private router:Router) { }
  logout(){
    localStorage.clear();
    this.router.navigate(['/login'])
  }

  ngOnInit(): void {
    if(localStorage.getItem("role")=="Manager"){

    }
    else{
      alert("You are not authorized to view this page, please login first")
      this.router.navigate(['/login'])
      localStorage.clear()
    }
  }

  addRoom(){
    console.log(this.addroom);
    this.roomService.addRoom(this.addroom)
    .subscribe({
      next:(room)=>{
        this.router.navigate(['Rooms']);
        
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
