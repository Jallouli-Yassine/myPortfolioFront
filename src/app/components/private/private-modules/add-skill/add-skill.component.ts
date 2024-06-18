import {Component, OnInit} from '@angular/core';
import {SkillService} from "../../../../_services/skill.service";
import {NgForm} from "@angular/forms";
import {Skill} from "../../../../_models/skills";

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {


  skill :Skill= {
    name: '',
    description: '',
    // @ts-ignore
    category: '',
    // @ts-ignore
    proficiency: '',
    image: '',
  };
  constructor(private skillService:SkillService) {}
  imageOptions: string[] = [];  // Array to hold image filenames

  ngOnInit() {
    this.fetchImageOptions();  // Fetch image filenames when component initializes
    console.log(this.imageOptions);
  }
  fetchImageOptions() {
    // Assuming your backend endpoint returns an array of image filenames
    this.skillService.getPicsSkills().subscribe((pics: string[])=>{
      this.imageOptions = pics
    } );
  }
  /*
  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.skill.image = file.name;  // Assuming you want to store the filename
    }
  }

   */
   removeExtension(filename: string): string {
    const lastDotIndex = filename.lastIndexOf('.');
    if (lastDotIndex === -1) return filename; // No extension found
    return filename.substring(0, lastDotIndex);
  }

  /*
  removeExtension(text:string): string {
    return text.replace(/\.[^/.]+$/, "");
  }
  */
  onSubmit(formUser: NgForm) {
    if (formUser.valid) {
        this.skill.name = this.removeExtension(this.skill.image!);
        this.skillService.addSkill(this.skill).subscribe(
          response => {
            console.log(response);
            //this.r.navigate(['projects']);
          },
          error => {
            console.log(error);
          }
        );
      }

  }
}
