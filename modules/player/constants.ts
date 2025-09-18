import type { DesktopPlayerInstance } from '~/modules/player/components/DesktopPlayer/types';
import type { MobilePlayerInstance } from '~/modules/player/components/MobilePlayer/types';

export const PlayerInjectKey = Symbol('PlayerInjectKey') as InjectionKey<
  DesktopPlayerInstance | MobilePlayerInstance
>;
