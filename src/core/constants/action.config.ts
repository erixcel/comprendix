export type Action = {
  name: ActionName;
  iconUrl: string;
  classes: { bg: string; border: string };
};

export type ActionName = (typeof actions)[number]['name'];

export const actions = [
  {
    name: 'home',
    iconUrl: './icons/ic_home.svg',
    classes: { bg: 'bg-green-500', border: 'border-green-700' },
  },
  {
    name: 'listening',
    iconUrl: './icons/ic_sound.svg',
    classes: { bg: 'bg-red-500', border: 'border-red-700' },
  },
  {
    name: 'reading',
    iconUrl: './icons/ic_read.svg',
    classes: { bg: 'bg-red-500', border: 'border-red-700' },
  },
  {
    name: 'next',
    iconUrl: './icons/ic_next.svg',
    classes: { bg: 'bg-yellow-500', border: 'border-yellow-700' },
  },
  {
    name: 'previous',
    iconUrl: './icons/ic_previous.svg',
    classes: { bg: 'bg-blue-500', border: 'border-blue-700' },
  },
] as const;
