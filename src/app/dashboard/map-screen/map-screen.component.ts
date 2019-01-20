import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';




@Component({
  selector: 'da-map-screen',
  templateUrl: './map-screen.component.html',
  styleUrls: ['./map-screen.component.css']
})

export class MapScreenComponent {

  markers: marker[] = [
    {
      lat: 22.128090,
      lng: -77.891641,
      label: 'Nadder',
      draggable: false
    },
    {
      lat: 22.124670,
      lng: -77.980897,
      label: 'Thunderdrum',
      draggable: false
    },
    {
      lat: 22.064235,
      lng: -77.860257,
      label: 'Dramillion',
      draggable: false
    }
  ];

  zoom = 11;
  lat = 22.104736;
  lng = -77.924937;
  type = 'satellite';
  maZoom = 11;
  miZoom = 11;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }


}

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

