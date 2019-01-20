import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MapScreenComponent } from './map-screen/map-screen.component';
import { DragonsComponent } from './dragons/dragons.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    DragonsComponent,
    AgmCoreModule.forRoot({
      apiKey: 'Inter your API Key Here'
    })
  ],
  declarations: [MapScreenComponent, UserDashboardComponent]
})
export class DashboardModule { }
