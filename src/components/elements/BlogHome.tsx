'use client';
import {Post, useGetPostsQuery} from '../../graphql/generated';
import PostCard from '../complex/PostCard';

const BlogHome: React.FC = () => {
  const {data} = useGetPostsQuery();
  const posts = data?.posts || [];
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
