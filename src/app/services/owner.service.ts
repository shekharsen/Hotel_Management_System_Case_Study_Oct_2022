import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  baseApiUrl: string=environment.baseApiUrl;

  constructor(private http:HttpClient) { }

  getAllEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseApiUrl+'/Departments');
  }

  addEmployee(addEmployeeRequest:Employee):Observable<Employee>{
    addEmployeeRequest.Employee_Id=0;
    return this.http.post<Employee>(this.baseApiUrl+'/AddEmployee',addEmployeeRequest);
  }

  getEmployee(id:any):Observable<Employee>{
    return this.http.get<Employee>(this.baseApiUrl+'/api/Owner/'+id);
  }

  updateEmployee(id:any,updateEmployeeRequest:Employee):Observable<Employee>{
    return this.http.put<Employee>(this.baseApiUrl+'/UpdateEmployee ?Employeeid='+id,updateEmployeeRequest);
  }

  deleteEmployee(id:any):Observable<Employee>{
    return this.http.delete<Employee>(this.baseApiUrl+'/DeleteEmployee?Employeeid='+id);
  }

  
}
