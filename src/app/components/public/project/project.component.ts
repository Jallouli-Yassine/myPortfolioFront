import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/_models/project';
import { ProjectService } from 'src/app/_services/project.service';
import { TranslationService } from 'src/app/_services/translation.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projectsList: Project[] = [];
  activeFilter: string = 'All';
  isLoading: boolean = true;

  constructor(private projectService: ProjectService, public t: TranslationService) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(projects => {
      this.projectsList = projects;
      this.isLoading = false;
    });
  }

  getFilteredProjects(): Project[] {
    if (this.activeFilter === 'All') {
      return this.projectsList;
    }
    return this.projectsList.filter(project => project.type === this.activeFilter);
  }

  setActiveFilter(type: string): void {
    this.activeFilter = type;
  }

  getHostedCount(): number {
    return this.projectsList.filter(project => project.hosted).length;
  }

  getDynamicCount(): number {
    return this.projectsList.filter(project => project.type === 'dynamic').length;
  }
}
