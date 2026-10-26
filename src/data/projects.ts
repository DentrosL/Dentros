type ProjectDescriptionKey = 'sorting' | 'worktree' | 'avl' | 'anaBeatriz';

type Project = {
  title: string;
  type: string;
  descriptionKey: ProjectDescriptionKey;
  tags: string[];
  href: string;
  hrefSite?: string;
  image?: string;
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
    title: 'Ana Beatriz - Portifolio',
    type: 'Portfolio Website',
    descriptionKey: 'anaBeatriz',
    tags: ['Portfolio', 'GitHub Pages'],
    image: '/Dentros/images/image.png',
    href: 'https://github.com/AnaBeatrizA-Silva/AnaBeatriz',
    hrefSite: 'https://anabeatriza-silva.github.io/AnaBeatriz/',
  },
  {
    title: 'AVL',
    type: 'Data Structures',
    descriptionKey: 'avl',
    tags: ['C', 'Data Structures'],
    href: 'https://github.com/DentrosL/ArvoreAVL',
  },
];
