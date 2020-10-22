import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

const routes: Routes = [
  { path:'contact/edit/:_id', component: ContactEditComponent },
  { path:'contact/edit', component: ContactEditComponent },
  { path:'contact/:_id', component: ContactDetailsComponent },
  { path: 'statstic', component: StatisticPageComponent },
  { path: 'contact', component: HomePageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: '**', redirectTo: '/signup'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
