import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receptionist-show',
  templateUrl: './receptionist-show.component.html',
  styleUrls: ['./receptionist-show.component.css']
})
export class ReceptionistShowComponent implements OnInit {

  constructor(private router:Router) { }
  logout(){
    localStorage.clear();
    this.router.navigate(['/login'])
  }

  ngOnInit(): void {
    if(localStorage.getItem("role")=="Receptionist"){

    }
    else{
      alert("You are not authorized to view this page, please login first")
      this.router.navigate(['/login'])
      localStorage.clear()
    }
    
  }

}
