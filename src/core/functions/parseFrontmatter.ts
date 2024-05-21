import { MDXMetadata } from "@/core/@types";

export const parseFrontmatter = (fileContent: string) => {
  const frontmatterRegExp = /---\s*([\s\S]*?)\s*---/;
  const matches = frontmatterRegExp.exec(fileContent);
  const frontMatterBlock = matches![1];
  const content = fileContent.replace(frontmatterRegExp, "").trim();
  const frontMatterLines = frontMatterBlock.trim().split("\n");
  const metadata: Partial<MDXMetadata> = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim() as keyof MDXMetadata] = value;
  });

  return { metadata: metadata as MDXMetadata, content };
};
