import { basename, extname, join } from "path";
import { getMDXFiles } from "./getMDXFiles";
import { readMDXFile } from "./readMDXFile";

export const getMDXData = (dir: string) => {
  return getMDXFiles(dir).map((file) => {
    const { metadata, content } = readMDXFile(join(dir, file));
    const slug = basename(file, extname(file));
    return {
      metadata,
      slug,
      content,
    };
  });
};
