import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {Project} from "../../../_models/project";
import {ProjectService} from "../../../_services/project.service";
import {Skill} from "../../../_models/skills";
import {SkillService} from "../../../_services/skill.service";
import {TranslationService} from "../../../_services/translation.service";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillsList: Skill[] = [];
  toolsList: Skill[] = [];
  //activeFilter: string = 'All'; // Default active filter
  isLoading: boolean = true;

  constructor(
    private skillsService: SkillService, 
    public t: TranslationService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.skillsService.getSkills().subscribe(skills => {
      this.toolsList = skills.filter(skill => skill.category === 'Tool');
      this.skillsList = skills.filter(skill => skill.category !== 'Tool');
      this.isLoading = false;
      this.cdr.detectChanges();
    });

    // Subscribe to language changes
    this.t.currentLang$.subscribe(() => {
      this.cdr.detectChanges();
    });
  }
/*
  getFilteredProjects(): Project[] {
    if (this.activeFilter === 'All') {
      return this.projectsList;
    }
    return this.projectsList.filter(project => project.type === this.activeFilter);
  }

 */
}
