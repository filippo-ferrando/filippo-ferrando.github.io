import { loadEnv } from 'vite';

const { GITHUB_PERSONAL_ACCESS_TOKEN } = loadEnv(process.env.NODE_ENV || 'production', process.cwd(), '');

export const slugify = (input: string) => {
	if (!input) return '';

	// make lower case and trim
	var slug = input.toLowerCase().trim();

	// remove accents from charaters
	slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

	// replace invalid chars with spaces
	slug = slug.replace(/[^a-z0-9\s-]/g, ' ').trim();

	// replace multiple spaces or hyphens with a single hyphen
	slug = slug.replace(/[\s-]+/g, '-');

	return slug;
};

export const unslugify = (slug: string) =>
	slug.replace(/\-/g, ' ').replace(/\w\S*/g, (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());

export const kFormatter = (num: number) => {
	return Math.abs(num) > 999 ? (Math.sign(num) * (Math.abs(num) / 1000)).toFixed(1) + 'k' : Math.sign(num) * Math.abs(num);
};

export const getRepositoryDetails = async (repositoryFullname: string) => {
	const repoDetails = await fetch('https://api.github.com/repos/' + repositoryFullname, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${GITHUB_PERSONAL_ACCESS_TOKEN}`,
			'X-GitHub-Api-Version': '2022-11-28'
		}
	});
	const response = await repoDetails.json();
	return response;
};

/**
 * Calculate reading time based on word count
 * @param text The text content to analyze
 * @param wordsPerMinute Average reading speed (default: 225 words per minute)
 * @returns Reading time in minutes
 */
export const calculateReadingTime = (text: string, wordsPerMinute: number = 225): number => {
	// Remove HTML tags and markdown syntax
	const cleanText = text
		.replace(/<[^>]*>/g, '') // Remove HTML tags
		.replace(/```[\s\S]*?```/g, '') // Remove code blocks
		.replace(/`[^`]*`/g, '') // Remove inline code
		.replace(/!\[.*?\]\(.*?\)/g, '') // Remove images
		.replace(/\[.*?\]\(.*?\)/g, '') // Remove links
		.replace(/[#*_~`]/g, '') // Remove markdown formatting
		.replace(/\s+/g, ' ') // Normalize whitespace
		.trim();

	// Count words (split by whitespace and filter out empty strings)
	const wordCount = cleanText.split(/\s+/).filter(word => word.length > 0).length;
	
	// Calculate reading time and round up to at least 1 minute
	const readingTime = Math.ceil(wordCount / wordsPerMinute);
	return Math.max(1, readingTime);
};
