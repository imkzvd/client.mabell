import type { NavMenuLink } from '~/modules/shared/components/NavMenu/types';

export const linkList: NavMenuLink[] = [
  { name: 'index', title: 'Home', icon: 'i-mynaui-home', activeIcon: 'i-mynaui-home-solid' },
  { name: 'search', title: 'Search', icon: 'i-mynaui-search', activeIcon: 'i-mynaui-search-solid' },
  { name: null, title: 'Explore', icon: 'i-mynaui-compass', activeIcon: 'i-mynaui-compass-solid' },
  { name: null, title: 'New Releases', icon: 'i-mynaui-grid', activeIcon: 'i-mynaui-grid-solid' },
  {
    name: null,
    title: 'Charts',
    icon: 'i-mynaui-chart-bar-one',
    activeIcon: 'i-mynaui-chart-bar-one-solid',
  },
];
