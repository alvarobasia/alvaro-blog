import React from 'react';
import {Post, useGetPostsQuery} from '../../graphql/generated';
import PostCard from '../complex/PostCard';

const BlogHome: React.FC = () => {
  const {data} = useGetPostsQuery();

  return (
    <div className="flex-1 bg-gray-800 p-20 overflow-scroll overflow-x-hidden">
      <ul className="flex flex-col gap-11">
        {data?.posts.map((post) => (
          <PostCard post={post as Post} key={post.id} />
        ))}
      </ul>
    </div>
  );
};

export default BlogHome;
