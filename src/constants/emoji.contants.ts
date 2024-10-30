import { random } from 'lodash';

export enum ENUM_EMOJI {
	HAPPINESS = 'Happiness',
	EXCITED = 'Excited',
	NATURAL = 'Natural',
	SAD = 'Sad',
	ANGRY = 'Angry',
}

export const DATA_EMOJI = {
	[ENUM_EMOJI.HAPPINESS]: {
		name: ENUM_EMOJI.HAPPINESS,
		point: 2,
		key: ENUM_EMOJI.HAPPINESS,
		path: '/video/happiness-cat.mp4',
		color: '#fabd55',
		icon: '/icons/cat-happiness.svg',
	},
	[ENUM_EMOJI.EXCITED]: {
		name: ENUM_EMOJI.EXCITED,
		point: 1,
		key: ENUM_EMOJI.EXCITED,
		path: '/video/excited-cat.mp4',
		color: '#FFA500',
		icon: '/icons/cat-excited.svg',
	},
	[ENUM_EMOJI.NATURAL]: {
		name: ENUM_EMOJI.NATURAL,
		point: 0,
		key: ENUM_EMOJI.NATURAL,
		path: '/video/natural-cat.mp4',
		color: '#32CD32',
		icon: '/icons/cat-natural.svg',
	},
	[ENUM_EMOJI.SAD]: {
		name: ENUM_EMOJI.SAD,
		point: -1,
		key: ENUM_EMOJI.SAD,
		path: '/video/sad-cat.mp4',
		color: '#808080',
		icon: '/icons/cat-sad.svg',
	},
	[ENUM_EMOJI.ANGRY]: {
		name: ENUM_EMOJI.ANGRY,
		point: -2,
		key: ENUM_EMOJI.ANGRY,
		path: '/video/angry-cat.mp4',
		color: '#f44336',
		icon: '/icons/cat-angry.svg',
	},
} as Record<ENUM_EMOJI, EMOJI_DATA_TYPE>;

export interface EMOJI_DATA_TYPE {
	name: string;
	point: number;
	key: string;
	path: string;
}

export const SAMPLE_TEXT_ARRAY_BY_EMOJI = {
	[ENUM_EMOJI.HAPPINESS]: [
		`"Happiness is a beautiful state of mind that fills your heart with joy and warmth, reminding you of all the good things in life."`,
		`"Embracing happiness can lead to a brighter outlook, inspiring you to spread positivity and kindness to those around you."`,
		`"Take a moment to reflect on what makes you happy—whether it’s a favorite hobby, spending time with loved ones, or enjoying nature."`,
		`"Happiness often comes from appreciating the little things in life, like a warm cup of coffee or a beautiful sunset."`,
		`"Sharing your happiness with others can create a ripple effect, encouraging everyone to find joy in their own lives."`,
	],
	[ENUM_EMOJI.EXCITED]: [
		`"Feeling excited is like having a spark of energy that ignites your passion and drives you to explore new opportunities."`,
		`"When you're excited, every moment feels like an adventure, filled with the promise of something wonderful waiting just around the corner."`,
		`"Embrace your excitement—it can motivate you to step out of your comfort zone and try something you’ve always wanted to do."`,
		`"Share your excitement with friends and family; their enthusiasm can amplify your own and create unforgettable memories together."`,
		`"Remember, it’s perfectly okay to feel excited about the little things; they often lead to the most cherished moments."`,
	],
	[ENUM_EMOJI.NATURAL]: [
		`"Feeling natural means embracing your true self, free from pretense and societal expectations; it’s about being authentic."`,
		`"When you connect with nature, you can find a sense of peace that brings clarity and a deeper understanding of your place in the world."`,
		`"Being natural allows you to appreciate life in its simplest forms, from the beauty of a blooming flower to the sound of rustling leaves."`,
		`"Sharing your natural self with others encourages them to be genuine, fostering deeper connections and understanding."`,
		`"Embrace the natural flow of life; trust that everything unfolds as it should, and allow yourself to be present in each moment."`,
	],
	[ENUM_EMOJI.SAD]: [
		`"Feeling sad is a natural part of life, reminding us that it’s okay to experience a range of emotions, and it can help us grow."`,
		`"Sometimes, sharing your sadness with a trusted friend can lighten your burden, allowing you to feel understood and supported."`,
		`"Embrace your sadness; it can lead to reflection and insight, helping you to appreciate the moments of joy even more."`,
		`"Remember, it’s okay to take time for yourself when you’re feeling down; self-care is essential for healing."`,
		`"Through sadness, we often find resilience; each experience can teach us valuable lessons about love, loss, and hope."`,
	],
	[ENUM_EMOJI.ANGRY]: [
		`"Feeling angry is a powerful emotion that can signal when something is wrong or unjust, prompting us to take action."`,
		`"Instead of letting anger consume you, channel it into constructive outlets like exercise, creative projects, or open conversations."`,
		`"Recognizing the source of your anger can be a crucial step in understanding yourself better and finding solutions to the issues at hand."`,
		`"Sharing your feelings of anger with someone you trust can help you process and release those intense emotions in a healthy way."`,
		`"Remember, it’s perfectly normal to feel angry; what matters is how you choose to express and manage that anger moving forward."`,
	],
};

export const randomAvatar = () => `/images/avatar/ava-cat-${random(1, 16)}.png`;
