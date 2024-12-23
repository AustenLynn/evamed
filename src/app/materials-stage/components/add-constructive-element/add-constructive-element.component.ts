import { Component, OnInit, Inject } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';

export interface DialogData {
  newConstructiveElement: string;
  newConstructiveSystem: string;
}

@Component({
  selector: 'app-add-constructive-element',
  templateUrl: './add-constructive-element.component.html',
  styleUrls: ['./add-constructive-element.component.scss']
})
export class AddConstructiveElementComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddConstructiveElementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close(this.data);
  }

}
