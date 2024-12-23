import { Component, OnInit, Inject } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { MaterialsService } from './../../../core/services/materials/materials.service';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';

export interface DialogData {
  name_type_energy: string;
}

@Component({
  selector: 'app-add-energy',
  templateUrl: './add-energy.component.html',
  styleUrls: ['./add-energy.component.scss'],
})
export class AddEnergyComponent implements OnInit {
  form: UntypedFormGroup;

  constructor(
    private materialsService: MaterialsService,
    private formBuilder: UntypedFormBuilder,
    public dialogRef: MatDialogRef<AddEnergyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.buildForm();
  }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close(this.data);
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name_type_energy: [null, Validators.required],
    });
  }

  addEnergy(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const energy = this.form.value;
      this.materialsService.addTypeEnergy(energy).subscribe((data) => {
        this.onNoClick();
      });
    }
  }
}
