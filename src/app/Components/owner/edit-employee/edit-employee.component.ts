import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  empForm = new FormGroup({
    Employee_Id: new FormControl('',Validators.required),
    Employee_Name: new FormControl('',Validators.required),
    Employee_Password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]),
    Employee_Designation: new FormControl('', Validators.required),
    Employee_Salary:new FormControl('',Validators.required),
    Employee_Email:new FormControl('',[Validators.required,Validators.email]),
    Employee_Age:new FormControl('',Validators.required),
    Employee_PhoneNo:new FormControl('',Validators.required),
    Employee_Address:new FormControl('',Validators.required)
  })
  get id(): FormControl {
    return this.empForm.get('Employee_Id') as FormControl;
  }
  get Name(): FormControl {
    return this.empForm.get('Employee_Name') as FormControl;
  }
  get pswd(): FormControl {
    return this.empForm.get('Employee_Password') as FormControl;
  }
  get desig(): FormControl{
    return this.empForm.get('Employee_Designation') as FormControl;
  }
  get sal(): FormControl {
    return this.empForm.get('Employee_Salary') as FormControl;
  }
  get mail(): FormControl {
    return this.empForm.get('Employee_Email') as FormControl;
  }
  get age(): FormControl {
    return this.empForm.get('Employee_Age') as FormControl;
  }
  get no(): FormControl {
    return this.empForm.get('Employee_PhoneNo') as FormControl;
  }
  get adrs(): FormControl {
    return this.empForm.get('Employee_Address') as FormControl;
  }

  constructor(private route:ActivatedRoute,private ownerService:OwnerService,private router:Router) { }
  logout(){
    localStorage.clear();
    this.router.navigate(['/login'])
  }

  employeeDetails:Employee={
    Employee_Id:0,
    Employee_Name:'',
    Employee_Password:'',
    Employee_Designation:'',
    Employee_Salary:0,
    Employee_Email:'',
    Employee_Age:0,
    Employee_PhoneNo:0,
    Employee_Address:''
  };

  ngOnInit(): void {
    if(localStorage.getItem("role")=="Owner"){

    }
    else{
      alert("You are not authorized to view this page, please login first")
      this.router.navigate(['/login'])
      localStorage.clear()
    }
    this.route.paramMap.subscribe({
      next:(params)=>{
        const id=params.get('Employee_Id');

        if(id){
          this.ownerService.getEmployee(id)
          .subscribe({
            next:(response)=>{
              this.employeeDetails=response;
            }
          });
        }
      }
    })
  }

  updateEmployee(){
    this.ownerService.updateEmployee(this.employeeDetails.Employee_Id,this.employeeDetails)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['Department']);
      }
    });
  }

  deleteEmployee(id:any){
    this.ownerService.deleteEmployee(id)
    .subscribe({
      next:(resposne)=>{
        this.router.navigate(['Department']);
      }
    });
  }

}
