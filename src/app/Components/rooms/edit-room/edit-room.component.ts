import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/models/room.model';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})
export class EditRoomComponent implements OnInit {

  roomForm = new FormGroup({
    Room_Id: new FormControl('',Validators.required),
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


  roomDetails:Room={
    Room_Id:'',
    Room_Comment:'',
    Room_Status:true,
    Room_Inventory:'',
    Room_Price:0
  };

  constructor(private route: ActivatedRoute,private roomService:RoomsService,private router:Router) { }
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
    this.route.paramMap.subscribe({
      next: (params) =>{
        const id=params.get('Room_Id');

        if(id){
          //call api
          this.roomService.getRoom(id)
          .subscribe({
            next: (response)=>{
              this.roomDetails=response;
            }
          });
        }
      }
    })
  }

  updateRoom(){
    this.roomService.updateRoom(this.roomDetails.Room_Id,this.roomDetails)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['Rooms']);
      }
    });
  }

  deleteRoom(id:any){
    this.roomService.deleteRoom(id)
    .subscribe({
      next: (response)=>{
        this.router.navigate(['Rooms']);
      }
    });
  }

}
