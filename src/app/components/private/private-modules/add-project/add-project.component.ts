import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {

  addProjectForm: FormGroup;
  selectedFile!: File;
  imageUrl!: string;
  showInstructions: boolean = true;

  constructor(private fb: FormBuilder, private r: Router) {
    let formControls = {
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', Validators.required),
      link: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      type: new FormControl('static', Validators.required),
      hosted: new FormControl(false, Validators.required),
    };

    this.addProjectForm = this.fb.group(formControls);
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.imageUrl = URL.createObjectURL(this.selectedFile);
  }

  get titleP() { return this.addProjectForm.get('title'); }
  get descriptionP() { return this.addProjectForm.get('description'); }
  get LinkP() { return this.addProjectForm.get('link'); }
  get ImageP() { return this.addProjectForm.get('image'); }
  get typeP() { return this.addProjectForm.get('type'); }
  get hostedP() { return this.addProjectForm.get('hosted'); }

  /**
   * En mode frontend-only, les projets doivent être ajoutés
   * directement dans le fichier src/app/_data/data.ts
   */
  save() {
    if (this.addProjectForm.valid) {
      const projectData = {
        title: this.addProjectForm.get('title')!.value,
        description: this.addProjectForm.get('description')!.value,
        link: this.addProjectForm.get('link')!.value,
        image: `assets/images/project/${this.selectedFile?.name || 'project-1.jpg'}`,
        type: this.addProjectForm.get('type')!.value,
        hosted: this.addProjectForm.get('hosted')!.value === 'true' || this.addProjectForm.get('hosted')!.value === true
      };

      const projectJson = JSON.stringify(projectData, null, 2);

      alert(`📝 Mode Frontend-Only\n\nPour ajouter ce projet:\n\n1. Copiez l'image dans: src/assets/images/project/\n\n2. Ajoutez ce code dans le fichier:\n   src/app/_data/data.ts\n\nDans le tableau PROJECTS_DATA:\n\n${projectJson}`);

      console.log('Nouveau projet à ajouter dans _data/data.ts:', projectData);
    }
  }
}
