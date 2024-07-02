import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../config';

export const get = async () => {
	const allItems = import.meta.glob('./blog/**/*.md');

	const items = await Promise.all(Object.keys(allItems).map(async (path) => {
		const { frontmatter } = await allItems[path]();
		return {
			...frontmatter,
			link: path.replace('./blog', '').replace('.md', ''),
		};
	}));

	items.reverse();

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: import.meta.env.SITE,
		items,
	});
};