
import { Project, SkillGroup, Experience, Education } from './types';

export const PERSONAL_INFO = {
  name: "Valeriia Golotiuk",
  title: "MBA Candidate | Data & AI Strategy Leader",
  tagline: "Bridging the gap between complex data ecosystems and executive strategic objectives through AI-driven innovation.",
  email: "valeriia.golotiuk001@gmail.com",
  linkedin: "https://linkedin.com/in/valeriia-golotiuk",
  github: "https://github.com/valeriia-golotiuk",
  resumeUrl: "resume.pdf", 
  profileImg: "/IMG_6207.jpeg",
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "BI Reporting Optimization & Turnaround",
    category: "Data Strategy",
    challenge: "Inconsistent reporting and slow turnaround times for Fintech and Consumer Products clients hindered rapid strategic decision-making.",
    solution: "Designed and implemented comprehensive Tableau and Power BI dashboards to monitor real-time KPIs and automate churn risk identification.",
    outcome: "Achieved a 15% improvement in reporting turnaround time, directly enhancing operational efficiency for executive-level decision makers.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "2",
    title: "AI-Enabled E-commerce Scaling",
    category: "Operations",
    challenge: "Transitioning a traditional $2.3M+ retail wellness brand into a modern, data-driven e-commerce model.",
    solution: "Leveraged AI-driven customer segmentation and predictive forecasting to optimize supply chain and marketing spend.",
    outcome: "Scaled online sales to 80% of total revenue and grew the active customer base to over 18,000 users.",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "3",
    title: "Universal Credit Card Solution Launch",
    category: "Finance",
    challenge: "Complex data silos across technology, security, and finance departments delayed the launch of a critical banking product.",
    solution: "Led a cross-functional team of 3 to synthesize critical data and conduct thorough risk assessments for a Universal Credit Card solution.",
    outcome: "Successfully achieved a streamlined product launch, aligning technical operations with long-term strategic business objectives.",
    imageUrl: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800"
  }
];

export const SKILLS: SkillGroup[] = [
  {
    category: "Strategic Leadership",
    skills: ["GTM Strategy", "Project Management", "Cross-Functional Collaboration", "Agile & Scrum (Lead)", "Executive Advising"]
  },
  {
    category: "Data & AI Analysis",
    skills: ["Power BI & Tableau", "SQL (Advanced)", "Financial Forecasting", "AI-Driven Segmentation", "Data Quality & Lineage"]
  },
  {
    category: "Technical & Management",
    skills: ["Google Cloud & AWS", "Dynamics 365", "Data Architecture", "Metadata Management", "Jira & Azure DevOps"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp1",
    role: "Independent Consultant",
    company: "New York, NY",
    period: "Jan 2024 – Current",
    highlights: [
      "Advise Fintech and Consumer Products clients on strategic data analytics solutions to improve operational efficiency.",
      "Design Tableau/Power BI dashboards for revenue forecasting and churn risk, improving reporting speed by 15%.",
      "Manage and mentor a team of analysts, ensuring data accuracy and compliance across complex domains."
    ]
  },
  {
    id: "exp2",
    role: "Operations and Analytics Manager",
    company: "Livitup Nutrition",
    period: "Jan 2016 – Nov 2023",
    highlights: [
      "Directed operations for a $2.3M+ wellness brand, scaling online sales to 80% of total revenue via AI-enabled models.",
      "Implemented rigorous data management and privacy practices ensuring 100% compliance across sales and customer data.",
      "Utilized AI-driven forecasting to reduce operating costs while growing the customer base to 18,000+."
    ]
  },
  {
    id: "exp3",
    role: "Senior Analyst",
    company: "Comfy Trade LLC",
    period: "May 2011 – Dec 2015",
    highlights: [
      "Applied Scrum methodology to lead a team of 4 junior analysts on high-impact internal projects.",
      "Delivered BI marketing insights that enabled the local store to exceed its annual revenue plan by 15%.",
      "Collaborated with technical and marketing leads to derive actionable future insights from legacy data."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: "edu1",
    degree: "Master of Business Administration (MBA) - Business Analytics",
    institution: "Florida Atlantic University",
    period: "Ongoing (GPA: 3.94)",
    description: "Focusing on advanced strategic leadership and quantitative business intelligence."
  },
  {
    id: "edu2",
    degree: "Master of Science (M.S.) Mathematics",
    institution: "Dnipro National University",
    period: "Honors Graduate",
    description: "Advanced study in mathematical modeling and analytical frameworks."
  },
  {
    id: "edu3",
    degree: "Bachelor of Science (B.S.) Mathematics",
    institution: "Dnipro National University",
    period: "Honors Graduate",
    description: "Minor in Economics. Foundation in quantitative analysis and economic theory."
  }
];
