import { Component } from '@angular/core';
import { MouseEvent, MarkerManager } from '@agm/core';



@Component({
  selector: 'da-map-screen',
  templateUrl: './map-screen.component.html',
  styleUrls: ['./map-screen.component.css']
})

export class MapScreenComponent {

  // Markers

  nadderMarkers: Marker[] = [
    {
      lat: 22.128090,
      lng: -77.891641,
      label: 'Nadder',
      draggable: false,
      visible: true
    }
  ];

  dramillionMarkers: Marker[] = [
    {
      lat: 22.064235,
      lng: -77.860257,
      label: 'Dramillion',
      draggable: false,
      visible: true
    }
  ];

  thunderdrumMarkers: Marker[] = [
    {
      lat: 22.124670,
      lng: -77.980897,
      label: 'Thunderdrum',
      draggable: false,
      visible: true
    }
  ];




  // Map information

  zoom = 11;
  lat = 22.104736;
  lng = -77.924937;
  type = 'satellite';
  maZoom = 11;
  miZoom = 11;
  nadderStory = false;
  nadderZero = false;
  nadderOne = false;
  nadderTwo = false;
  dramillionStory = false;
  dramillionZero = false;
  dramillionOne = false;
  dramillionTwo = false;
  thunderdrumStory = false;
  thunderdrumZero = false;
  thunderdrumOne = false;
  thunderdrumTwo = false;
  nadderVisibility = true;
  dramillionVisibility = false;
  thunderdrumVisibility = false;
  nInfo = false;
  dInfo = false;
  tInfo = false;
  tester = false;


  // Click Events


  nadderClick(label: string, visible: boolean, index: number) {
    const nadNumber = Math.round(Math.random() * 2);
    console.log(`clicked the marker: ${label || index}`);
    console.log('The random story number is ' + nadNumber);
    this.nInfo = true;
    this.dInfo = false;
    this.tInfo = false;
    this.nadderStory = true;
    if (nadNumber === 1) {
      this.nadderOne = true;
      this.nadderTwo = false;
      this.nadderZero = false;
      this.tester = false;
      this.mVisible();
    } else if (nadNumber === 2) {
      this.nadderOne = false;
      this.nadderTwo = true;
      this.nadderZero = false;
      this.tester = false;
      this.mVisible();
    } else {
      this.nadderOne = false;
      this.nadderTwo = false;
      this.nadderZero = true;
      /* this.nadderVisibility = false;
      this.dramillionVisibility = true;
      this.thunderdrumVisibility = false; */
      this.tester = true;
      // this.mVisible();
    }
  }

  dramillionClick(label: string, visible: boolean, index: number) {
    const dramNumber = Math.round(Math.random() * 2);
    console.log(`clicked the marker: ${label || index}`);
    console.log('The random story number is ' + dramNumber);
    this.nInfo = false;
    this.dInfo = true;
    this.tInfo = false;
    this.dramillionStory = true;
    if (dramNumber === 1) {
      this.dramillionOne = true;
      this.dramillionTwo = false;
      this.dramillionZero = false;
      this.tester = false;
      this.mVisible();
    } else if (dramNumber === 2) {
      this.dramillionOne = false;
      this.dramillionTwo = true;
      this.dramillionZero = false;
      this.tester = false;
      this.mVisible();
    } else {
      this.dramillionOne = false;
      this.dramillionTwo = false;
      this.dramillionZero = true;
      /* this.nadderVisibility = false;
      this.dramillionVisibility = false;
      this.thunderdrumVisibility = true; */
      this.tester = true;
      // this.mVisible();
    }
  }

  thunderdrumClick(label: string, visible: boolean, index: number) {
    const thunNumber = Math.round(Math.random() * 2);
    console.log(`clicked the marker: ${label || index}`);
    console.log('The random story number is ' + thunNumber);
    this.nInfo = false;
    this.dInfo = false;
    this.tInfo = true;
    this.thunderdrumStory = true;
    if (thunNumber === 1) {
      this.thunderdrumOne = true;
      this.thunderdrumTwo = false;
      this.thunderdrumZero = false;
      this.tester = false;
      this.mVisible();
    } else if (thunNumber === 2) {
      this.thunderdrumOne = false;
      this.thunderdrumTwo = true;
      this.thunderdrumZero = false;
      this.tester = false;
      this.mVisible();
    } else {
      this.thunderdrumOne = false;
      this.thunderdrumTwo = false;
      this.thunderdrumZero = true;
      /* this.nadderVisibility = true;
      this.dramillionVisibility = false;
      this.thunderdrumVisibility = false; */
      this.tester = true;
      // this.mVisible();
    }
  }

  // Marker Visibility Function
  mVisible() {
    const visNumber = Math.round(Math.random() * 2);
    console.log('The random visibility number is ' + visNumber);
    if (visNumber === 1 && this.tester === false) {
      this.nadderVisibility = false;
      this.dramillionVisibility = true;
      this.thunderdrumVisibility = false;
    } else if (visNumber === 2 && this.tester === false) {
      this.nadderVisibility = true;
      this.dramillionVisibility = false;
      this.thunderdrumVisibility = false;
    } else if (visNumber === 0 && this.tester === false) {
      this.nadderVisibility = false;
      this.dramillionVisibility = false;
      this.thunderdrumVisibility = true;
    } else {
      console.log('End of route');
    }
  }

}



interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  visible: boolean;
}

