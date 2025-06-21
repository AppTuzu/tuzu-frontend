const Pricing = () => {
	return (
		<div className="pt-36 pb-14 flex flex-col gap-5 px-10 sm:px-16 bg-themeBlack text-white min-h-[calc(100vh-488px)] md:min-h-[calc(100vh-261px)]">
			<div className="max-w-3xl mx-auto">
				<h1 className="text-3xl sm:text-4xl font-semibold self-center text-center mb-8">
					Pricing
				</h1>

				<h2 className="text-xl sm:text-2xl font-semibold">Social Media Post</h2>
				<p className="sm:text-lg mb-2">
					Price: <span className="text-themeYellow/90 font-semibold">₹299</span>
				</p>
				<p className="text-gray-300 mb-8">
					Get your photos and social media posts professionally edited and ready
					to shine. Perfect for brands, influencers, and anyone looking to
					elevate their online content.
				</p>

				<h2 className="text-xl sm:text-2xl font-semibold"> Vertical video</h2>
				<p className="sm:text-lg mb-2">
					Price:
					<span className="text-themeYellow/90 font-semibold"> ₹1,299</span>
				</p>
				<div className="text-gray-300">
					<p className="mb-3">
						Professional vertical video editing for Reels, Shorts, and more.
						Ideal for businesses, brands, educators, influencers, and creators
						aiming to engage their audience with high quality content.
					</p>
					<p className="mb-3">
						Includes: <br /> Editing upto 60 seconds.
					</p>
					<p>Editing beyond 60 seconds will cost extra:</p>
					<ul className="list-disc pl-5 mb-3">
						<li>Up to 90 seconds: +₹299</li>
						<li>Up to 120 seconds: +₹599</li>
					</ul>
					<p>
						Add-ons: <br /> Text-to-Speech (Tuzu default characters): +₹349
					</p>
				</div>

				<div className="mt-8 p-4 rounded-lg border border-themeYellow">
					<p className="text-sm">
						Note: <br />
						<ul className="list-disc pl-4.5 mt-1">
							<li>Only 1 revision included. No additional revisions.</li>
							<li>All prices are for single edit delivery per request.</li>
						</ul>
					</p>
				</div>
			</div>
		</div>
	);
};
export default Pricing;
