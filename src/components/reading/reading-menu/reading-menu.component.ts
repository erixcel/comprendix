import { ConfigurationService } from '../../../core/services/configuration.service';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { NavigationService } from '../../../core/services/navigation.service';
import { Reading } from '../../../core/model/configuration';

@Component({
  selector: 'app-reading-menu',
  imports: [CommonModule],
  templateUrl: './reading-menu.component.html',
  styleUrl: './reading-menu.component.css',
  providers: [ConfigurationService]
})
export class ReadingMenuComponent implements OnInit {

  private navigationService = inject(NavigationService);
  private configurationService = inject(ConfigurationService);

  readings: Reading[] = []

  constructor() {

  }

  ngOnInit(): void {
    this.configurationService.getConfiguration("000000001").then(config => {
      this.readings = config.readings;
    })
  }

  redirectToReading(index: number): void {
    this.navigationService.toReading(index);
  }

}
