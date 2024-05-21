import { readFileSync } from "fs";
import { parseFrontmatter } from "./parseFrontmatter";

export const readMDXFile = (filePath: string) => {
  return parseFrontmatter(readFileSync(filePath, "utf-8"));
};
