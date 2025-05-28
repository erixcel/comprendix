import { inject, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CONFIG_PARAM, LOCAL_ID } from '../constants/configuration.config';

@Injectable({ providedIn: 'root' })
export class NavigationService {


  private router = inject(Router);
  private route = inject(ActivatedRoute);

  toSplash(): void {
    const param = this.route.snapshot.queryParamMap.get(CONFIG_PARAM) ?? LOCAL_ID;
    this.router.navigate([''], { queryParams: { [CONFIG_PARAM]: param } });
  }

  toWelcome(): void {
    const param = this.route.snapshot.queryParamMap.get(CONFIG_PARAM) ?? LOCAL_ID;
    this.router.navigate(
      [ 'content', 'welcome' ],
      { queryParams: { [CONFIG_PARAM]: param } }
    );
  }

  toReadings(): void {
    const param = this.route.snapshot.queryParamMap.get(CONFIG_PARAM) ?? LOCAL_ID;
    this.router.navigate(
      ['content', 'menu', 'readings'],
      { queryParams: { [CONFIG_PARAM]: param } }
    );
  }

  toGames(): void {
    const param = this.route.snapshot.queryParamMap.get(CONFIG_PARAM) ?? LOCAL_ID;
    this.router.navigate(
      ['content', 'menu', 'games'],
      { queryParams: { [CONFIG_PARAM]: param } }
    );
  }

  toReading(index: number): void {
    const param = this.route.snapshot.queryParamMap.get(CONFIG_PARAM) ?? LOCAL_ID;
    this.router.navigate(
      ['content', 'reading', index],
      { queryParams: { [CONFIG_PARAM]: param } }
    );
  }

  toGame(id: string): void {
    const param = this.route.snapshot.queryParamMap.get(CONFIG_PARAM) ?? LOCAL_ID;
    this.router.navigate(
      ['content', 'game', id],
      { queryParams: { [CONFIG_PARAM]: param } }
    );
  }

  toQuestion(indexReading: number, indexQuestion: number): void {
    const param = this.route.snapshot.queryParamMap.get(CONFIG_PARAM) ?? LOCAL_ID;
    this.router.navigate(
      ['content', 'reading', indexReading, 'question', indexQuestion],
      { queryParams: { [CONFIG_PARAM]: param } }
    );
  }
}
