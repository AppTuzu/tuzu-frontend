import { useParams } from "react-router-dom";
import { servicePageInfo } from "../utils/data";
import { Button } from "../components/Buttons";
// import FAQ from '../components/FAQ'

const Service = () => {
	const { slug } = useParams();
	const data = servicePageInfo.find((item) => item.slug === slug);

	return (
		<div className="pt-32 bg-themeBlack">
			<div className="w-[80%] mx-auto mb-14 rounded-xl max-w-3xl overflow-hidden h-40 md:h-52">
				<img src={data.img} alt="" className="w-full h-full object-cover" />
			</div>
			<div className="bg-gradient-to-b text-white from-themeBlue/10 via-themeBlack to-themeBlue/10 flex flex-col text-center py-12 px-5 gap-10 font-light">
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
				</div>
				<div>
					<h2 className="font-medium text-xl md:text-2xl mb-2">
						Upgrades & add-ons
					</h2>
					{data.upgrades.map((item, i) => (
						<p key={i}>{item}</p>
					))}
					<p className="mt-2 italic text-sm">
						(See pricing for breakdown of upgrades & add-ons)
					</p>
				</div>
				<div>
					<h2 className="font-medium text-xl md:text-2xl mb-2">
						Delivery time
					</h2>
					<p>Standard posts delivered within 48 hours (business days).</p>
					<p className="max-w-md mx-auto">
						Complex edits or custom graphics may take additional time based on
						complexity.
					</p>
				</div>
				<div
					className="w-[90%] mx-auto rounded-3xl max-w-3xl p-0.5"
					style={{
						background:
							"linear-gradient(90deg, rgba(12,192,223,0.7) 0%, rgba(60,60,60,1) 25%, rgba(60,60,60,1) 75%, rgba(12,192,223,0.7) 100%)",
					}}
				>
					<div
						className="flex h-full w-full flex-col gap-1 justify-center items-center rounded-[23px] p-5 md:px-16"
						style={{
							background: `linear-gradient(rgba(32, 32, 32, 0.8), rgba(32, 32, 32, 0.8)), url(${data.ctaImg})`,
							backgroundSize: "cover",
						}}
					>
						<h3 className="text-xl md:text-2xl text-center">
							Ready to get started?
						</h3>
						<p className="font-light text-base text-center mb-6 italic">
							Click below to submit your reqiurements and begin your project.
						</p>
						<Button
							onClick={() => alert("from redirection")}
							title={"Create"}
						/>
					</div>
				</div>
			</div>
            {/* <FAQ /> */}
		</div>
	);
};
export default Service;
