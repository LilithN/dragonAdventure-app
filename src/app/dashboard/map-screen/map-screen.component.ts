import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';

// const randomNumber = Math.round( Math.random() * 2 );

// Nadder JavaScript Data
/* function nadder () {
  const nadderNumber = Math.round( Math.random() * 2 );
  document.getElementById('nadderTextBlock').style.display = 'inline-block';
  document.getElementById('dramillionTextBlock').style.display = 'none';
    document.getElementById('thunderdrumTextBlock').style.display = 'none';
  if (nadderNumber === 0) {
    document.getElementById('nadderText1').style.display = 'inline-block';
    document.getElementById('nadderText2').style.display = 'none';
    document.getElementById('nadderText3').style.display = 'none';
  } else if (nadderNumber === 1) {
    document.getElementById('nadderText1').style.display = 'none';
    document.getElementById('nadderText2').style.display = 'inline-block';
    document.getElementById('nadderText3').style.display = 'none';
  } else {
    document.getElementById('nadderText1').style.display = 'none';
    document.getElementById('nadderText2').style.display = 'none';
    document.getElementById('nadderText3').style.display = 'inline-block';
  }
  console.log (nadderNumber);
} */

// Dramillion JavaScript Data
/* function dramillion () {
  const dramillionNumber = Math.round( Math.random() * 2 );
  document.getElementById('dramillionTextBlock').style.display = 'inline-block';
  document.getElementById('nadderTextBlock').style.display = 'none';
    document.getElementById('thunderdrumTextBlock').style.display = 'none';
  if (dramillionNumber === 0) {
    document.getElementById('dramillionText1').style.display = 'inline-block';
    document.getElementById('dramillionText2').style.display = 'none';
    document.getElementById('dramillionText3').style.display = 'none';
  } else if (dramillionNumber === 1) {
    document.getElementById('dramillionText1').style.display = 'none';
    document.getElementById('dramillionText2').style.display = 'inline-block';
    document.getElementById('dramillionText3').style.display = 'none';
  } else {
    document.getElementById('dramillionText1').style.display = 'none';
    document.getElementById('dramillionText2').style.display = 'none';
    document.getElementById('dramillionText3').style.display = 'inline-block';
  }
  console.log (dramillionNumber);
  } */

// Thunderdrum JavaScript Data
/* function thunderdrum () {
  const thunderdrumNumber = Math.round( Math.random() * 2 );
  document.getElementById('thunderdrumTextBlock').style.display = 'inline-block';
  document.getElementById('dramillionTextBlock').style.display = 'none';
    document.getElementById('nadderTextBlock').style.display = 'none';
  if (thunderdrumNumber === 0) {
    document.getElementById('thunderdrumText1').style.display = 'inline-block';
    document.getElementById('thunderdrumText2').style.display = 'none';
    document.getElementById('thunderdrumText3').style.display = 'none';
  } else if (thunderdrumNumber === 1) {
    document.getElementById('thunderdrumText1').style.display = 'none';
    document.getElementById('thunderdrumText2').style.display = 'inline-block';
    document.getElementById('thunderdrumText3').style.display = 'none';
  } else {
    document.getElementById('thunderdrumText1').style.display = 'none';
    document.getElementById('thunderdrumText2').style.display = 'none';
    document.getElementById('thunderdrumText3').style.display = 'inline-block';
  }
  console.log (thunderdrumNumber);
} */


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
    }/* ,
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
    } */
  ];

/* Map information */

  zoom = 11;
  lat = 22.104736;
  lng = -77.924937;
  type = 'satellite';
  maZoom = 11;
  miZoom = 11;
  showDragons = false;

 /*  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  } */

/* Dragon marker click functions */

/*   dragonClick(label: string) {
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
  } */
dragonClick(label: string) {
  const nadderNumber = Math.round( Math.random() * 2 );
  if (nadderNumber === 1) {
    console.log(nadderNumber);
    return this.showDragons;
  } else {
    console.log(nadderNumber);
  }
}


}



interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

