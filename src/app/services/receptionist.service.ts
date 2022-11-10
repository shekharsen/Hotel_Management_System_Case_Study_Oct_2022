import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/receptionist.model';

@Injectable({
  providedIn: 'root'
})
export class ReceptionistService {

  baseapiurl:string=environment.baseApiUrl;

  constructor(private http:HttpClient) { }

  getallreceeptionist(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseapiurl+'/GetReceptionist');

  }
  addreceptionist(addreceptionistrequest:Employee):Observable<Employee>{
   return this.http.post<Employee>(this.baseapiurl+'/AddReceptionist',addreceptionistrequest);
  }
  Getreceptionist(Employee_Id: any):Observable<Employee>{
    return this.http.get<Employee>(this.baseapiurl+'/api/Employee/'+Employee_Id);
  }
  updateReceptionist(Employee_Id:any,updateemployeerequest:Employee): Observable<Employee>{
    return this.http.put<Employee>(this.baseapiurl+'/UpdateReceptionist?Employeeid='+Employee_Id,updateemployeerequest);
  }
  DeleteReceptionist(Employee_Id:any):Observable<Employee>{
    return this.http.delete<Employee>(this.baseapiurl+'/DeleteReceptionist?Employeeid='+Employee_Id);

}
}
