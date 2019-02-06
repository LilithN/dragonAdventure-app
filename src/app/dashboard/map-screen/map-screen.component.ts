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
  dramillionVisibility = true;
  thunderdrumVisibility = true;
  nInfo = false;
  dInfo = false;
  tInfo = false;



  // Click Events


  nadderClick(label: string, visible: boolean, index: number) {
    const randomNumber = Math.round(Math.random() * 2);
    console.log(`clicked the marker: ${label || index}`);
    this.nInfo = true;
    this.dInfo = false;
    this.tInfo = false;
    if (randomNumber === 1) {
      console.log(randomNumber);
      this.nadderStory = true;
      this.nadderOne = true;
      this.nadderTwo = false;
      this.nadderZero = false;
    } else if (randomNumber === 2) {
      console.log(randomNumber);
      this.nadderStory = true;
      this.nadderOne = false;
      this.nadderTwo = true;
      this.nadderZero = false;
    } else {
      console.log(randomNumber);
      this.nadderStory = true;
      this.nadderOne = false;
      this.nadderTwo = false;
      this.nadderZero = true;
    }
  }

  dramillionClick(label: string, visible: boolean, index: number) {
    const randomNumber = Math.round(Math.random() * 2);
    console.log(`clicked the marker: ${label || index}`);
    this.nInfo = false;
    this.dInfo = true;
    this.tInfo = false;
    if (randomNumber === 1) {
      console.log(randomNumber);
      this.dramillionStory = true;
      this.dramillionOne = true;
      this.dramillionTwo = false;
      this.dramillionZero = false;
    } else if (randomNumber === 2) {
      console.log(randomNumber);
      this.dramillionStory = true;
      this.dramillionOne = false;
      this.dramillionTwo = true;
      this.dramillionZero = false;
    } else {
      console.log(randomNumber);
      this.dramillionStory = true;
      this.dramillionOne = false;
      this.dramillionTwo = false;
      this.dramillionZero = true;
    }
  }

  thunderdrumClick(label: string, visible: boolean, index: number) {
    const randomNumber = Math.round(Math.random() * 2);
    console.log(`clicked the marker: ${label || index}`);
    this.nInfo = false;
    this.dInfo = false;
    this.tInfo = true;
    if (randomNumber === 1) {
      console.log(randomNumber);
      this.thunderdrumStory = true;
      this.thunderdrumOne = true;
      this.thunderdrumTwo = false;
      this.thunderdrumZero = false;
    } else if (randomNumber === 2) {
      console.log(randomNumber);
      this.thunderdrumStory = true;
      this.thunderdrumOne = false;
      this.thunderdrumTwo = true;
      this.thunderdrumZero = false;
    } else {
      console.log(randomNumber);
      this.thunderdrumStory = true;
      this.thunderdrumOne = false;
      this.thunderdrumTwo = false;
      this.thunderdrumZero = true;
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

