import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ThoughtDialogComponent } from './thought-dialog/thought-dialog.component';
import { ThoughtService } from './thought.service';
import { Thought } from './thought.model';

@Component({
  selector: 'app-thought-container',
  templateUrl: './thought-container.component.html',
  styleUrls: ['./thought-container.component.css']
})
export class ThoughtContainerComponent implements OnInit {
  thoughts: Thought[] = [];

  constructor(
    public thoughtService: ThoughtService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.thoughts = this.thoughtService.getThoughts();
    this.thoughtService.thoughtsChanged.subscribe(
      (newThoughts: Thought[]) => {
        this.thoughts = newThoughts;
      }
    )
  }

  openDialog(): void {
    const thoughtDialogRef = this.dialog.open(ThoughtDialogComponent, {
      width: '500px'
    });

    thoughtDialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.thoughtService.addThought({content: result});
    });
  }

}
