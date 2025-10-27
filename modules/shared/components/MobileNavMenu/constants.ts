import type { MobileNavMenuLink } from '~/modules/shared/components/MobileNavMenu/types';

export const linkList: MobileNavMenuLink[] = [
  { name: 'index', title: 'Home', icon: 'i-mynaui-home', activeIcon: 'i-mynaui-home-solid' },
  { name: 'search', title: 'Search', icon: 'i-mynaui-search', activeIcon: 'i-mynaui-search-solid' },
  { name: null, title: 'Explore', icon: 'i-mynaui-compass', activeIcon: 'i-mynaui-compass-solid' },
  { name: null, title: 'Sign In', icon: 'i-mynaui-user', activeIcon: 'i-mynaui-user-solid' },
];
