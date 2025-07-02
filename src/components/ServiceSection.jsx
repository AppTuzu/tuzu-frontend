import { useNavigate } from "react-router-dom";
import { Button } from "./Buttons";
import SocialMediaPost from "../assets/social-media.png";
import VerticalVideo from "../assets/vertical-video.png"
import { motion } from 'motion/react';

const ServiceSection = () => {

  const navigate = useNavigate();

  const serviceData = [
		{
			title: "Social Media Post",
			description:
				"Professionally designed graphics and images tailored for platforms like Instagram, Facebook, and more.",
			bgImg: SocialMediaPost,
			slug: "social-media-post",
		},
		{
			title: "Vertical Video",
			description:
				"High quality vertical videos for Reels, Shorts and more with add-ons like text-to-speech voiceovers or AI/Deepfake avatars for added impact.",
			bgImg: VerticalVideo,
			slug: "vertical-video",
		},
		// {
		//   title: "Text-to-Speech",
		//   description:
		//     "Vertical videos with advanced Text-to-Speech technology, perfect for engaging explainer videos and social media content.",
		//   bgImg: "../src/assets/social-media.png",
		// },
		// {
		//   title: "AI Avatar + Text-to-Speech",
		//   description:
		//     "Innovative vertical videos featuring AI-generated or Deepfake avatars paired with voiceovers, perfect for explainer videos and social media content.",
		//   bgImg: "../src/assets/vertical-video.png",
		// },
	];

  return (
		<div
			className="px-8 sm:px-16 md:px-20 lg:px-32 py-20 min-h-screen flex items-center justify-center border-t border-t-themeBlue/20"
			style={{
				background:
					"radial-gradient(circle, rgba(32,32,32,0.15) 0%, rgba(115,115,115,0.15) 50%, rgba(12,192,223,0.15) 100%)",
			}}
		>
			<div className="flex flex-col gap-14 lg:gap-16 items-center justify-center">
				<div className="text-center">
					<motion.h2
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
						className="text-white text-3xl md:text-4xl font-medium mb-2"
					>
						Our Services
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="text-white font-light text-base md:text-lg"
					>
						We offer a range of services to help you create, edit, and publish
						your content with ease.
					</motion.p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* card */}
					{serviceData.map((service, index) => (
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 + 0.2 }}
							key={index}
							className="rounded-3xl p-0.5 max-w-[600px]"
							style={{
								background:
									"linear-gradient(90deg, rgba(12,192,223,0.7) 0%, rgba(60,60,60,1) 25%, rgba(60,60,60,1) 75%, rgba(12,192,223,0.7) 100%)",
							}}
						>
							<div
								className="flex h-full w-full flex-col gap-1 justify-center items-center rounded-[23px] p-5 md:px-16"
								style={{
									background: `linear-gradient(rgba(32, 32, 32, 0.8), rgba(32, 32, 32, 0.8)), url(${service.bgImg})`,
									backgroundSize: "cover",
								}}
							>
								<motion.h3
									initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
									whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
									transition={{ delay: index * 0.1 + 0.3 }}
									className="text-white text-xl md:text-2xl font-semibold text-center"
								>
									{service.title}
								</motion.h3>
								<motion.p
									initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
									whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
									transition={{ delay: index * 0.1 + 0.3 }}
									className="text-white font-light text-base text-center mb-6"
								>
									{service.description}
								</motion.p>
								<Button
									onClick={() => navigate(`/service/${service.slug}`)}
									title={"Create now"}
								/>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ServiceSection;
