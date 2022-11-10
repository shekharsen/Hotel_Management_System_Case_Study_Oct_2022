import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/receptionist.model';
import { ReceptionistService } from 'src/app/services/receptionist.service';

@Component({
  selector: 'app-get-receptionist',
  templateUrl: './get-receptionist.component.html',
  styleUrls: ['./get-receptionist.component.css']
})
export class GetReceptionistComponent implements OnInit {
  searchText:any;
  employees:Employee[]=[];

  constructor(private employeeService:ReceptionistService,private router:Router) { }
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
    this.employeeService.getallreceeptionist()
    .subscribe({
      next: (Employee)=>{
        this.employees=Employee;
       },
       error: (response) =>{
         console.log(response);
       }
    });
  }

}
