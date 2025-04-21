import { Routes } from '@angular/router';
import { SplashComponent } from '../components/splash/splash.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { ContentComponent } from '../components/content/content.component';
import { WelcomeComponent } from '../components/welcome/welcome.component';
import { QuestionComponent } from '../components/question/question.component';

export const routes: Routes = [
  { path: '', component: SplashComponent},
  { path: 'content', component: ContentComponent,
    children:[
      { path: "welcome", component: WelcomeComponent},
      { path: "question", component: QuestionComponent},
      { path: "", redirectTo: "menu", pathMatch: "full" }
    ],
  },
  { path: "**", component: NotFoundComponent}
]
