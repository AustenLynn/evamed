import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstructionStageUpdateRoutingModule } from './construction-stage-update-routing.module';
import { ConstructionStageUpdateComponent } from './components/construction-stage-update/construction-stage-update.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IntermedialComponent } from './components/intermedial/intermedial.component';
import { PassStepComponent } from './components/pass-step/pass-step.component';

@NgModule({
    declarations: [ConstructionStageUpdateComponent, IntermedialComponent, PassStepComponent],
    imports: [
        CommonModule,
        ConstructionStageUpdateRoutingModule,
        SharedModule,
        FormsModule,
        MaterialModule,
        MatTooltipModule,
    ],
    exports: [ConstructionStageUpdateComponent, IntermedialComponent, PassStepComponent]
})
export class ConstructionStageUpdateModule {}
