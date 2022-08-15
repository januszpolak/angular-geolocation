import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-geolocation';


  ngOnInit(){
    navigator.geolocation.getCurrentPosition((position =>{
      console.log(`latitude ${position.coords.latitude}, longitude ${position.coords.longitude}`)
    }))
  }
}
