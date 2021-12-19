import { SITE_TITLE } from "config/site";

export function generateWithSecondaryTitle(secondaryTitle: string) {
  return `${SITE_TITLE} | ${secondaryTitle}`;
};
