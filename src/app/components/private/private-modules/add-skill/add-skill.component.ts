import { Component, OnInit } from '@angular/core';
import { SkillService } from '../../../../_services/skill.service';
import { NgForm } from '@angular/forms';
import { Skill } from '../../../../_models/skills';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {

  skill: Skill = {
    name: '',
    description: '',
    category: 'Frontend',
    proficiency: 'Intermediate',
    image: '',
  };
  
  imageOptions: string[] = [];
  showInstructions: boolean = true;

  constructor(private skillService: SkillService) {}

  ngOnInit() {
    this.fetchImageOptions();
  }

  fetchImageOptions() {
    // Récupère les options d'images depuis le service (données locales)
    this.skillService.getPicsSkills().subscribe(options => {
      this.imageOptions = options;
    });
  }

  removeExtension(filename: string): string {
    const lastDotIndex = filename.lastIndexOf('.');
    if (lastDotIndex === -1) return filename;
    return filename.substring(0, lastDotIndex);
  }

  /**
   * En mode frontend-only, les compétences doivent être ajoutées
   * directement dans le fichier src/app/_data/data.ts
   */
  onSubmit(formUser: NgForm) {
    if (formUser.valid) {
      this.skill.name = this.removeExtension(this.skill.image!);
      
      // Affiche les instructions pour ajouter manuellement la compétence
      const skillJson = JSON.stringify({
        name: this.skill.name,
        description: this.skill.description,
        category: this.skill.category,
        proficiency: this.skill.proficiency,
        image: `assets/images/skills/${this.skill.image}`
      }, null, 2);
      
      alert(`📝 Mode Frontend-Only\n\nPour ajouter cette compétence, copiez ce code dans le fichier:\nsrc/app/_data/data.ts\n\nDans le tableau SKILLS_DATA:\n\n${skillJson}`);
      
      console.log('Nouvelle compétence à ajouter dans _data/data.ts:', this.skill);
    }
  }
}
