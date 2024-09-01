import { error } from '@sveltejs/kit';
import { examples } from '../data.js';

export function load({ params }) {
	const example = examples.find((example) => example.slug === params.slug);

	if (!example) throw error(404);

	return {
		example
	};
}
