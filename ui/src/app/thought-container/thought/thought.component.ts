import { Component, OnInit, Input } from '@angular/core';
import { Thought } from '../thought.model';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent implements OnInit {
  @Input() singleThought: Thought;

  constructor() { }

  ngOnInit() {}

}
