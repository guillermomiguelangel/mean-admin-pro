import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficaComponent } from './grafica/grafica.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent, data: {title:'Dashboard'} },
            { path: 'progress', component: ProgressComponent,data: {title:'Progress'} },
            { path: 'grafica', component: GraficaComponent,data: {title:'Grafica'} },
            { path: 'account', component: AccountSettingsComponent,data: {title:'Account'} },
            { path: 'promises', component: PromesasComponent,data: {title:'Promesas'} },
            { path: 'rxjs', component: RxjsComponent,data: {title:'RxJs'} }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
