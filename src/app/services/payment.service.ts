import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Payment } from '../models/payment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  BaseApi: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllPayment(): Observable<Payment[]> {
    return this.http.get<Payment[]>(this.BaseApi + '/GetPaymentDetails');

  }
  addPayment(addpayment: Payment): Observable<Payment[]>{
    addpayment.Payment_Id=0;
    return this.http.post<Payment[]>(this.BaseApi+'/AddPaymentDetails?CheckBillId=' + addpayment.Bill_Id,addpayment);
  }

}
