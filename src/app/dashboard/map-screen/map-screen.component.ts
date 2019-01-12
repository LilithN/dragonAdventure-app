import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'da-map-screen',
  templateUrl: './map-screen.component.html',
  styleUrls: ['./map-screen.component.css']
})
export class MapScreenComponent {

  zoom = 12;
  lat = 22.104736;
  lng = -77.924937;
  type = 'satellite';
  maZoom = 12;
  miZoom = 12;

  constructor() {}

  }
