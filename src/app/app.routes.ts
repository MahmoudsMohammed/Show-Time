import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AuthComponent } from './features/auth/auth.component';
import { filmComponent } from './features/film/film.component';
import { categoryComponent } from './features/category/category.component';
import { searchComponent } from './features/search/search.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'film/:id',
    component: filmComponent,
  },
  {
    path: 'category/:id',
    component: categoryComponent,
  },
  {
    path:'search',
    component:searchComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];
