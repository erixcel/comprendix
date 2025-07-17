import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-option-number',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './option-number.component.html',
  styleUrls: ['./option-number.component.css']
})
export class OptionNumberComponent {
  @Input() number!: number;
  @Input() direction: 'horizontal' | 'vertical' = 'horizontal';
  @Input() colorClasses!: { bg: string, hover: string };
}
