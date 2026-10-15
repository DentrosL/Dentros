export type StackCategoryKey = 'primary' | 'workingWith' | 'learning';

export type StackTechnology = {
  name: string;
};

export type Stack = {
  id: string;
  categoryKey: StackCategoryKey;
  technologies: StackTechnology[];
};

export const stack: Stack[] = [
  {
    id: '01',
    categoryKey: 'primary',
    technologies: [
      { name: 'PHP' },
      { name: 'Laravel' },
      { name: 'PostgreSQL' },
    ],
  },
  {
    id: '02',
    categoryKey: 'workingWith',
    technologies: [
      { name: 'Vue.js' },
      { name: 'JavaScript' },
      { name: 'Git' },
      { name: 'Docker' },
    ],
  },
  {
    id: '03',
    categoryKey: 'learning',
    technologies: [
      { name: 'Python' },
      { name: 'TypeScript' },
      { name: 'Finance' },
    ],
  },
];
