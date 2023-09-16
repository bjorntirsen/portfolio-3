import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';
import StoryblokProvider from '@/components/StoryblokProvider';

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN,
  use: [apiPlugin]
});

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Developing the Developer',
  description: 'The Björn Tirsén portfolio'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </StoryblokProvider>
  );
}
