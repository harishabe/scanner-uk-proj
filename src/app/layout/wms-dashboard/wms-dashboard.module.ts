import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../../material';
import { WmsDashboardComponent } from './wms-dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: WmsDashboardComponent
    }
];

@NgModule({
    imports: [CommonModule, FlexLayoutModule, MaterialModule, RouterModule.forChild(routes)],
    declarations: [WmsDashboardComponent]
})
export class WmsDashboardModule { }
