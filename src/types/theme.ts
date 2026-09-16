export type ThemeMode = 'dark' | 'light';

export interface ThemeConfig {
  id: ThemeMode;
  name: string;
  tag: string;
  bg: string;
  dot: string;
  desc: string;
}

export const THEME_OPTIONS: ThemeConfig[] = [
  {
    id: 'dark',
    name: 'Dark Mode',
    tag: 'DEFAULT',
    bg: '#07090E',
    dot: 'bg-indigo-500',
    desc: 'Deep slate obsidian with electric indigo & sky accents'
  },
  {
    id: 'light',
    name: 'Light Mode',
    tag: 'CLEAN',
    bg: '#F8FAFC',
    dot: 'bg-amber-500',
    desc: 'Crisp studio light theme with high-contrast typography & clean borders'
  }
];
