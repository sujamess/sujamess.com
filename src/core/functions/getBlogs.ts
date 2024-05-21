import { join } from "path";
import { getMDXData } from "./getMDXData";
import dayjs from "dayjs";

export const getBlogs = () => {
  return getMDXData(join(process.cwd(), "src", "contents", "blogs")).sort(
    (a, b) =>
      dayjs(a.metadata.publishedAt).isAfter(b.metadata.publishedAt) ? -1 : 1,
  );
};
