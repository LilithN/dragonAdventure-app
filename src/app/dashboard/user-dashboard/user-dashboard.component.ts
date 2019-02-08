import { Component } from '@angular/core';

@Component({
  selector: 'da-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {

mapScreen = false;
buttons = true;
rules = false;
buttonName: any = 'Rules';

rulesButton() {
  this.rules = !this.rules;
  if (this.rules) {
    this.buttonName = 'Hide Rules';
  } else {
    this.buttonName = 'Rules';
  }
}

startButton() {
  this.buttons = false;
  this.mapScreen = true;
}
}
