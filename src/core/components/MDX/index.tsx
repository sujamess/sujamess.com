import { MDXRemote } from "next-mdx-remote/rsc";
import Code from "./Code";
import { createHeadingAnchor } from "@/core/functions/createHeadingAnchor";

interface Props {
  source: string;
}

export default function MDX({ source, ...props }: Props) {
  return (
    <MDXRemote
      {...props}
      source={source}
      components={{
        h1: createHeadingAnchor("h1"),
        h2: createHeadingAnchor("h2"),
        h3: createHeadingAnchor("h3"),
        h4: createHeadingAnchor("h4"),
        h5: createHeadingAnchor("h5"),
        h6: createHeadingAnchor("h6"),
        code: Code,
      }}
    />
  );
}
