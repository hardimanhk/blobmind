import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Thought } from '../thought.model';

@Component({
  selector: 'app-thought-dialog',
  templateUrl: './thought-dialog.component.html',
  styleUrls: ['./thought-dialog.component.css']
})
export class ThoughtDialogComponent implements OnInit {
  newestThought: String = '';

  constructor(
    public dialogRef: MatDialogRef<ThoughtDialogComponent>) { }

  ngOnInit() {
  }

  addThought(): void {
    this.dialogRef.close(this.newestThought);
  }

}
