import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  empForm = new FormGroup({
    Employee_Name: new FormControl('',Validators.required),
    Employee_Password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]),
    Employee_Designation: new FormControl('', Validators.required),
    Employee_Salary:new FormControl('',Validators.required),
    Employee_Email:new FormControl('',[Validators.required,Validators.email]),
    Employee_Age:new FormControl('',Validators.required),
    Employee_PhoneNo:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('^[0-9]*$')]),
    Employee_Address:new FormControl('',Validators.required)
  })
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

  addEmployeeRequest:Employee={
    Employee_Id:0,
    Employee_Name:'',
    Employee_Password:'',
    Employee_Designation:'',
    Employee_Salary:0,
    Employee_Email:'',
    Employee_Age:0,
    Employee_PhoneNo:'',
    Employee_Address:''
  };

  constructor(private ownerService:OwnerService,private router:Router) { }
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
  }

  addEmployee(){
    this.ownerService.addEmployee(this.addEmployeeRequest)
    .subscribe({
      next:(employee)=>{
        this.router.navigate(['Department']);
      }
    });
    
  }

}
