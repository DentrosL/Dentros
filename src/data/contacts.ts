export type ContactLinkKey = 'email' | 'linkedin' | 'github' | 'whatsapp';

export type Contact = {
  key: ContactLinkKey;
  href: string;
  icon: 'mail' | 'linkedin' | 'github' | 'whatsapp';
  external: boolean;
};

export const contacts: Contact[] = [
  {
    key: 'email',
    href: 'mailto:laizbdetros@gmail.com',
    icon: 'mail',
    external: false,
  },
  {
    key: 'linkedin',
    href: 'https://www.linkedin.com/in/laiz-detros',
    icon: 'linkedin',
    external: true,
  },
  {
    key: 'github',
    href: 'https://github.com/DentrosL',
    icon: 'github',
    external: true,
  },
  {
    key: 'whatsapp',
    href: 'https://wa.me/99999999999',
    icon: 'whatsapp',
    external: true,
  },
];
