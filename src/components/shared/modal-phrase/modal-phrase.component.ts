import { Component } from '@angular/core';
import { ModalService } from '../../../core/services/modal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-phrase',
  imports: [CommonModule],
  templateUrl: './modal-phrase.component.html',
  styleUrl: './modal-phrase.component.css'
})
export class ModalPhraseComponent {
  isOpen = false;
  content = '';
  foxType = 1;

  constructor(private modalService: ModalService) {
    this.modalService.modalPhraseState$.subscribe(state => {
      this.isOpen = state.isOpen;
      this.content = state.content;
      this.foxType = state.foxType;
    });
  }

  close() {
    this.modalService.closeModalPhrase();
  }

  getFoxImage(): string {
    switch(this.foxType) {
      case 1: return './avif/pet/fox_modal_1.avif';
      case 2: return './avif/pet/fox_modal_2.avif';
      case 3: return './avif/pet/fox_modal_3.avif';
      case 4: return './avif/pet/fox_modal_4.avif';
      case 5: return './avif/pet/fox_modal_5.avif';
      default: return './avif/pet/fox_modal_1.avif';
    }
  }
}
