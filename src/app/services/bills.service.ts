import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bill } from '../models/bill.model';

@Injectable({
  providedIn: 'root'
})
export class BillsService {

  baseApiUrl: string=environment.baseApiUrl;

  constructor(private http:HttpClient) { }

  getBill():Observable<Bill[]>{
    return this.http.get<Bill[]>(this.baseApiUrl+'/GetBill')
  }

  addBill(Guest_Id:any,Reservation_Id:any,addbillrequest:Bill):Observable<Bill>{
    addbillrequest.Bill_Id=0;
    return this.http.post<Bill>(this.baseApiUrl+'/AddBill?CheckGuestId='+Guest_Id+'&CheckReservationId='+Reservation_Id,
    addbillrequest);
  }

  getBillById(id:any):Observable<Bill>{
    return this.http.get<Bill>(this.baseApiUrl+'/api/Bill/'+id);
  }

  updateBill(Bill_Id:any,Guest_Id:any,Reservation_Id:any,updateBillRequest:Bill):Observable<Bill>{
    return this.http.put<Bill>(this.baseApiUrl+'/UpdateBill?Billid='
    +Bill_Id+'&CheckGuestId='+Guest_Id+'&CheckReservationId='+Reservation_Id,updateBillRequest);
  }

  deleteBill(id:any):Observable<Bill>{
    return this.http.delete<Bill>(this.baseApiUrl+'/DeleteBill?Billid='+id);
  }
}
