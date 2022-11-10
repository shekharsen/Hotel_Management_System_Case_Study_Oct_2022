import { Router } from '@angular/router';
import { Component, OnInit,Input } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { LoginModel } from '../../models/login.model';
import { LoginService } from '../../services/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    loginId: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    loginAs: new FormControl('', Validators.required)
  })

  get Id(): FormControl {
    return this.loginForm.get('loginId') as FormControl;
  }
  get Pwd(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }
  get las(): FormControl{
    return this.loginForm.get('loginAs') as FormControl;

  }



  constructor(private service: LoginService, private router: Router) {

  }
  @Input() login1:any;
  loginId:string;
  password:string;
  designation:string;

  ngOnInit(): void {
    this.loginId=this.login1.loginId;
    this.password=this.login1.password;
    this.designation=this.login1.designation;
  }
  designations:'';
  getDesig(item:any){
    console.log(item.target.value);
    this.designation=item.target.value;
  }

  login() {
    var val={
      loginId:this.loginId,
      password:this.password,
      designation:this.designation
    }
    if (this.designation == "Owner") {
          this.service.getLogin(val)
         .subscribe(
           token=>{this.router.navigate(["/owner"]);
         localStorage.setItem('token',token)
         localStorage.setItem("role",val.designation)
         alert("login successful");
        }
         ,
         err =>{
          if(err.status==404 || err.status==400)
          alert("Authentication Failed!! Invalid Credentails");
          else
          console.log(err);
        });
           
       }
       else if (this.designation === "Receptionist") {
        this.service.getReceptionistLogin(val).subscribe(
          token=> {
            this.router.navigate(['/Receptionist']);
           localStorage.setItem("token",token)
           localStorage.setItem("role",val.designation)
           alert("Login Successfull")
          },
          err =>{
            if(err.status==404 || err.status==400)
            alert("Authentication Failed!! Invalid Credentails");
            else
            console.log(err);
          }
        );
      }
      else if (this.designation === "Manager") {
        this.service.getManagerLogin(val).subscribe(
          token => {
            this.router.navigate(['/Manager']);
            localStorage.setItem("token",token)
            localStorage.setItem("role",val.designation)
            alert("Login Successfull")
          },
          err =>{
            if(err.status==404 || err.status==400)
            alert("Authentication Failed!! Invalid Credentails");
            else
            console.log(err);
          }
        );
      }
        }
    
    
    
  //   if (loginData.loginAs === "owner") {
  //     this.service.getLogin(loginData)
  //    .subscribe(
  //      token=>{this.router.navigate(["/owner"]);
  //    localStorage.setItem('token',token)},
  //    err =>{
  //     if(err.status==404 || err.status==400)
  //     alert("Authentication Failed!! Invalid Credentails");
  //     else
  //     console.log(err);
  //   });
  //      alert("login successful");
  //  }
  //  else if (loginData.loginAs === "Receptionist") {
  //   this.service.getReceptionistLogin(loginData).subscribe(
  //     token=> {
  //       this.router.navigate(['/Receptionist']);
  //      localStorage.setItem("token",token)
  //     },
  //     err =>{
  //       if(err.status==404 || err.status==400)
  //       alert("Authentication Failed!! Invalid Credentails");
  //       else
  //       console.log(err);
  //     }
  //   ),
  //   alert("Login Successfull");
  // }
  // else if (loginData.loginAs === "manager") {
  //   this.service.getManagerLogin(loginData).subscribe(
  //     token => {
  //       this.router.navigate(['/Manager']);
  //       localStorage.setItem("token",token)
  //     },
  //     err =>{
  //       if(err.status==404 || err.status==400)
  //       alert("Authentication Failed!! Invalid Credentails");
  //       else
  //       console.log(err);
  //     }
  //   ),
  //   alert("Login Successfull");
  // }
  //   }
  }

