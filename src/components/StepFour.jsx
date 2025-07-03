import { motion } from "motion/react";
import { Checkbox } from "../components/ui/checkbox";
import { Check } from "lucide-react";
import { renderPrice } from "@/utils/helperFunction";

const StepFour = ({ formData, agreements, setAgreements }) => {

	const handleAgreementChange = (key, checked) => {
		setAgreements({ ...agreements, [key]: checked });
	};

	const price = renderPrice(formData);

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="space-y-6"
		>
			{/* Selected Content Type */}
			<div className="space-y-4">
				<label className="block text-sm font-medium text-gray-700">
					Selected content type
				</label>
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					className="p-4 border-2 border-yellow-300 rounded-lg bg-yellow-50"
				>
					<span className="text-sm font-medium">
						{formData.contentType || "Social media post"}
					</span>
				</motion.div>
			</div>

			{/* Pricing */}
			<div className="space-y-4">
				<label className="block text-sm font-medium text-gray-700">
					Upfront pricing
				</label>
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.1 }}
					className="text-xl md:text-2xl font-bold text-cyan-500"
				>
					Total price: ₹ {price.toLocaleString()}
				</motion.div>
			</div>

			{/* Agreements */}
			<div className="space-y-4">
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.2 }}
					className="flex items-start space-x-3"
				>
					<Checkbox
						id="upfront"
						checked={agreements.upfrontPayment}
						onCheckedChange={(checked) =>
							handleAgreementChange("upfrontPayment", checked)
						}
						className="border-themeBlue/50 data-[state=checked]:border-themeBlue/50 data-[state=checked]:bg-themeBlue/70 mt-0.5"
					/>
					<label
						htmlFor="upfront"
						className="text-sm text-gray-700 leading-relaxed"
					>
						I agree to the upfront payment for this order.
					</label>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.3 }}
					className="p-4 bg-gray-50 rounded-lg border text-sm text-gray-600"
				>
					If your request includes extra edits like custom animations, advanced
					retouching, or special effects, we will review your instructions and
					confirm the additional cost. Check our pricing details here:{" "}
					<a
						href="/pricing"
						target="_blank"
						rel="noopener noreferrer"
						className="text-themeBlue hover:underline transition-all duration-200 cursor-pointer"
					>
						Pricing
					</a>
					.
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.4 }}
					className="flex items-start space-x-3"
				>
					<Checkbox
						id="upgrades"
						checked={agreements.additionalUpgrades}
						onCheckedChange={(checked) =>
							handleAgreementChange("additionalUpgrades", checked)
						}
						className="border-themeBlue/50 data-[state=checked]:border-themeBlue/50 data-[state=checked]:bg-themeBlue/70 mt-0.5"
					/>
					<label
						htmlFor="upgrades"
						className="text-sm text-gray-700 leading-relaxed"
					>
						I acknowledge that any additional upgrades will be informed
						beforehand and will require payment before delivery.
					</label>
				</motion.div>

				<div className="pt-4 border-t border-gray-200">
					<p className="text-sm text-gray-700 mb-4">
						Please review and accept the terms before proceeding
					</p>

					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.5 }}
						className="flex items-start space-x-3 mb-3"
					>
						<Checkbox
							id="terms"
							checked={agreements.termsConditions}
							onCheckedChange={(checked) =>
								handleAgreementChange("termsConditions", checked)
							}
							className="border-themeBlue/50 data-[state=checked]:border-themeBlue/50 data-[state=checked]:bg-themeBlue/70 mt-0.5"
						/>
						<label htmlFor="terms" className="text-sm text-gray-700">
							I agree to the{" "}
							<a
								href="/terms-and-conditions"
								target="_blank"
								rel="noopener noreferrer"
								className="text-themeBlue hover:underline transition-all duration-200 cursor-pointer"
							>
								Terms & Conditions
							</a>
							.
						</label>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.6 }}
						className="flex items-start space-x-3"
					>
						<Checkbox
							id="privacy"
							checked={agreements.privacyPolicy}
							onCheckedChange={(checked) =>
								handleAgreementChange("privacyPolicy", checked)
							}
							className="border-themeBlue/50 data-[state=checked]:border-themeBlue/50 data-[state=checked]:bg-themeBlue/70 mt-0.5"
						/>
						<label htmlFor="privacy" className="text-sm text-gray-700">
							I acknowledge the{" "}
							<a
								href="/privacy-policy"
								target="_blank"
								rel="noopener noreferrer"
								className="text-themeBlue hover:underline transition-all duration-200 cursor-pointer"
							>
								Privacy & policy
							</a>
							.
						</label>
					</motion.div>
				</div>
			</div>

			{/* Summary */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.7 }}
				className="p-4 bg-green-50 rounded-lg border border-green-200 mb-5"
			>
				<div className="flex items-center space-x-2 mb-2">
					<Check className="h-5 w-5 text-green-600" />
					<span className="font-medium text-green-800">Order Summary</span>
				</div>
				<ul className="text-sm text-green-700 space-y-1">
					<li>• Content Type: {formData.contentType || "Social media post"}</li>
					{formData.contentType === "Social media post (post, story, etc.)" ? (
						<li>• Canvas: {formData.canvasType}</li>
					) : (
						<li>• Video duration: {formData.videoDuration}</li>
					)}
					<li>• Files: {formData.files.length} uploaded</li>
					<li>• Instructions: {formData.instructions.length} added</li>
					<li>• Links: {formData.relatedLinks.length} provided</li>
				</ul>
			</motion.div>
			
		</motion.div>
	);
};

export default StepFour;
