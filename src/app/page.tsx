import React from 'react';
import {BlogHome} from '../components/elements/BlogHome';

export const metadata = {
  title: 'Blog Home',
  description: 'Blog Home',
};

export default function Home() {
  return (
    <>
      {/* @ts-expect-error  */}
      <BlogHome />
    </>
  );
}
