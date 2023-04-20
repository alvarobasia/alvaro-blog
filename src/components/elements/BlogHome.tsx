'use client';

import {Post, PostApi, postApiToPost} from '../../types/Post';
import PostCard from '../complex/PostCard';

export const revalidate = 3600; // revalidate this page every 3600 seconds

export async function BlogHome() {
  const raw: PostApi[] = await fetch(
    'https://www.tabnews.com.br/api/v1/contents/deVictorMendes?page=1&per_page=12&strategy=new',
    {
      method: 'GET',
    }
  ).then((res) => res.json());

  const posts = raw.map((post) => postApiToPost(post));

  return (
    <div className="flex-1 bg-gray-800 p-20 overflow-scroll overflow-x-hidden h-[100%]">
      <ul className="flex flex-col gap-11">
        {posts.map((post) => (
          <PostCard post={post as Post} key={post.id} />
        ))}
      </ul>
    </div>
  );
}
