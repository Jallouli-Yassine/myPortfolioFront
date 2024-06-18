import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ProjectService} from "../../../../_services/project.service";

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {

  addProjectForm:FormGroup;
  selectedFile!: File;
  imageUrl!: string;

  constructor(private fb: FormBuilder,private projectService:ProjectService,private r:Router) {
    let formControls = {
      title: new FormControl('', [
        Validators.required,
      ]),
      description: new FormControl('', Validators.required),
      link: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      hosted: new FormControl('', Validators.required),
    }


    this.addProjectForm = this.fb.group(formControls);
    // console.log(this.addFoyerForm);
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



  save() {
    if (this.addProjectForm.valid) {
        console.log(this.addProjectForm.value);
      const formData = new FormData();
      formData.append('title', this.addProjectForm.get('title')!.value);
      formData.append('description', this.addProjectForm.get('description')!.value);
      formData.append('link', this.addProjectForm.get('link')!.value);
      formData.append('image', this.selectedFile);
      formData.append('type', this.addProjectForm.get('type')!.value);
      formData.append('hosted', this.addProjectForm.get('hosted')!.value);

      this.projectService.addProject(formData).subscribe(
        response => {
          console.log(response);
          this.r.navigate(['projects']);
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
