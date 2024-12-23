import { Component, OnInit, Inject } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { MaterialsService } from './../../../core/services/materials/materials.service';

export interface DialogData {
  id: number;
  name_transport: string;
}

@Component({
  selector: 'app-delete-transport',
  templateUrl: './delete-transport.component.html',
  styleUrls: ['./delete-transport.component.scss'],
})
export class DeleteTransportComponent implements OnInit {
  constructor(
    private materialsService: MaterialsService,
    public dialogRef: MatDialogRef<DeleteTransportComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close(this.data);
  }

  deleteTransport(event: Event, id: number) {
    event.preventDefault();
    this.materialsService.deleteTransport(id).subscribe((data) => {
      this.onNoClick();
    });
  }
}
