import type { RouteLocationRaw } from 'vue-router';

export interface UILinkProps {
  to: RouteLocationRaw;
  isUnderlined?: boolean;
  isHoverUnderlined?: boolean;
  maxRows?: number | string;
}
