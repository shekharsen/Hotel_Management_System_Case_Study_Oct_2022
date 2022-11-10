import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-show',
  templateUrl: './owner-show.component.html',
  styleUrls: ['./owner-show.component.css']
})
export class OwnerShowComponent implements OnInit {

  constructor(private router:Router) { 
     let token=localStorage.getItem("token")
     if (token==null){
       this.router.navigate(['/login'])   
       alert("Please Login First")
    }
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login'])
  }

  ngOnInit(): void {
    if(localStorage.getItem("role")=="Owner"){

    }
    else{
      alert("You are not authorized to view this page, please login first")
      this.router.navigate(['/login'])
      localStorage.clear()
    }
  }

}
