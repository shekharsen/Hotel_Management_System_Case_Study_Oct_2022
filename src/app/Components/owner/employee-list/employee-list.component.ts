import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees:Employee[]=[];

  constructor(private ownerServices:OwnerService,private router:Router) { }
  logout(){
    localStorage.clear();
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
    this.ownerServices.getAllEmployees()
    .subscribe({
      next:(employees)=>{
        this.employees=employees;
      },
      error:(response)=>{
        console.log(response);
        
      }
    });
  }

}
