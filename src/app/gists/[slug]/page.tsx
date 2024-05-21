import { notFound } from "next/navigation";

export default function Gist({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return notFound();
}
