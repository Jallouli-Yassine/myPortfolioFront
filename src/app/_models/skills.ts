export class Skill {
  name!: string;
  description!:String;
  category!: 'Frontend' | 'Backend' | 'Fullstack' | 'Database' | 'Framework' | 'Tool' | 'Other' | 'AI & LLM' | 'Data Engineering' | 'Databases & Cloud' | 'DevOps & Tools';
  proficiency!: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  image?: string;
}
