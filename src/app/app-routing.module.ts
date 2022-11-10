import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { ManagerLoginComponent } from './Components/manager-login/manager-login.component';

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
import { ReceptionistLoginComponent } from './Components/receptionist-login/receptionist-login.component';
import { OwnerShowComponent } from './components/owner-show/owner-show.component';
import { ManagerShowComponent } from './components/manager-show/manager-show.component';
import { ReceptionistShowComponent } from './components/receptionist-show/receptionist-show.component';
import { AllGuestComponent } from './Components/Owner/all-guest/all-guest.component';
import { AllRoomsComponent } from './Components/Owner/all-rooms/all-rooms.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'managerlogin', component: ManagerLoginComponent },
  { path: 'receptionlogin', component: ReceptionistLoginComponent },
  {
    path:'Guest',
    component: GuestListComponent
  },
  {
    path:'Guest/add',
    component: AddGuestComponent
  },
  {
    path:'Guest/update/:Guest_Id',
    component: UpdateGuestComponent
  },
  {
    path:'Reservation',
    component: GetReservationComponent
  },
  {
    path:'Reservation/add/:Room_Id/:Guest_Id',
    component: AddReservationComponent
  },
  {
    path:'Reservation/update/:Reservation_Id/:Room_Id/:Guest_Id',
    component: EditReservationComponent
  },
  {
    path:'Employee',
    component: GetReceptionistComponent
  },
  {
    path:'Employee/add',
    component: AddReceptionistComponent
  },
  {
    path:'Employee/update/:Employee_Id',
    component: UpdateReceptionistComponent
  },
  {
    path: 'Department',
    component: EmployeeListComponent
  },
  {
    path: 'Department/add',
    component:AddEmployeeComponent
  },
  {
    path: 'Department/edit/:Employee_Id',
    component: EditEmployeeComponent
  },
  {
    path: 'Bill',
    component:BillListComponent
  },
  {
    path: 'Bill/add',
    component:AddBillComponent
  },
  {
    path: 'Bill/edit/:Bill_Id',
    component: EditBillComponent
  },
  {
    path: 'Rooms',
    component: RoomListComponent
  },
  {
    path: 'Rooms/add',
    component:AddRoomComponent
  },
  {
    path: 'Rooms/edit/:Room_Id',
    component: EditRoomComponent
  },
  {
    path: 'Rooms/BookedRoom',
    component: BookedRoomsComponent
  },
  {
    path: 'Rooms/UnbookedRoom',
    component: UnbookedRoomsComponent
  },
  {
    path: 'Payment',
    component: PaymentListComponent
  },
  {
    path: 'Payment/add',
    component: AddPaymentComponent
  },
  {
    path: 'Payment/edit',
    component: EditPaymentComponent
  },
  {
    path: 'owner',
    component: OwnerShowComponent
  },
  {
    path: 'Manager',
    component: ManagerShowComponent
  },
  {
    path: 'Receptionist',
    component: ReceptionistShowComponent
  },
  {
    path: 'AllGuest',
    component: AllGuestComponent
  },
  {
    path: 'AllRooms',
    component: AllRoomsComponent
  }      
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
