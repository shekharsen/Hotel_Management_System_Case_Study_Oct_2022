import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Reservation } from '../models/Reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

    baseApiUrl:string=environment.baseApiUrl;
  constructor(private http:HttpClient) { }
  getallReservation():Observable<Reservation[]>{
   return  this.http.get<Reservation[]>(this.baseApiUrl +'/GetReservations');
  }

  addReservation(Guest_Id:any,Room_Id:any,addreservationrequest:Reservation):Observable<Reservation>{
    addreservationrequest.Reservation_Id=0;
    return this.http.post<Reservation>(this.baseApiUrl+'/AddReservation?CheckRoomId='+Room_Id+'&CheckGuestId='+Guest_Id,addreservationrequest);
  }
  GetReservation(Reservation_Id: any):Observable<Reservation>{
    return this.http.get<Reservation>(this.baseApiUrl+'/api/Reservation/'+Reservation_Id);
  }
  updateReservation(Room_Id:any,Guest_Id:any,Reservation_Id:any,updateReservationRequest:Reservation):Observable<Reservation>{
    return this.http.put<Reservation>(this.baseApiUrl+'/UpdateReservation?Reservationid='
    +Reservation_Id+'&CheckRoomId='+Room_Id+'&CheckGuestId='+Guest_Id,updateReservationRequest);
  }
  DeleteReservation(Reservation_Id:any):Observable<Reservation>{
    return this.http.post<Reservation>(this.baseApiUrl+'/CancelReservation?Reservationid='+Reservation_Id,Reservation_Id);

  }
}
