import { Component, OnInit, Inject } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';

@Component({
  selector: 'app-pass-step',
  templateUrl: './pass-step.component.html',
  styleUrls: ['./pass-step.component.scss'],
})
export class PassStepComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<PassStepComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { continue: boolean, save: boolean }
  ) {}

  ngOnInit(): void {}

  onNoClick() {
    this.data.continue = false;
    this.data.save = false;
    this.dialogRef.close(this.data);
  }

  continueStep(event: Event) {
    event.preventDefault();
    this.data.continue = true; 
    this.data.save = true;
    this.dialogRef.close(this.data);
  }

  continueOnly(event: Event) {
    event.preventDefault();
    this.data.continue = true; 
    this.data.save = false;
    this.dialogRef.close(this.data);
  }
}
