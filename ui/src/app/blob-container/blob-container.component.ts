import { Component, OnInit } from '@angular/core';
import { BlobDialogComponent } from './blob-dialog/blob-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-blob-container',
  templateUrl: './blob-container.component.html',
  styleUrls: ['./blob-container.component.css']
})
export class BlobContainerComponent implements OnInit {
  name: string = '';

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const blobDialogRef = this.dialog.open(BlobDialogComponent, {
      width: '500px',
      data: {name: this.name}
    });

    blobDialogRef.afterClosed().subscribe(result => {
      this.name = result;
    });
  }

}
