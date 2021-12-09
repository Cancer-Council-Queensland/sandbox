import StoryblokClient from 'storyblok-js-client'

const accessToken = process.env.STORYBLOK_API_KEY;

export const storyblok = new StoryblokClient({
	accessToken,
	cache: {
		clear: 'auto',
		type: 'memory',
	},
})

export function render(storyblokHTML: any) {
	return storyblok.richTextResolver.render(storyblokHTML)
}
