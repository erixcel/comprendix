import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActionItemComponent } from '../action-item/action-item.component';
import { ActionName, actions } from '../../../core/constants/action.config';

@Component({
  selector: 'app-actions-horizontal',
  standalone: true,
  imports: [CommonModule, ActionItemComponent],
  templateUrl: './actions-horizontal.component.html',
})
export class ActionsHorizontalComponent {
  actions = actions;
  @Input() actionHandlers: { [K in ActionName]?: () => void } = {};
}
