export type ActivityKey = 'learning' | 'building' | 'exploring';

export type Activity = {
  id: string;
  key: ActivityKey;
  icon: 'book' | 'code' | 'compass';
  accent: 'purple' | 'green';
};

export const activities: Activity[] = [
  {
    id: '01',
    key: 'learning',
    icon: 'book',
    accent: 'purple',
  },
  {
    id: '02',
    key: 'building',
    icon: 'code',
    accent: 'green',
  },
  {
    id: '03',
    key: 'exploring',
    icon: 'compass',
    accent: 'purple',
  },
];