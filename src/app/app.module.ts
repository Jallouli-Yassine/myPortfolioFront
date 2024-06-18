import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/public/nav/nav.component';
import { FooterComponent } from './components/public/footer/footer.component';
import { Page404Component } from './components/public/page404/page404.component';
import { HomeComponent } from './components/public/home/home.component';
import { CarouselComponent } from './components/public/carousel/carousel.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import { ProjectComponent } from './components/public/project/project.component';
import { SkillsComponent } from './components/public/skills/skills.component';
import { ResumeComponent } from './components/public/resume/resume.component';
import { SkillsANDcarouselComponent } from './components/public/skills-andcarousel/skills-andcarousel.component';
import { ContactComponent } from './components/public/contact/contact.component';
import { AddSkillComponent } from './components/private/private-modules/add-skill/add-skill.component';
import { DarkModeToggleComponent } from './dark-mode-toggle/dark-mode-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    Page404Component,
    HomeComponent,
    CarouselComponent,
    ProjectComponent,
    SkillsComponent,
    ResumeComponent,
    SkillsANDcarouselComponent,
    ContactComponent,
    AddSkillComponent,
    DarkModeToggleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
