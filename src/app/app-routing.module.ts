import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search';
import { LoginComponent } from './components/login';

/**
 * ROUTING MODULE
 *
 * This module manages route configuration. The routes array below defines each
 * route. See the documentation to learn about all options available to you:
 * https://angular.io/guide/router#configuration
 */
const routes: Routes = [
  { component: SearchComponent, path: ''},
  { component: LoginComponent, path: 'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }