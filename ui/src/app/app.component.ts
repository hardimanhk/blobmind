import { Component } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
public style: object = {};

  onResizeEnd(event: ResizeEvent): void {
    this.style = {
      position: 'absolute',
      top: `${event.rectangle.top}px`
    }
  }
}
