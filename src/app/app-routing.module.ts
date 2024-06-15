import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/public/home/home.component';
import { Page404Component } from './components/public/page404/page404.component';
import {ProjectComponent} from "./components/public/project/project.component";
import {SkillsANDcarouselComponent} from "./components/public/skills-andcarousel/skills-andcarousel.component";
import {ResumeComponent} from "./components/public/resume/resume.component";
import {ContactComponent} from "./components/public/contact/contact.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path:'',
        component:SkillsANDcarouselComponent
      },
    ]
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
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
