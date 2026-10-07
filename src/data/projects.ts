type ProjectDescriptionKey = 'sorting' | 'worktree' | 'avl';

type Project = {
  title: string;
  type: string;
  descriptionKey: ProjectDescriptionKey;
  tags: string[];
  href: string;
};

export const projects: Project[] = [
  {
    title: 'Sorts',
    type: 'Algorithms',
    descriptionKey: 'sorting',
    tags: ['Python', 'Algorithms'],
    href: 'https://github.com/DentrosL/Ordenacoes',
  },
  {
    title: 'Worktree',
    type: 'Tooling & Documentation',
    descriptionKey: 'worktree',
    tags: ['Git', 'Python', 'Documentation'],
    href: 'https://github.com/DentrosL/WorktreeTests',
  },
  {
    title: 'AVL',
    type: 'Data Structures',
    descriptionKey: 'avl',
    tags: ['C', 'Data Structures'],
    href: 'https://github.com/DentrosL/ArvoreAVL',
  },
];