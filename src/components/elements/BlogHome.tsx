import React from 'react';
import {useGetPostsQuery} from '../../graphql/generated';


const BlogHome: React.FC = () => {
  const {data} =useGetPostsQuery();


  return (
    <div className='flex-1 bg-gray-800 p-20'>
      <ul className='flex flex-col gap-11'>
        {data?.posts.map((post) => (
          <li key={post.id} className="flex flex-col gap-4">
            <h2 className='font-serif text-3xl text-blue-400'>{post.title}</h2>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogHome;

