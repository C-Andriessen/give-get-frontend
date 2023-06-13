import PostCard from '@/components/ui/post-card';
import { Post } from '@/types/post';
import { getAppLayout } from '@/utils/getAppLayout';

const posts: Post[] = [
  {
    title: 'Oproep',
    body: 'Web developer nodig die een portfolio website voor mij kan bouwen.',
    author: 'John Doe',
    date: '28-03-2023',
    image: 'https://picsum.photos/200/300'
  }
]

export default function Posts(): JSX.Element {
  return (
    <>
      <div>
        <p className="text-base font-semibold leading-7 text-primary-main">Start helping</p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-text-primary sm:text-6xl">All posts</h2>
        <p className="mt-6 text-lg leading-8 text-text-muted">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
          fugiat veniam occaecat fugiat aliqua.
        </p>
      </div>

      <div className="mt-20">
        {posts.map((post: Post, index: number) => (
          <PostCard
            key={index}
            post={post}
          />
        ))}
      </div>
    </>
  );
}

Posts.title = "Posts"
Posts.getLayout = getAppLayout
