import SocailMediaImg from "../assets/social-media.webp";
import VerticalVideoImg from "../assets/vertical-video.webp";

export const servicePageInfo = [
	{
		id: 1,
		slug: "social-media-post",
		title: "Social media post",
		description:
			"Professionally designed graphics and images tailored for platforms like Instagram, Facebook, and more.",
		img: SocailMediaImg,
		includes: [
			"High quality image editing.",
			"Optimized for social media platforms.",
			"One free revision.",
		],
		// upgrades: ["Custom graphics and animations.", "Advanced photo retouching."],
		ctaImg: SocailMediaImg,
	},
	{
		id: 2,
		slug: "vertical-video",
		title: "Vertical video",
		description:
			"High quality vertical videos for Reels, Shorts, and more with add-ons like text-to-speech voiceovers or AI/Deepfake avatars for added impact",
		img: VerticalVideoImg,
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
		ctaImg: VerticalVideoImg,
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
		title: "30 seconds",
		value: "30-seconds",
	},
	{
		id: "d2",
		title: "60 seconds",
		value: "60-seconds",
	},
	{
		id: "d3",
		title: "90 seconds",
		value: "90-seconds",
	},
	{
		id: "d4",
		title: "120 seconds",
		value: "120-seconds",
	},
];

export const faqData = [
	{
		id: 1,
		question: "What is Tuzu?",
		answer:
			"Tuzu is a platform that offers social media content creation services, including post designs, video editing and more.",
	},
	{
		id: 2,
		question: "Who can use Tuzu?",
		answer:
			"Creators, influencers and businesses looking to enhance their social media presence can use Tuzu.",
	},
	{
		id: 3,
		question: "How does Tuzu work?",
		answer:
			"Simply submit your content details and our team will deliver polished, ready to post content.",
	},
	{
		id: 4,
		question: "What types of content can Tuzu create?",
		answer:
			"We create engaging posts, reels and designs tailored for social media.",
	},
	{
		id: 5,
		question: "How long does it take to receive content?",
		answer:
			"Delivery times may vary, but most projects are completed within 72 hours.",
	},
	{
		id: 6,
		question: "Can I request revisions?",
		answer:
			"Yes, one free revision is available. Additional revisions may incur charges.",
	},
	{
		id: 7,
		question: "Is Tuzu suitable for small businesses?",
		answer: "Absolutely! Tuzu is designed to support businesses of all sizes.",
	},
	{
		id: 8,
		question: "How do I get started with Tuzu?",
		answer:
			"Visit our website, fill out the request form, and we'll handle the rest.",
	},
];
// {
// 	id: 1,
// 	question: "How do I place an order?",
// 	answer:
// 		'Select the desired service, click "Order Now," and follow the checkout process to complete your purchase.',
// },
// {
// 	id: 2,
// 	question: "Is there an upfront payment?",
// 	answer:
// 		"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $9.99 to $18.99 a month. No extra costs, no contracts.",
// },
// {
// 	id: 3,
// 	question: "What happens after I place my order?",
// 	answer:
// 		"Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
// },
// {
// 	id: 4,
// 	question: "How do I submit my content details?",
// 	answer:
// 		"Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
// },
// {
// 	id: 5,
// 	question: "What is the process for content creation?",
// 	answer:
// 		"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
// },
// {
// 	id: 6,
// 	question: "Can I request revisions?",
// 	answer:
// 		"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
// },
// {
// 	id: 7,
// 	question: "How will I receive the final content?",
// 	answer:
// 		"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
// },
// {
// 	id: 8,
// 	question: "What if I need additional support?",
// 	answer:
// 		"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
// },

export const initialFormData = {
	email: "",
	number: "",
	contentType: "Social media post (post, story, etc.)",
	files: [],
	description: '',
	brandKit: null,
	canvasType: "instagram-post-4-5",
	videoDuration: "30-seconds",
	language: "english",
	textToSpeech: "no",
	textToSpeechFile: null,
	textOverlay: "no",
	textFile: null,
	instructions: [],
	relatedLinks: [],
};
