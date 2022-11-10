import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getLogin(credentials:any){
   let apiUrl ="https://localhost:7103/api/JWTToken/OwnerToken?EmployeeMail="+credentials.loginId+"&EmployeePassword="+credentials.password;
   return this.http.post(apiUrl,credentials,{responseType:'text'});
  }



  getManagerLogin(credentials:any){
    let apiUrl ="https://localhost:7103/api/JWTToken/EmployeeToken?EmployeeEmail="+credentials.loginId+"&EmployeePassword="+credentials.password;
   return this.http.post(apiUrl,credentials,{responseType:'text'});
  }
  getReceptionistLogin(credentials:any){
    console.log(credentials.designation);
    
    let apiUrl ="https://localhost:7103/api/JWTToken/EmployeeToken?EmployeeEmail="+credentials.loginId+"&EmployeePassword="+credentials.password;
   return this.http.post(apiUrl,credentials,{responseType:'text'});
  }
}
