import { SbBlokData } from '@storyblok/react';

export interface LandingPageContent extends SbBlokData {
  _uid: string;
  image: IImage;
  title: string;
  bg_image: IImage;
  subtitle: string;
  component: string;
  paragraph: string;
  link_button: ILink;
}

export interface IImage {
  id: number;
  alt: string;
  name: string;
  focus: string;
  title: string;
  filename: string;
  copyright: string;
  fieldtype: string;
  is_external_url: boolean;
}

export interface ILink {
  id: string;
  url: string;
  linktype: string;
  fieldtype: string;
  cached_url: string;
}

export interface Content {
  _uid: string;
  subtitle: string;
  component: string;
  description: string;
  dateFirstCompleted: string;
  images: IImage[];
  siteLink: ILink;
  coverImage: IImage;
  repo: string;
  deploy: string;
}

export interface Project {
  name: string;
  created_at: Date;
  published_at: Date;
  id: number;
  uuid: string;
  content: Content;
  slug: string;
  full_slug: string;
  position: number;
  is_startpage: boolean;
  parent_id: number;
  group_id: string;
  first_published_at: Date;
  lang: string;
}

export interface Story {
  name: string;
  created_at: Date;
  published_at: Date;
  id: number;
  uuid: string;
  content: LandingPageContent;
  slug: string;
  full_slug: string;
  sort_by_date?: unknown;
  position: number;
  tag_list: unknown[];
  is_startpage: boolean;
  parent_id?: unknown;
  meta_data?: unknown;
  group_id: string;
  first_published_at: Date;
  release_id?: unknown;
  lang: string;
  path: string;
  alternates: unknown[];
  default_full_slug?: unknown;
  translated_slugs?: unknown;
}
