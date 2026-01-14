// Global constants and configuration

import type { NavItem, SocialLink } from './types';

// Site metadata
export const SITE_TITLE = 'Filippo Ferrando' as const;
export const SITE_TAGLINE = 'Cybersecurity Student & Developer' as const;
export const SITE_DESCRIPTION = 'Filippo Ferrando Damillano - Cybersecurity student passionate about operating systems, music, and cars. Explore my projects and thoughts.' as const;
export const SITE_URL = 'https://filippo-ferrando.github.io' as const;
export const SITE_AUTHOR = 'Filippo Ferrando' as const;

// Social links
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/filippo-ferrando',
    icon: '/assets/img/github-mark.svg',
    iconDark: '/assets/img/github-mark-white.svg'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/filippo-ferrando',
    icon: '/assets/img/linkedin-mark.svg',
    iconDark: '/assets/img/linkedin-mark-white.svg'
  },
  {
    name: 'Telegram',
    url: 'https://t.me/filippo_ferrando',
    icon: '/assets/img/telegram-mark.svg',
    iconDark: '/assets/img/telegram-mark-white.svg'
  }
] as const;

// Navigation items
export const NAV_ITEMS: NavItem[] = [
  { link: '/about/', label: 'About' },
  { link: '/posts/', label: 'Posts' },
  { link: '/projects/', label: 'Projects' },
  { link: '/tags/', label: 'Tags' }
] as const;

// Content configuration
export const POSTS_PER_PAGE = 10 as const;
export const PROJECTS_PER_PAGE = 12 as const;
export const RECENT_POSTS_COUNT = 5 as const;
export const FEATURED_PROJECTS_COUNT = 6 as const;

// Reading time configuration
export const WORDS_PER_MINUTE = 225 as const;

// Date formatting
export const DATE_FORMAT = 'MMM dd, yyyy' as const;
export const DATETIME_FORMAT = 'yyyy-MM-dd\'T\'HH:mm:ss\'Z\'' as const;

// Theme configuration
export const DEFAULT_THEME = 'system' as const;

// Analytics
export const ANALYTICS_ID = process.env.GTAG_MEASUREMENT_ID || undefined;

// Contact information
export const CONTACT_EMAIL = 'ferrandodfilippo@gmail.com' as const;

// Feature flags
export const FEATURES = {
  COMMENTS: true,
  ANALYTICS: !!ANALYTICS_ID,
  DARK_MODE: true,
  SEARCH: true,
  RSS: true
} as const;

// SEO defaults
export const DEFAULT_OG_IMAGE = '/og-image.jpg' as const;
export const TWITTER_HANDLE = '@filippo_ferrando' as const;
