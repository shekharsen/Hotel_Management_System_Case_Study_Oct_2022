import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-receptionist-login',
  templateUrl: './receptionist-login.component.html',
  styleUrls: ['./receptionist-login.component.css']
})
export class ReceptionistLoginComponent implements OnInit {

  invalidLogin: boolean;
  credentials: LoginModel = {loginId:0, password:'',designation:''};
  constructor(private router: Router, private http: HttpClient, private login:LoginService) { }
  @Input() logins:any
  userid:string;
  password:string;
  ngOnInit(): void {
    this.userid=this.logins.userid;
    this.password=this.logins.password
  }
  

  LoginOwner(){
    //console.log("hi");
    
    var val={
      userid:this.userid,
      password:this.password
    };
    this.login.getReceptionistLogin(val)
    .subscribe(
      success=>{this.router.navigate(["/Receptionist"]);});
      alert("login successful");
  }

}
