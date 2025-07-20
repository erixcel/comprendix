import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-action-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './action-item.component.html',
  styleUrls: ['./action-item.component.css']
})
export class ActionItemComponent {
  @Input() iconUrl!: string;
  @Input() direction: 'horizontal' | 'vertical' = 'horizontal';
  @Input() colorClasses!: { bg: string; border: string };
  
  @Input() handler?: () => void;

  triggerAction() {
    if (this.handler) this.handler();
  }
}
