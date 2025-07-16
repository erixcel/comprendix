import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OptionNumberComponent } from '../option-number/option-number.component';

@Component({
  selector: 'app-options-horizontal',
  standalone: true,
  imports: [CommonModule, OptionNumberComponent],
  templateUrl: './options-horizontal.component.html',
  styleUrls: ['./options-horizontal.component.css']
})
export class OptionsHorizontalComponent {
  @Input() count!: number;
  @Output() select = new EventEmitter<number>();

  @Input() colorFunction!: (index: number) => { bg: string, hover: string };

  get numbers(): number[] {
    return Array.from({ length: this.count }, (_, i) => i);
  }

  getColorClasses(index: number) {
    return this.colorFunction(index);
  }
}
