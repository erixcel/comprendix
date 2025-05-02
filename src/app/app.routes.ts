import { Routes } from '@angular/router';
import { SplashComponent } from '../components/splash/splash.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { ContentComponent } from '../components/content/content.component';
import { WelcomeComponent } from '../components/welcome/welcome.component';
import { QuestionComponent } from '../components/question/question.component';
import { MenuComponent } from '../components/menu/menu.component';

export const routes: Routes = [
  { path: '', component: SplashComponent},
  { path: 'content', component: ContentComponent,
    children:[
      { path: "welcome", component: WelcomeComponent},
      { path: "menu", component: MenuComponent},
      { path: "question", component: QuestionComponent},
      { path: "", redirectTo: "welcome", pathMatch: "full" }
    ],
  },
  { path: "**", component: NotFoundComponent}
]
