import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficaComponent } from './grafica/grafica.component';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages.routing';

@NgModule({
  declarations: [
    ProgressComponent,
    DashboardComponent,
    GraficaComponent,
    MainComponent
  ],
  exports: [
    ProgressComponent,
    DashboardComponent,
    GraficaComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule
  ],
})
export class PagesModule { }
