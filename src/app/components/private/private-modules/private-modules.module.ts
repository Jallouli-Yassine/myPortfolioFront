import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateModulesRoutingModule } from './private-modules-routing.module';
import {AddProjectComponent} from "./add-project/add-project.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AddProjectComponent,
  ],
  imports: [
    CommonModule,
    PrivateModulesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PrivateModulesModule { }
