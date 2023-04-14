'use client';

import React from 'react';
import Sidebar from '../src/components/elements/Sidebar';
import {Texture} from '../src/styles/Texture';
import './global.css';
type props = {
  children: React.ReactNode;
};

export default function RootLayout({children}: props) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="w-[100vw] h-[100vh] flex flex-row">
          <Sidebar />
          {children}
          <Texture />
        </div>
      </body>
    </html>
  );
}
