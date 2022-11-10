import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Guest } from '../models/Guest.model';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  baseApiUrl: string= environment.baseApiUrl;
  constructor(private http:HttpClient) { }
  GetGuests(): Observable<Guest[]>{
    return this.http.get<Guest[]>(this.baseApiUrl +'/GetGuests');
  }

  addGuest(addGuestrequest:Guest):Observable<Guest>{
    
    return this.http.post<Guest>(this.baseApiUrl+'/AddGuest',addGuestrequest);
  }
  GetGuest(Guest_Id: string):Observable<Guest>{
    return this.http.get<Guest>(this.baseApiUrl+'/api/Guest/'+Guest_Id)
  }
  updateGuest(Guest_Id:any,updateGuestrequest:Guest): Observable<Guest>{
    return this.http.put<Guest>(this.baseApiUrl+'/UpdateGuest?Guestid='+Guest_Id,updateGuestrequest);
  }
  GetGuestDetails(): Observable<Guest[]>{
    return this.http.get<Guest[]>(this.baseApiUrl +'/AllGuests');
  }
  
  }

