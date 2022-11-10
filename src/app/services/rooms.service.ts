import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Room } from '../models/room.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  baseApiUrl: string=environment.baseApiUrl;
  constructor(private http:HttpClient) { }

  getRooms(): Observable<Room[]>{
    return this.http.get<Room[]>(this.baseApiUrl + '/GetRooms')
  }

  addRoom(addroom: Room): Observable<Room[]>{
    addroom.Room_Id=0;
    return this.http.post<Room[]>(this.baseApiUrl+'/AddRoom',addroom);
  }

  getRoom(id:string): Observable<Room>{
    return this.http.get<Room>(this.baseApiUrl+'/api/Room/'+id);
  }

  updateRoom(id:string,updateRoomRequest:Room): Observable<Room>{
    return this.http.put<Room>(this.baseApiUrl+'/UpdateRoom?Roomid='+id,updateRoomRequest)
  }

  deleteRoom(id: any): Observable<Room>{
    return this.http.delete<Room>(this.baseApiUrl+'/DeleteRoom?Roomid='+id);
  }

  getBookedRooms():Observable<Room[]>{
    return this.http.get<Room[]>(this.baseApiUrl+'/BookedRooms');
  }
  getUnBookedRooms():Observable<Room[]>{
    return this.http.get<Room[]>(this.baseApiUrl+'/UnbookedRooms');
  }
  getAllRooms(): Observable<Room[]>{
    return this.http.get<Room[]>(this.baseApiUrl + '/AllRooms')
  }

}
