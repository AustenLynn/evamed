import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatLegacySlideToggleModule as MatSlideToggleModule} from '@angular/material/legacy-slide-toggle';

import { CompararRoutingModule } from './comparar-routing.module';
import { CompararComponent } from './component/comparar/comparar.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from './../material/material.module';
import { FormsModule } from '@angular/forms';
import { PieChartComponent } from '../pie-chart/pie-chart.component';
import { RadialChartComponent } from '../radial-chart/radial-chart.component';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { BarChartSimpleComponent } from '../bar-chart-simple/bar-chart-simple.component';
import {MatLegacyCheckboxModule as MatCheckboxModule} from '@angular/material/legacy-checkbox';
import { GraficasTercerSeccionComponent } from './component/graficas-tercer-seccion/graficas-tercer-seccion.component';
import { ImageEdificioComponent } from '../image-edificio/image-edificio.component';


@NgModule({
    declarations: [
        CompararComponent,
        PieChartComponent,
        RadialChartComponent,
        BarChartComponent,
        BarChartSimpleComponent,
        GraficasTercerSeccionComponent,
        ImageEdificioComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        CompararRoutingModule,
        MaterialModule,
        FormsModule,
        ChartsModule,
        MatTabsModule,
        MatMenuModule,
        MatButtonToggleModule,
        MatSelectModule,
        ScrollingModule,
        MatCheckboxModule,
        MatSlideToggleModule
    ],
    exports: [
        CompararComponent,
    ]
})
export class CompararModule { }
