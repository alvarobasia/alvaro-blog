'use client';
import {Post} from '../../graphql/generated';
import {format} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import Tags from '../base/Tags';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({post}) => (
  <li key={post.id} className="flex flex-row gap-0">
    <div className="w-[10%] flex items-center flex-col">
      <p className="text-white font-bold text-6xl">
        {format(new Date(post.date), 'd')}
      </p>
      <p className="text-white  font-serif">
        de{' '}
        {format(new Date(post.date), 'LLLL', {
          locale: ptBR,
        })}
      </p>
    </div>
    <div className="flex flex-col gap-4 w-[90%]">
      <a className="font-serif text-3xl text-blue-400 cursor-pointer hover:underline transition-all">
        {post.title}
      </a>
      <p className="text-white">{post.excerpt}</p>
      <div className="flex flex-row flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Tags tag={tag} key={tag} />
        ))}
      </div>
    </div>
  </li>
);

export default PostCard;
