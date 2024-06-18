import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/public/home/home.component';
import { Page404Component } from './components/public/page404/page404.component';
import {ProjectComponent} from "./components/public/project/project.component";
import {ResumeComponent} from "./components/public/resume/resume.component";
import {ContactComponent} from "./components/public/contact/contact.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'projects',
    component: ProjectComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path:"private-modules",
    loadChildren: () => import('./components/private/private-modules/private-modules.module').then(m => m.PrivateModulesModule)
  },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
