import { useNavigate, useParams } from "react-router-dom";
import { servicePageInfo } from "../utils/data";
import { Button } from "../components/Buttons";
import FAQ from "../components/FAQ";

const Service = () => {
	const { slug } = useParams();
	const data = servicePageInfo.find((item) => item.slug === slug);
	const navigate = useNavigate();

	return (
		<div className="pt-28 bg-themeBlack">
			{/* img conatainer */}
			<div className="px-6 max-w-3xl mx-auto">
				<div className=" mx-auto mb-10 rounded-xl max-w-3xl overflow-hidden h-44 md:h-52">
					<img loading="lazy" src={data.img} alt="" className="w-full h-full object-cover" />
				</div>
			</div>

			{/* main container */}
			<div
				className="relative bg-gradient-to-b text-white from-themeBlue/10 via-themeBlack to-themeBlue/10 py-12 px-6 gap-10 font-light
			[background-size:50px_50px] 
			[background-position:12px_15px] z-0
  			[background-image:linear-gradient(to_right,#18181b_4px,transparent_4px),linear-gradient(to_bottom,#18181b_4px,transparent_4px)]
			"
			>
				{/* gradient */}
				<div
					className="absolute -z-10 inset-0"
					style={{
						background:
							"linear-gradient(180deg,rgba(29, 55, 59,1) 0%, rgba(29, 55, 59, 0.16) 25%, rgba(29, 55, 59, 0) 50%, rgba(29, 55, 59, 0.16) 85%, rgba(29, 55, 59,1) 100%)",
					}}
				/>
				<div className="flex flex-col items-center gap-10 z-10">
					<div className="space-y-8">
						<div>
							<h1 className="font-bold text-2xl md:text-3xl">{data.title}</h1>
							<p className="max-w-md mx-auto mt-2">{data.description}</p>
						</div>
						<div>
							<h2 className="font-medium text-xl md:text-2xl mb-2">
								What's included
							</h2>
							{data.includes.map((item, i) => (
								<p key={i}>{item}</p>
							))}
							{!data.upgrades && (
								<p className="mt-2 italic text-sm">
									(See{" "}
									<a
										href="/pricing"
										target="_blank"
										rel="noopener noreferrer"
										className="text-themeBlue cursor-pointer hover:underline"
									>
										pricing
									</a>{" "}
									for full breakdown of base services and extra costs)
								</p>
							)}
						</div>
						{data.upgrades && (
							<div>
								<h2 className="font-medium text-xl md:text-2xl mb-2">
									Upgrades & add-ons
								</h2>
								{data.upgrades.map((item, i) => (
									<p key={i}>{item}</p>
								))}
								<p className="mt-2 italic text-sm">
									(See{" "}
									<span className="text-themeBlue cursor-pointer hover:underline">
										pricing
									</span>{" "}
									for full breakdown of base services and extra costs)
								</p>
							</div>
						)}
						<div>
							<h2 className="font-medium text-xl md:text-2xl mb-2">
								Delivery time
							</h2>
							<p>Standard posts delivered within 72 hours (business days).</p>
							<p className="max-w-md mx-auto">
								Complex edits or custom graphics may take additional time based
								on complexity.
							</p>
						</div>
					</div>
					<div
						className="mx-auto rounded-xl max-w-3xl p-0.5"
						style={{
							background:
								"linear-gradient(90deg, rgba(12,192,223,0.7) 0%, rgba(60,60,60,1) 25%, rgba(60,60,60,1) 75%, rgba(12,192,223,0.7) 100%)",
						}}
					>
						<div
							className="flex h-full w-full flex-col gap-1 justify-center items-center rounded-[13px] p-5 md:px-16"
							style={{
								background: `linear-gradient(rgba(32, 32, 32, 0.8), rgba(32, 32, 32, 0.8)), url(${data.ctaImg})`,
								backgroundSize: "cover",
							}}
						>
							<h3 className="text-xl md:text-2xl text-center">
								Ready to get started?
							</h3>
							<p className="font-light text-base text-center mb-6">
								Click below to submit your reqiurements and begin your project.
							</p>
							<Button onClick={() => navigate("/create")} title={"Create"} />
						</div>
					</div>
				</div>
			</div>
			<FAQ />
		</div>
	);
};
export default Service;
