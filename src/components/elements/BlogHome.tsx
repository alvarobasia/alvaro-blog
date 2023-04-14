'use client';

import PostCard from '../complex/PostCard';

export interface Post {
  id: number;
  date: Date;
  excerpt: string;
  title: string;
  tags: string[];
}

const BlogHome: React.FC = () => {
  const posts: Post[] = [
    {
      id: 1,
      date: new Date(),
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      title: 'Lorem ipsum dolor sit amet',
      tags: ['tag1', 'tag2', 'tag3'],
    },
  ];
  return (
    <div className="flex-1 bg-gray-800 p-20 overflow-scroll overflow-x-hidden h-[100%]">
      <ul className="flex flex-col gap-11">
        {posts.map((post) => (
          <PostCard post={post as Post} key={post.id} />
        ))}
      </ul>
    </div>
  );
};

export default BlogHome;
