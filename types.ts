
export interface Project {
  id: string;
  title: string;
  category: string;
  challenge: string;
  solution: string;
  outcome: string;
  imageUrl: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
}
