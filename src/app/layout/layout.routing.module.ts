import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'scanner', pathMatch: 'prefix' },
            { path: 'scanner', loadChildren: './wms-dashboard/wms-dashboard.module#WmsDashboardModule' },
            { path: 'reports', loadChildren: './reports/reports.module#ReportsModule' },
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' }          
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
