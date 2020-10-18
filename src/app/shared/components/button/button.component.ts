import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() display;
  @Input() isDisabled;
  @Output() buttonClick = new EventEmitter();

  click(): void {
    this.buttonClick.emit();
  }
}
