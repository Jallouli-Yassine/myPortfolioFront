import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
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
  activeFilter = 'All';
  isLoading: boolean = true;
  readonly filters = [
    { key: 'All', label: 'skills.filterAll', icon: 'fas fa-layer-group' },
    { key: 'Full-Stack', label: 'skills.filterFullStack', icon: 'fas fa-code' },
    { key: 'AI & LLM', label: 'skills.filterAi', icon: 'fas fa-brain' },
    { key: 'Data Engineering', label: 'skills.filterData', icon: 'fas fa-chart-line' },
    { key: 'Databases & Cloud', label: 'skills.filterCloud', icon: 'fas fa-database' },
    { key: 'DevOps & Tools', label: 'skills.filterDevOps', icon: 'fas fa-infinity' }
  ];

  constructor(
    private skillsService: SkillService, 
    public t: TranslationService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.skillsService.getSkills().subscribe(skills => {
      this.skillsList = skills;
      this.isLoading = false;
      this.cdr.detectChanges();
    });

    // Subscribe to language changes
    this.t.currentLang$.subscribe(() => {
      this.cdr.detectChanges();
    });
  }

  setActiveFilter(filter: string): void {
    this.activeFilter = filter;
  }

  getFilteredSkills(): Skill[] {
    if (this.activeFilter === 'All') {
      return this.skillsList;
    }

    if (this.activeFilter === 'Full-Stack') {
      return this.skillsList.filter(skill =>
        ['Frontend', 'Backend', 'Fullstack'].includes(skill.category)
      );
    }

    if (this.activeFilter === 'DevOps & Tools') {
      return this.skillsList.filter(skill =>
        skill.category === 'Tool' ||
        ['docker', 'git', 'github-actions', 'jenkins', 'azure', 'linux'].includes(skill.name)
      );
    }

    if (this.activeFilter === 'Databases & Cloud') {
      return this.skillsList.filter(skill =>
        skill.category === 'Database' || skill.category === 'Databases & Cloud'
      );
    }

    return this.skillsList.filter(skill => skill.category === this.activeFilter);
  }
}
