import { Component, OnInit, Inject } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { MaterialsService } from './../../../../core/services/materials/materials.service';

export interface DialogData {
  id: number;
}

@Component({
  selector: 'app-delete-potential-energy',
  templateUrl: './delete-potential-energy.component.html',
  styleUrls: ['./delete-potential-energy.component.scss'],
})
export class DeletePotentialEnergyComponent implements OnInit {
  constructor(
    private materialsService: MaterialsService,
    public dialogRef: MatDialogRef<DeletePotentialEnergyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close(this.data);
  }

  deletePotential(event: Event, id: number) {
    event.preventDefault();
    this.materialsService.deleteTypeEnergyData(id).subscribe((data) => {
      this.onNoClick();
    });
  }
}
