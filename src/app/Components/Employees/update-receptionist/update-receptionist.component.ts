import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/receptionist.model';
import { ReceptionistService } from 'src/app/services/receptionist.service';

@Component({
  selector: 'app-update-receptionist',
  templateUrl: './update-receptionist.component.html',
  styleUrls: ['./update-receptionist.component.css']
})
export class UpdateReceptionistComponent implements OnInit {

  receptionForm = new FormGroup({
    Employee_Id: new FormControl('',Validators.required),
    Employee_Name: new FormControl('',Validators.required),
    Employee_Password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]),
    Employee_Designation: new FormControl('', Validators.required),
    Employee_Salary:new FormControl('',Validators.required),
    Employee_Email:new FormControl('',[Validators.required,Validators.email]),
    Employee_Age:new FormControl('',[Validators.required,Validators.min(18),Validators.max(99),Validators.pattern('^[0-9]*$')]),
    Employee_PhoneNo:new FormControl('',Validators.required),
    Employee_Address:new FormControl('',Validators.required)
  })
  get id(): FormControl {
    return this.receptionForm.get('Employee_Id') as FormControl;
  }
  get Name(): FormControl {
    return this.receptionForm.get('Employee_Name') as FormControl;
  }
  get pswd(): FormControl {
    return this.receptionForm.get('Employee_Password') as FormControl;
  }
  get desig(): FormControl{
    return this.receptionForm.get('Employee_Designation') as FormControl;
  }
  get sal(): FormControl {
    return this.receptionForm.get('Employee_Salary') as FormControl;
  }
  get mail(): FormControl {
    return this.receptionForm.get('Employee_Email') as FormControl;
  }
  get age(): FormControl {
    return this.receptionForm.get('Employee_Age') as FormControl;
  }
  get no(): FormControl {
    return this.receptionForm.get('Employee_PhoneNo') as FormControl;
  }
  get adrs(): FormControl {
    return this.receptionForm.get('Employee_Address') as FormControl;
  }


  employeedetails:Employee={
    Employee_Id:0,
    Employee_Name:'',
    Employee_Password:'',
    Employee_Designation:'',
    Employee_Salary:0,
    Employee_Age:0,
    Employee_PhoneNo:0,
    Employee_Address:'',
    Employee_Email:''

  }

  constructor(private route:ActivatedRoute,private employeeservice:ReceptionistService,private router:Router) { }

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
      next:(params) =>{
        const id=params.get('Employee_Id');

        if(id){
          this.employeeservice.Getreceptionist(id)
          .subscribe({
            next:(response)=>{
              this.employeedetails=response;
            }

          });

        }
      }
    })
  }

  updateReceptionist(){
    this.employeeservice.updateReceptionist(this.employeedetails.Employee_Id,this.employeedetails)
    .subscribe({
      next:(respnse)=>{
        this.router.navigate(['Employee']);

      },
      error:(err)=>{
        if(err.status==404 || err.status==400)
        alert("Invalid Credentails");
        else
        console.log(err);
      }
    });
  }
  deleteReceptionist(Employee_Id:any){
    this.employeeservice.DeleteReceptionist(Employee_Id)
    .subscribe({
      next: (response)=>{
        this.router.navigate(['Employee']);
      }
    });
  }
    
      
  
    

  }



