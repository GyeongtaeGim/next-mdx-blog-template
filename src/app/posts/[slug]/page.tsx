interface PostProps {
  params: {
    slug: Promise<string>;
  };
}

export default async function PostPage({ params }: PostProps) {
  const { slug } = await params;
  const { default: Post } = await import(`@/content/${slug}.mdx`);

  return <Post />;
}

export async function generateMetadata({ params }: PostProps) {
  const { slug } = await params;
  const { metadata } = await import(`@/content/${slug}.mdx`);

  return {
    title: metadata.title,
    description: metadata.description,
  };
}
