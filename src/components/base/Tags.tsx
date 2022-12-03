import React from 'react';

interface TagPros {
  tag: string;
}

const Tags: React.FC<TagPros> = ({tag}: TagPros) => {
  return (
    <div
      key={tag}
      className="px-2 border-2 rounded-2xl border-blue-500 cursor-pointer group hover:border-white"
    >
      <span className="text-blue-500 text-sm group-hover:text-white transition-all">
        #{tag}
      </span>
    </div>
  );
};

export default Tags;
