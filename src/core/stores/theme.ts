import { atomWithStorage } from "jotai/utils";

export const themeAtom = atomWithStorage<"dracula" | "cupcake">(
  "theme",
  "cupcake",
);
