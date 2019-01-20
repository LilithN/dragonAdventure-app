import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MapScreenComponent } from './map-screen/map-screen.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { DragonInfoComponent } from './dragon-info/dragon-info.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'Enter your own API Key here'
    })
  ],
  declarations: [MapScreenComponent, UserDashboardComponent, DragonInfoComponent]
})
export class DashboardModule { }
