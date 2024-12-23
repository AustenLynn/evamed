import { Component, OnInit, Inject } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { MaterialsService } from './../../../core/services/materials/materials.service';

export interface DialogData {
  id: number;
  name_type_energy: string;
}

@Component({
  selector: 'app-delete-energy',
  templateUrl: './delete-energy.component.html',
  styleUrls: ['./delete-energy.component.scss'],
})
export class DeleteEnergyComponent implements OnInit {
  constructor(
    private materialsService: MaterialsService,
    public dialogRef: MatDialogRef<DeleteEnergyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close(this.data);
  }

  deleteEnergy(event: Event, id: number) {
    event.preventDefault();
    this.materialsService.deleteTypeEnergy(id).subscribe((data) => {
      this.onNoClick();
    });
  }
}
