import React from 'react';
import {useGetPostsQuery} from '../../graphql/generated';
import {format} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

const BlogHome: React.FC = () => {
  const {data} =useGetPostsQuery();


  return (
    <div className='flex-1 bg-gray-800 p-20 overflow-scroll overflow-x-hidden'>
      <ul className='flex flex-col gap-11'>
        {data?.posts.map((post) => (
          <li key={post.id} className="flex flex-row gap-0">
            <div className='w-[10%] flex items-center flex-col'>
              <p className='text-white font-bold text-6xl' >{format(new Date(post.date), 'd')}</p>
              <p className='text-white  font-serif'>de {format(new Date(post.date), 'LLLL', {
                locale: ptBR,
              })}</p>
            </div>
            <div className='flex flex-col gap-4 w-[90%]'>
              <a className='font-serif text-3xl text-blue-400 cursor-pointer hover:underline transition-all'>{post.title}</a>
              <p className="text-white">{post.excerpt}</p>
              <div className='flex flex-row flex-wrap gap-2'>
                {post.tags.map((tag) => (
                  <div key={tag} className="px-2 border-2 rounded-2xl border-blue-500 cursor-pointer group hover:border-white">
                    <span className='text-blue-500 text-sm group-hover:text-white transition-all' >#{tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogHome;

