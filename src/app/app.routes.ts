import { Routes } from '@angular/router';
import { SplashComponent } from '../components/splash/splash.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { ContentComponent } from '../components/content/content.component';
import { WelcomeComponent } from '../components/welcome/welcome.component';
import { MenuComponent } from '../components/menu/menu.component';
import { ConfigurationGuard } from '../core/guards/configuration.guard';
import { ReadingComponent } from '../components/reading/reading.component';
import { GameComponent } from '../components/game/game.component';

export const routes: Routes = [
  { path: '', component: SplashComponent },
  { path: 'content', component: ContentComponent, canActivateChild: [ConfigurationGuard],
    children: [
      { path: "welcome", component: WelcomeComponent},
      { path: "menu/:option", component: MenuComponent},
      { path: "reading/:id", component: ReadingComponent},
      { path: "game/:id", component: GameComponent},
      { path: "", redirectTo: "welcome", pathMatch: "full" }
    ],
  },
  { path: "**", component: NotFoundComponent}
]
