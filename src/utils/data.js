export const servicePageInfo = [
	{
		id: 1,
		slug: "social-media-post",
		title: "Social media post",
		description:
			"Professionally designed graphics and images tailored for platforms like Instagram, Facebook, and more.",
		img: "../src/assets/social-media.png",
		includes: [
			"High quality image editing.",
			"Optimized for social media platforms.",
			"One free revision.",
		],
		// upgrades: ["Custom graphics and animations.", "Advanced photo retouching."],
		ctaImg: "../src/assets/social-media.png",
	},
	{
		id: 2,
		slug: "vertical-video",
		title: "Vertical video",
		description:
			"High quality vertical videos for Reels, Shorts, and more with add-ons like text-to-speech voiceovers or AI/Deepfake avatars for added impact",
		img: "../src/assets/vertical-video.png",
		includes: [
			"Optimized vertical video format.",
			"Smooth cuts, transitions, and effects.",
			"Caption text overlaying for enhanced engagement.",
			"One free revision.",
		],
		upgrades: [
			"Text-to-speech Voiceovers. (Tuzu default characters)",
			// "AI/Deepfake avatar + Text-to-speech",
			// "Custom animations, transitions and effects.",
			// "Additional cost for longer video durations",
		],
		ctaImg: "../src/assets/vertical-video.png",
	},
];

export const canvasTypeInfo = [
	{
		id: "r1",
		title: "Instagram post (4:5)",
		value: "instagram-post-4-5",
	},
	{
		id: "r2",
		title: "Instagram post (1:1)",
		value: "instagram-post-1-1",
	},
	{
		id: "r3",
		title: "Instagram story (9:16)",
		value: "instagram-story-9-16",
	},
	{
		id: "r4",
		title: "YouTube thumbnail (16:9)",
		value: "youtube-thumbnail-16-9",
	},
];

export const videoDurationInfo = [
	{
		id: "d1",
		title: "15 sec",
		value: "15-sec",
	},
	{
		id: "d2",
		title: "30 sec",
		value: "30-sec",
	},
	{
		id: "d3",
		title: "60 sec",
		value: "60-sec",
	},
	{
		id: "d4",
		title: "90 sec",
		value: "90-sec",
	},
];

export const initialFormData = {
	email: "",
	number: "",
	contentType: "Social media post (post, story, etc.)",
	files: [],
	brandKit: null,
	canvasType: "instagram-post-4-5",
	videoDuration: "15-sec",
	language: "english",
	textToSpeech: "no",
	textToSpeechFile: null,
	textOverlay: "no",
	textFile: null,
	instructions: [],
	relatedLinks: [],
};
