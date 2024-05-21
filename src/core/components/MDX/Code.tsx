import { highlight } from "sugar-high";

const Code = ({ children, ...props }: any) => {
  if (!children) {
    return null;
  }

  return (
    <code
      dangerouslySetInnerHTML={{ __html: highlight(children?.toString()) }}
      {...props}
    />
  );
};

export default Code;
