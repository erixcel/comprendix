import { inject, Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { CONFIG_PARAM, LOCAL_ID } from '../constants/configuration.config';
import { filter, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NavigationService {

  private router = inject(Router);
  private route = inject(ActivatedRoute);

  speechControl$ = new Subject<void>();

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe(() => {
      this.cancelSpeech();
    });
  }

  cancelSpeech(): void {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    this.speechControl$.next();
  }

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

  getIndexReading(): number | null {
    return this.getIndexFromRoute('reading');
  }

  getIndexQuestion(): number | null {
    return this.getIndexFromRoute('question');
  }

  private getIndexFromRoute(segmentName: string): number | null {

    let currentRoute: ActivatedRoute | null = this.router.routerState.root;

    while (currentRoute?.firstChild) {
        currentRoute = currentRoute.firstChild;
    }

    if (!currentRoute) return null;

    const segments = currentRoute.snapshot.pathFromRoot.flatMap(r => r.url.map(segment => segment.path)) || [];

    const targetIndex = segments.findIndex(seg => seg === segmentName);
    if (targetIndex !== -1 && segments.length > targetIndex + 1) {
      const value = Number(segments[targetIndex + 1]);
      return isNaN(value) ? null : value;
    }
    return null;
  }
}
