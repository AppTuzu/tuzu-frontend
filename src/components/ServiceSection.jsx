import { useNavigate } from "react-router-dom";
import { Button } from "./Buttons";

const ServiceSection = () => {

  const navigate = useNavigate();

  const serviceData = [
		{
			title: "Social Media Post",
			description:
				"Professionally designed graphics and images tailored for platforms like Instagram, Facebook, and more.",
			bgImg: "../src/assets/social-media.png",
			slug: "social-media-post",
		},
		{
			title: "Vertical Video",
			description:
				"High quality vertical videos for Reels, Shorts and more with add-ons like text-to-speech voiceovers or AI/Deepfake avatars for added impact.",
			bgImg: "../src/assets/vertical-video.png",
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
					<h2 className="text-white text-3xl md:text-4xl font-medium mb-2">
						Our Services
					</h2>
					<p className="text-white font-light text-base md:text-lg">
						We offer a range of services to help you create, edit, and publish
						your content with ease.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* card */}

					{serviceData.map((service, index) => (
						<div
							key={index}
							className="rounded-3xl p-0.5"
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
								<h3 className="text-white text-xl md:text-2xl font-semibold text-center">
									{service.title}
								</h3>
								<p className="text-white font-light text-base text-center mb-6">
									{service.description}
								</p>
								<Button
									onClick={() => navigate(`/service/${service.slug}`)}
									title={"Create now"}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ServiceSection;
