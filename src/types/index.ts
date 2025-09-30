// Type definitions for the portfolio

import type { CollectionEntry } from 'astro:content';

// Blog post types
export type BlogPost = CollectionEntry<'blog'>;
export type BlogPostData = BlogPost['data'];

// Project types
export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tech: string[];
  demoUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
  category?: ProjectCategory;
}

export type ProjectCategory = 'web' | 'mobile' | 'desktop' | 'library' | 'other';

// Navigation types
export interface NavItem {
  link: string;
  label: string;
  external?: boolean;
  icon?: string;
}

// Social links types
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  iconDark?: string;
}

// SEO types
export interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
}

// Component props types
export interface BaseLayoutProps {
  title: string;
  description: string;
  image?: string;
  className?: string;
}

export interface PostItemProps {
  post: BlogPost;
  showExcerpt?: boolean;
  className?: string;
}

export interface ProjectItemProps {
  project: Project;
  featured?: boolean;
  className?: string;
}

// Utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredKeys<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

// Theme types
export type Theme = 'light' | 'dark' | 'system';

// Reading time
export interface ReadingTimeResult {
  minutes: number;
  words: number;
  text: string;
}

// Error types
export interface AppError {
  message: string;
  code?: string;
  stack?: string;
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// API response types
export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: AppError;
  message?: string;
}

// GitHub API types (for projects)
export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  clone_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  created_at: string;
  updated_at: string;
  pushed_at: string;
}

export interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  location: string | null;
  blog: string | null;
  twitter_username: string | null;
  public_repos: number;
  followers: number;
  following: number;
}