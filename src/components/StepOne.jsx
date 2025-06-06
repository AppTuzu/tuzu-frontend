import { motion } from "motion/react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../components/ui/select";
// import { Input } from "./ui/input";

const StepOne = ({ formData, updateFormData, setError }) => {
	
	const contentTypes = [
		"Social media post (post, story, etc.)",
		"Vertical video (reels, shorts, etc.)",
		"AI avatar (reels, shorts, etc.)",
	];

	//Todo ->  rowos11660@ofular.com

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="space-y-6"
		>
			{/* <p className="text-gray-500 text-sm">Please share your contact details</p> */}

			<div className="space-y-4">
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Email address*
					</label>
					<input
						value={formData.email}
						onBlur={(e) => {
							if (!e.target.validity.valid) {
								setError("Please enter a valid email address");
							} else {
								setError("");
							}
						}}
						type="email"
						required
						pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
						onChange={(e) => updateFormData({ email: e.target.value })}
						placeholder="Enter your email address"
						className="text-black placeholder:text-[13px] placeholder:text-slate-400 border-2 border-yellow-200 w-full px-3 py-1.5 rounded-lg focus-visible:ring-4 focus-visible:ring-themeYellow"
					/>
				</div>
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						WhatsApp number*
					</label>
					<input
						type="text"
						required
						onBlur={(e) => {
							if (!/^\d{10}$/.test(e.target.value)) {
								setError("Please enter a valid 10-digit number");
							} else {
								setError("");
							}
						}}
						maxLength={10}
						value={formData.number}
						onChange={(e) => updateFormData({ number: e.target.value })}
						placeholder="Enter your whatsapp number"
						className="text-black placeholder:text-[13px] placeholder:text-slate-400 border-2 border-yellow-200 w-full px-3 py-1.5 rounded-lg focus-visible:ring-4 focus-visible:ring-themeYellow"
					/>
				</div>
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Content type*
					</label>
					<Select
						value={formData.contentType}
						onValueChange={(value) => updateFormData({ contentType: value })}
					>
						<SelectTrigger className="w-full border-2 border-yellow-200  rounded-md focus-visible:ring-4 focus-visible:ring-themeYellow	">
							{/* <SelectValue placeholder="Videos" /> */}
							<SelectValue placeholder="Choose" />
						</SelectTrigger>
						<SelectContent className="bg-white border-2 border-yellow-200 shadow-lg">
							{contentTypes.map((type, index) => (
								<SelectItem
									key={index}
									value={type}
									className="py-2.5 cursor-pointer"
								>
									{type}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
			</div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.3 }}
				className="mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200"
			>
				<p className="text-sm text-gray-600">
					💡 Choose the type of content you want to create. This helps us
					prepare the right tools and templates for your project.
				</p>
			</motion.div>
		</motion.div>
	);
};

export default StepOne;
