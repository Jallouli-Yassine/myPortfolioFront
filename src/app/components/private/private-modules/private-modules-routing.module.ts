import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddProjectComponent} from "./add-project/add-project.component";
import {AddSkillComponent} from "./add-skill/add-skill.component";

const routes: Routes = [
  {
      path: 'addProject',
      component:AddProjectComponent
  },
  {
    path: 'addSkill',
    component:AddSkillComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateModulesRoutingModule { }
