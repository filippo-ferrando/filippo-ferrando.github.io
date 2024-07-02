import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../config';

function extractDate(frontmatter) {
  return new Date(frontmatter.date);
}

export const get = async () => {
  const postImports = import.meta.glob('./blog/**/*.md');
  const postPromises = Object.entries(postImports).map(async ([path, resolver]) => {
    const { frontmatter } = await resolver();
    return {
      ...frontmatter,
      link: path.replace('./', '/').replace('.md', ''),
    };
  });

  const posts = await Promise.all(postPromises);

  const sortedPosts = posts.sort((a, b) => extractDate(b) - extractDate(a));

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: import.meta.env.SITE,
    items: sortedPosts.map((post) => ({
      title: post.title,
      description: post.description,
      link: post.link,
      pubDate: post.date,
    })),
  });
};