import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManagerLoginComponent } from './Components/manager-login/manager-login.component';
import { ReceptionistLoginComponent } from './Components/receptionist-login/receptionist-login.component';
import { GuestListComponent } from './Components/Guest/guest-list/guest-list.component';
import { AddGuestComponent } from './Components/Guest/add-guest/add-guest.component';
import { UpdateGuestComponent } from './Components/Guest/update-guest/update-guest.component';
import { GetReservationComponent } from './Components/Reservation/get-reservation/get-reservation.component';
import { AddReservationComponent } from './Components/Reservation/add-reservation/add-reservation.component';
import { EditReservationComponent } from './Components/Reservation/edit-reservation/edit-reservation.component';
import { GetReceptionistComponent } from './Components/Employees/get-receptionist/get-receptionist.component';
import { AddReceptionistComponent } from './Components/Employees/add-receptionist/add-receptionist.component';
import { UpdateReceptionistComponent } from './Components/Employees/update-receptionist/update-receptionist.component';
import { EmployeeListComponent } from './Components/owner/employee-list/employee-list.component';
import { AddEmployeeComponent } from './Components/owner/add-employee/add-employee.component';
import { EditEmployeeComponent } from './Components/owner/edit-employee/edit-employee.component';
import { BillListComponent } from './Components/bill/bill-list/bill-list.component';
import { AddBillComponent } from './Components/bill/add-bill/add-bill.component';
import { EditBillComponent } from './Components/bill/edit-bill/edit-bill.component';
import { RoomListComponent } from './Components/rooms/room-list/room-list.component';
import { AddRoomComponent } from './Components/rooms/add-room/add-room.component';
import { EditRoomComponent } from './Components/rooms/edit-room/edit-room.component';
import { BookedRoomsComponent } from './Components/rooms/booked-rooms/booked-rooms.component';
import { UnbookedRoomsComponent } from './Components/rooms/unbooked-rooms/unbooked-rooms.component';
import { PaymentListComponent } from './Components/Payment/payment-list/payment-list.component';
import { AddPaymentComponent } from './Components/Payment/add-payment/add-payment.component';
import { EditPaymentComponent } from './Components/Payment/edit-payment/edit-payment.component';
import { OwnerShowComponent } from './components/owner-show/owner-show.component';
import { ManagerShowComponent } from './components/manager-show/manager-show.component';
import { ReceptionistShowComponent } from './components/receptionist-show/receptionist-show.component';
//import { loginInterceptor } from './services/login.interceptor';
import { AllGuestComponent } from './Components/Owner/all-guest/all-guest.component';
import { AllRoomsComponent } from './Components/Owner/all-rooms/all-rooms.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

// import { FilterPipe } from './shared/filter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ManagerLoginComponent,
    ReceptionistLoginComponent,
    GuestListComponent,
    AddGuestComponent,
    UpdateGuestComponent,
    GetReservationComponent,
    AddReservationComponent,
    EditReservationComponent,
    GetReceptionistComponent,
    AddReceptionistComponent,
    UpdateReceptionistComponent,
    
    EmployeeListComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    BillListComponent,
    AddBillComponent,
    EditBillComponent,
    RoomListComponent,
    AddRoomComponent,
    EditRoomComponent,
    BookedRoomsComponent,
    UnbookedRoomsComponent,
    PaymentListComponent,
    AddPaymentComponent,
    EditPaymentComponent,
    OwnerShowComponent,
    ManagerShowComponent,
    ReceptionistShowComponent,
    AllGuestComponent,
    AllRoomsComponent,
    // FilterPipe,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
// { provide: HTTP_INTERCEPTORS, useClass: loginInterceptor, multi: true }