import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-blob-dialog',
  templateUrl: './blob-dialog.component.html',
  styleUrls: ['./blob-dialog.component.css']
})
export class BlobDialogComponent implements OnInit {
  firstPage: boolean = true;

  constructor(public dialogRef: MatDialogRef<BlobDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }

  showNext() {
    this.firstPage = false;
  }

}
