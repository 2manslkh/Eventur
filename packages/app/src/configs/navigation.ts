type INavigation = {
  label: string;
  url: string;
  disabled: boolean;
};

export const NavigationData: INavigation[] = [
  {
    label: 'Home',
    url: '/',
    disabled: false,
  },
  {
    label: 'Events',
    url: '/events',
    disabled: false,
  },
];
