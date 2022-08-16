import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-geolocation';

  // positions variables
  latitude: any 
  longitude: any 

  // get position using navigator
  ngOnInit(){
    navigator.geolocation.getCurrentPosition((position =>{
      console.log(`latitude ${position.coords.latitude}, longitude ${position.coords.longitude}`)


      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    }))

    

  }
}
