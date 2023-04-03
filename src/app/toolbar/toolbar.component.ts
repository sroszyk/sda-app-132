import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  @Input() isActive: boolean = false;
  @Output() onStartClick: EventEmitter<boolean> = new EventEmitter();

  onStart(): void {
    this.onStartClick.emit(true);
  }
}
