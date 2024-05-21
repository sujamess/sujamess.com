import { readdirSync } from "fs";
import { extname } from "path";

export const getMDXFiles = (dir: string) => {
  return readdirSync(dir).filter((file) => extname(file) === ".mdx");
};
