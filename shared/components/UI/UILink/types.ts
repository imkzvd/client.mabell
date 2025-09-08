import type { RouteLocationRaw } from "vue-router";

export interface UILinkProps {
  to: RouteLocationRaw;
  underline?: boolean;
  hoverUnderline?: boolean;
}
