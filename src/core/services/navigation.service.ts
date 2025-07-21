import { inject, Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { CONFIG_PARAM, LOCAL_ID } from '../constants/configuration.config';
import { filter, Subject } from 'rxjs';
import { Configuration } from '../model/configuration';

@Injectable({ providedIn: 'root' })
export class NavigationService {

  private router = inject(Router);
  private route = inject(ActivatedRoute);

  path$ = new Subject<void>();

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe(() => {
      this.path$.next();
    });
  }

  cancelSpeech(): void {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
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

  toMenuReadings(): void {
    const param = this.route.snapshot.queryParamMap.get(CONFIG_PARAM) ?? LOCAL_ID;
    this.router.navigate(
      ['content', 'menu', 'readings'],
      { queryParams: { [CONFIG_PARAM]: param } }
    );
  }

  toMenuGames(): void {
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

  toQuestion(indexReading: number, indexQuestion: number): void {
    const param = this.route.snapshot.queryParamMap.get(CONFIG_PARAM) ?? LOCAL_ID;
    this.router.navigate(
      ['content', 'reading', indexReading, 'question', indexQuestion],
      { queryParams: { [CONFIG_PARAM]: param } }
    );
  }

  toGameChoose(id: string): void {
    const param = this.route.snapshot.queryParamMap.get(CONFIG_PARAM) ?? LOCAL_ID;
    this.router.navigate(
      ['content', 'game','choose', id],
      { queryParams: { [CONFIG_PARAM]: param } }
    );
  }

  toGameMatchImage(id: string): void {
    const param = this.route.snapshot.queryParamMap.get(CONFIG_PARAM) ?? LOCAL_ID;
    this.router.navigate(
      ['content', 'game', 'match-image', id],
      { queryParams: { [CONFIG_PARAM]: param } }
    );
  }

  toGameMatchText(id: string): void {
    const param = this.route.snapshot.queryParamMap.get(CONFIG_PARAM) ?? LOCAL_ID;
    this.router.navigate(
      ['content', 'game', 'match-text', id],
      { queryParams: { [CONFIG_PARAM]: param } }
    );
  }

  toGameMove(id: string): void {
    const param = this.route.snapshot.queryParamMap.get(CONFIG_PARAM) ?? LOCAL_ID;
    this.router.navigate(
      ['content', 'game', 'move', id],
      { queryParams: { [CONFIG_PARAM]: param } }
    );
  }

  toGameNumber(id: string): void {
    const param = this.route.snapshot.queryParamMap.get(CONFIG_PARAM) ?? LOCAL_ID;
    this.router.navigate(
      ['content', 'game', 'number', id],
      { queryParams: { [CONFIG_PARAM]: param } }
    );
  }

  toGameOrder(id: string): void {
    const param = this.route.snapshot.queryParamMap.get(CONFIG_PARAM) ?? LOCAL_ID;
    this.router.navigate(
      ['content', 'game', 'order', id],
      { queryParams: { [CONFIG_PARAM]: param } }
    );
  }

  toGamePuzzle(id: string): void {
    const param = this.route.snapshot.queryParamMap.get(CONFIG_PARAM) ?? LOCAL_ID;
    this.router.navigate(
      ['content', 'game', 'puzzle', id],
      { queryParams: { [CONFIG_PARAM]: param } }
    );
  }

  toGameText(id: string): void {
    const param = this.route.snapshot.queryParamMap.get(CONFIG_PARAM) ?? LOCAL_ID;
    this.router.navigate(
      ['content', 'game', 'text', id],
      { queryParams: { [CONFIG_PARAM]: param } }
    );
  }

  getIndexReading(): number | null {
    return this.getIndexFromRoute('reading');
  }

  getIndexQuestion(): number | null {
    return this.getIndexFromRoute('question');
  }

  getIndexGameChoose(): number | null {
    return this.getIndexFromRoute('choose');
  }

  getIndexGameMatchImage(): number | null {
    return this.getIndexFromRoute('match-image');
  }

  getIndexGameMatchText(): number | null {
    return this.getIndexFromRoute('match-text');
  }

  getIndexGameMove(): number | null {
    return this.getIndexFromRoute('move');
  }

  getIndexGameNumber(): number | null {
    return this.getIndexFromRoute('number');
  }

  getIndexGameOrder(): number | null {
    return this.getIndexFromRoute('order');
  }

  getIndexGamePuzzle(): number | null {
    return this.getIndexFromRoute('puzzle');
  }

  getIndexGameText(): number | null {
    return this.getIndexFromRoute('text');
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

  nextInGame(indexGame: number, config: Configuration): void {
    const nextIndex = indexGame + 1;
    if (nextIndex < config.games.length) {
      this.router.navigate(['content', 'game', config.games[nextIndex].type, nextIndex]);
    } else {

    }
  }

  previousInGame(indexGame: number, config: Configuration): void {
    const previousIndex = indexGame - 1;
    if (previousIndex >= 0) {
      this.router.navigate(['content', 'game', config.games[previousIndex].type, previousIndex]);
    } else {
      this.router.navigate(['content', 'menu', 'games']);
    }
  }
}
