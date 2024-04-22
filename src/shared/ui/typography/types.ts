import fontClasses from "./fonts.module.scss";

export const variantsMap = {
  h1: fontClasses.h1,
  h2: fontClasses.h2,
  h3: fontClasses.h3,
  "h3-semi": fontClasses["h3-semi"],

  "text-l-0": fontClasses["text-l-0"],
  "text-l-1": fontClasses["text-l-1"],
  "text-l-2": fontClasses["text-l-2"],
  "text-l-3": fontClasses["text-l-3"],
};

export type TypographyVariant = keyof typeof variantsMap;
type TextElement = "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "p";

export const elementsMap: Record<TypographyVariant, TextElement> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  "h3-semi": "h3",

  "text-l-0": "span",
  "text-l-1": "span",
  "text-l-2": "span",
  "text-l-3": "span",
};

export interface TypographyProps {
  variant: TypographyVariant;
  as?: string;
}
