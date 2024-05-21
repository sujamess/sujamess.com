import { createElement } from "react";
import { slugify } from "./slugify";

export const createHeadingAnchor = (
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
) => {
  const heading = ({ children }: any) => {
    const slug = slugify(children);
    return createElement(
      level,
      { id: slug },
      [
        createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children,
    );
  };
  heading.displayName = `Heading${level}`;
  return heading;
};
