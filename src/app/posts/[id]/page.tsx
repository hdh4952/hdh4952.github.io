import { allPosts } from ".contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return allPosts.map((post) => ({ id: post._raw.flattenedPath }));
}

export default function Post({ params }: { params: { id: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.id);

  if (!post) notFound();

  const MDXComponent = useMDXComponent(post.body.code);

  return (
    <>
      <MDXComponent />
    </>
  );
}
