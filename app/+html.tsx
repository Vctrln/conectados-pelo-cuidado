import { ScrollViewStyleReset } from 'expo-router/html';
import { type PropsWithChildren } from 'react';

export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#173A68" />
        <style dangerouslySetInnerHTML={{ __html: `
          html, body, #root { margin: 0; min-height: 100%; }
          body { background: #F7F9FC; }
          * { box-sizing: border-box; }
          a { text-decoration: none; }
        `}} />
        <ScrollViewStyleReset />
      </head>
      <body>{children}</body>
    </html>
  );
}
