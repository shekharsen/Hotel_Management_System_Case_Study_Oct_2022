import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { LoginModel } from '../../models/login.model';

@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.css']
})
export class ManagerLoginComponent implements OnInit {

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
    this.login.getManagerLogin(val)
    .subscribe(
      token=>{this.router.navigate(["/Manager"]);
    localStorage.setItem('token',token)});
      alert("login successful");
  }

}
