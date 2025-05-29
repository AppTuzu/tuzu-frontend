import OurApp from "../components/OurApp";

import { IoLogoWhatsapp } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";

const About = () => {
	return (
		<div className="bg-themeBlack">
			<div className="flex flex-col items-center justify-center">
				{/* image */}
				<div className="w-[80%] mt-32 mb-16 rounded-xl max-w-3xl overflow-hidden h-40 md:h-52">
					<img
						src="../src/assets/social-media.png"
						alt=""
						className="w-full h-full object-cover"
					/>
				</div>
				{/* about */}
				<div
					className="text-center w-full flex flex-col justify-center gap-5 md:gap-8 items-center text-white py-14 px-7 sm:px-12 md:px-16 "
					style={{
						background:
							"radial-gradient(circle, rgba(32,32,32,0.15) 0%, rgba(115,115,115,0.15) 50%, rgba(12,192,223,0.15) 100%)",
					}}
				>
					<h1 className="font-bold text-3xl md:text-5xl">Who are we</h1>
					<div className="space-y-3 md:space-y-5">
						<p className="text-base md:text-xl max-w-4xl">
							We are Tuzu, your go-to platform for social media content creation
						</p>
						<p className="text-base md:text-xl max-w-4xl">
							We know creating engaging content can be time consuming
							challenging. That's why we've built a platform that simplifies the
							process for creators, influencers, and businesses. From eye
							catching posts to dynamic reels, Tuzu helps bring your ideas to
							life with ease.
						</p>
						<p className="text-base md:text-xl max-w-4xl">
							With Tuzu, you can focus on what matters most: connecting with
							your audience and growing your brand
						</p>
					</div>
				</div>
			</div>

			{/* missions */}
			<div className="w-full py-14 border-b border-b-themeBlue/20 px-7 sm:px-12 md:px-16 text-white [background-size:50px_50px] [background-image:linear-gradient(to_right,#18181b_4px,transparent_4px),linear-gradient(to_bottom,#18181b_4px,transparent_4px)]">
				
				<div className="overflow-hidden w-full relative max-w-2xl mx-auto p-10  border-1 rounded-2xl border-themeYellow/40 bg-themeBlack">
					<div
						className="absolute inset-0 z-10"
						style={{
							background:
								"linear-gradient(to bottom, #202020 0%, rgba(20,20,20,0.5) 50%, rgba(12,192,223,0.2) 100%)",
						}}
					/>
					<div className="relative z-20">
						<div className="mb-6 md:mb-8">
							<h2 className="font-bold text-xl md:text-2xl">Our mission</h2>
							<p className="text-sm md:text-lg">
								To empower creators, influencers, and businesses by providing
								seamless content creation services that simplify the process and
								bring ideas to life.
							</p>
						</div>
						<div>
							<h2 className="font-bold text-xl md:text-2xl">Our vision</h2>
							<p className="text-sm md:text-lg">
								To be your all-in-one solution for social media content
								creation, providing seamless services that cater to all your
								content needs from editing to design and beyond.
							</p>
						</div>
					</div>
				</div>

				<div className="w-full max-w-4xl mx-auto mt-16">
					<h2 className="font-bold text-xl md:text-2xl text-center mb-5">
						Why choose Tuzu?
					</h2>
					<div className="text-base md:text-lg">
						<p>
							Choosing Tuzu means choosing simplicity, quality, and results.{" "}
							<br />
							Here's what sets us apart
						</p>
						<ul>
							<li>
								✅ Effortless Creation: We handle the editing and design so you
								can focus on your content and audience.
							</li>
							<li>
								✅ Tailored for You: Whether you're a creator, influencer, or
								business, our services adapt to your unique needs.
							</li>
							<li>
								✅ Fast & Reliable: We deliver high quality content efficiently,
								helping you stay consistent
							</li>
							<li>
								✅ End-to-End Solution: From eye catching posts to engaging
								reels, we’ve got you covered
							</li>
						</ul>
						<p className="mt-5">
							With Tuzu, creating impactful content has never been easier!
						</p>
					</div>
				</div>
			</div>

			{/* contact */}
			<div className="py-16 flex flex-col items-center justify-center gap-5 text-white">
				<div className="text-center">
					<h2 className="text-lg md:text-3xl font-semibold">
						Have more queries?
					</h2>
					<h3 className="text-lg md:text-3xl font-semibold">Contact us</h3>
				</div>
				<div className="flex flex-col gap-3 items-center justify-center">
					<Button icon={<IoLogoWhatsapp />} title={"Chat with us"} />
					<Button icon={<FaEnvelope />} title={"Write to us"} />
				</div>
			</div>

			<OurApp />
		</div>
	);
};

const Button = ({ icon, title }) => {
	return (
		<button className="bg-themeYellow text-black w-54 md:w-64 px-8 py-2 md:py-3 text-lg rounded-lg justify-center flex items-center gap-3 font-semibold cursor-pointer hover:scale-[102%] hover:shadow-lg shadow-themeYellow/30 active:scale-99 transition-all duration-300">
			{icon}
			{title}
		</button>
	);
};

export default About;
