import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgChartsModule } from 'ng2-charts';

import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficaComponent } from './grafica/grafica.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages.routing';
import { ComponentsModule } from '../components/components.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
  declarations: [
    ProgressComponent,
    DashboardComponent,
    GraficaComponent,
    PagesComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent
  ],
  exports: [
    ProgressComponent,
    DashboardComponent,
    GraficaComponent,
    PagesComponent,
    AccountSettingsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    PagesRoutingModule,
    FormsModule,
    NgChartsModule
  ],
})
export class PagesModule { }
