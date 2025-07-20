import { Routes } from '@angular/router';
import { SplashComponent } from '../components/splash/splash.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { ContentComponent } from '../components/content/content.component';
import { WelcomeComponent } from '../components/welcome/welcome.component';
import { ConfigurationGuard } from '../core/guards/configuration.guard';
import { ReadingTextComponent } from '../components/reading/reading-text/reading-text.component';
import { GameMenuComponent } from '../components/game/game-menu/game-menu.component';
import { ReadingMenuComponent } from '../components/reading/reading-menu/reading-menu.component';
import { ReadingQuestionComponent } from '../components/reading/reading-question/reading-question.component';
import { GamePuzzleComponent } from '../components/game/game-puzzle/game-puzzle.component';
import { GameMatchImageComponent } from '../components/game/game-match-image/game-match-image.component';
import { GameMatchTextComponent } from '../components/game/game-match-text/game-match-text.component';
import { GameNumberComponent } from '../components/game/game-number/game-number.component';
import { GameOrderComponent } from '../components/game/game-order/game-order.component';
import { GameTextComponent } from '../components/game/game-text/game-text.component';
import { GameMoveComponent } from '../components/game/game-move/game-move.component';

export const routes: Routes = [
  { path: '', component: SplashComponent },
  { path: 'content', component: ContentComponent, canActivateChild: [ConfigurationGuard],
    children: [
      { path: "welcome", component: WelcomeComponent},
      { path: "menu/readings", component: ReadingMenuComponent},
      { path: "menu/games", component: GameMenuComponent},
      { path: "game/move", component: GameMoveComponent},
      { path: "game/match-image", component: GameMatchImageComponent},
      { path: "game/match-text", component: GameMatchTextComponent},
      { path: "game/number", component: GameNumberComponent},
      { path: "game/order", component: GameOrderComponent},
      { path: "game/puzzle", component: GamePuzzleComponent},
      { path: "game/text", component: GameTextComponent},
      { path: "reading/:index", component: ReadingTextComponent},
      { path: "reading/:index/question/:index", component: ReadingQuestionComponent},
      { path: "", redirectTo: "welcome", pathMatch: "full" }
    ],
  },
  { path: "**", component: NotFoundComponent}
]
