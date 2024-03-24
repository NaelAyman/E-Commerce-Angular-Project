import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {

  @Input() title: any;
  @Input() data: any = [];
  @Output() selectedValue = new EventEmitter();


  detectedChanges(event: any) {
    this.selectedValue.emit(event);
  }
}
