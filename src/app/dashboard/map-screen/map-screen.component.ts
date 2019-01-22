import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';

// Nadder JavaScript Data
function nadder () {
  document.getElementById('changeText').innerHTML = 'Nadder text!';
}

// Dramillion JavaScript Data
function dramillion () {
  document.getElementById('changeText').innerHTML = 'Dramillion text!';
}

// Thunderdrum JavaScript Data
function thunderdrum () {
  document.getElementById('changeText').innerHTML = 'Thunderdrum text!';
}


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

/* Map information */

  zoom = 11;
  lat = 22.104736;
  lng = -77.924937;
  type = 'satellite';
  maZoom = 11;
  miZoom = 11;

 /*  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  } */

/* Dragon marker click functions */

  dragonClick(label: string) {
    if (label === 'Nadder') {
      console.log('clicked on Nadder');
      nadder();
    } else if (label === 'Thunderdrum') {
      console.log('clicked on Thunderdrum');
      thunderdrum();
    } else if (label === 'Dramillion') {
      console.log('clicked on Dramillion');
      dramillion();
    } else {
      console.log('other');
    }
  }

}



interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

