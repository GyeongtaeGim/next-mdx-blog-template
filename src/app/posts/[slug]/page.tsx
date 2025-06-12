import { notFound } from 'next/navigation';

interface PostProps {
  params: {
    slug: Promise<string>;
  };
}

export default async function PostPage({ params }: PostProps) {
  try {
    const { slug } = await params;
    const post = await import(`@/content/${slug}.mdx`);

    return <post.default />;
  } catch {
    return notFound();
  }
}

export async function generateMetadata({ params }: PostProps) {
  try {
    const { slug } = await params;
    const post = await import(`@/content/${slug}.mdx`);

    return {
      title: post.metadata.title,
      description: post.metadata.description,
    };
  } catch {
    return {
      notFound: true,
    };
  }
}
