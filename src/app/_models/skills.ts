export class Skill {
  name!: string;
  description!:String;
  category!: 'Frontend' | 'Backend' | 'Fullstack' | 'Database' | 'Framework' | 'Tool' | 'Other';
  proficiency!: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  image?: string;
}
