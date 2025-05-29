import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Checkbox } from '../components/ui/checkbox';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const StepFour = ({ formData, updateFormData, agreements, setAgreements}) => {
  
	const handleAgreementChange = (key, checked) => {
		setAgreements({ ...agreements, [key]: checked });
	};

	// const allAgreed = Object.values(agreements).every(Boolean);
	// console.log(allAgreed);

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="space-y-6"
		>
			{/* <p className="text-gray-500 text-sm">
        Review your order and finish & agree to the terms before payment
      </p> */}

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
					Total price: ₹249
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
					<Link
						to="/pricing"
						className="text-themeBlue hover:underline transition-all duration-200 cursor-pointer"
					>
						Pricing
					</Link>
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
							<Link
								to="/terms-and-conditions"
								className="text-themeBlue hover:underline transition-all duration-200 cursor-pointer"
							>
								Terms & Conditions
							</Link>
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
							<Link
								to="/privacy-policy"
								className="text-themeBlue hover:underline transition-all duration-200 cursor-pointer"
							>
								Privacy & policy
							</Link>
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
					<li>• Canvas: {formData.canvasType}</li>
					<li>• Files: {formData.files.length} uploaded</li>
					<li>• Instructions: {formData.instructions.length} added</li>
					<li>• Links: {formData.relatedLinks.length} provided</li>
				</ul>
			</motion.div>

			{/* Checkout Button */}
			{/* <motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 0.8 }}
				className="pt-4"
			>
				<Button
					disabled={!allAgreed}
					className={`w-full py-3 text-lg font-medium transition-all ${
						allAgreed
							? "bg-yellow-400 hover:bg-yellow-500 text-black"
							: "bg-gray-200 text-gray-400 cursor-not-allowed"
					}`}
				>
					{allAgreed ? "Checkout" : "Please accept all terms to continue"}
				</Button>
			</motion.div> */}

		</motion.div>
	);
};

export default StepFour;