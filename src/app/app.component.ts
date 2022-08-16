import { Component, OnInit } from '@angular/core';

// set L variable for loading map
declare const L:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-geolocation';

  // positions variables (to use in app.component.html)
  latitude: any 
  longitude: any 
  

  // get position using navigator
  ngOnInit(){
    navigator.geolocation.getCurrentPosition((position =>{
      console.log(`latitude ${position.coords.latitude}, longitude ${position.coords.longitude}`)


      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;

      // loading leaflet map
      let map = L.map('map').setView([this.latitude, this.longitude], 13);

      // load map view
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
      }).addTo(map);

      // marker with current position on map
      var marker = L.marker([this.latitude, this.longitude]).addTo(map);
    }))

    

  }
}
