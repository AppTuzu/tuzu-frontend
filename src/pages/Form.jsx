import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import StepOne from "@/components/StepOne";
import StepTwo from "@/components/StepTwo";
import StepThree from "@/components/StepThree";
import StepFour from "@/components/StepFour";
import axios from "axios";
import { initialFormData } from "@/utils/data";
import { createFormData, validateForm } from "@/utils/helperFunction";
import OrderConfirmation from "@/components/OrderConfirmation";
import OrderLoading from "@/components/OrderLoading";

const FormPrev = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const [formData, setFormData] = useState(initialFormData);
	// !make it false development stage
	const [agreements, setAgreements] = useState({
		upfrontPayment: false,
		additionalUpgrades: false,
		termsConditions: false,
		privacyPolicy: false,
	});
	const [error, setError] = useState("");
	const [orderId, setOrderId] = useState("");
	const [isOrderCompleted, setIsOrderCompleted] = useState(false);
	const [loading, setLoading] = useState(false);
	const [uploadProgress, setUploadProgress] = useState(0);
 
	useEffect(() => {
		const isSocialMedia =
			formData.contentType === "Social media post (post, story, etc.)";

		setFormData((prev) => ({
			...prev,
			// If social media → clear video fields
			videoDuration: isSocialMedia ? "" : prev.videoDuration || "15-sec",
			textToSpeech: isSocialMedia ? "" : prev.textToSpeech || "no",
			textToSpeechFile: isSocialMedia ? null : prev.textToSpeechFile,
			// If NOT social media → clear canvas type
			canvasType: isSocialMedia ? prev.canvasType || "instagram-post-4-5" : "",
		}));
	}, [formData.contentType]);

	// console.log("Form Data : ", formData);

	const steps = [
		{ number: 1, title: "Details", component: StepOne },
		{ number: 2, title: "Content Inputs", component: StepTwo },
		{ number: 3, title: "Description", component: StepThree },
		{ number: 4, title: "Checkout", component: StepFour },
	];

	// !validation  development stage
	const canProceedToNextStep = () => {
		switch (currentStep) {
			case 1:
				return (
					formData.contentType !== "" &&
					formData.email !== "" &&
					formData.number !== ""
				);
			case 2:
				// 	// For vertical video and AI avatar, require files
				// if (
				// 	formData.contentType === "Vertical video (reels, shorts, etc.)" ||
				// 	formData.contentType === "AI avatar (reels, shorts, etc.)"
				// ) {
				// return formData.files.length > 0;
				return true;
			// }
			// case 3:
			// 	return formData.files.length > 0;
			// case 4:
			// 	return formData.files.length > 0;
			// 	// For social media, allow proceeding without files
			// 	return true;
			default:
				return true;
		}
	};

	const handleNext = () => {
		if (currentStep < steps.length && canProceedToNextStep()) {
			setCurrentStep(currentStep + 1);
		}
		// if (error === '' && currentStep < steps.length) {
		// 	setCurrentStep(currentStep + 1);
		// }
	};

	const handleBack = () => {
		if (currentStep > 1) {
			setCurrentStep(currentStep - 1);
		}
	};

	const handleStepClick = (stepNumber) => {
		if (stepNumber > currentStep && !canProceedToNextStep()) {
			setError(
				"Please fill the required details before proceeding to the next step."
			);
			return;
		}
		if (stepNumber > currentStep + 1) {
			setError("Please complete the previous step before proceeding.");
			return;
		}
		setError("");
		setCurrentStep(stepNumber);
	};

	const updateFormData = (data) => {
		setFormData({ ...formData, ...data });
	};

	const handleSubmit = async () => {
		const allAgreed = Object.values(agreements).every(Boolean);
		if (!allAgreed) {
			setError("Please accept all terms to continue");
			return;
		}

		const validationError = validateForm(formData);
		if (validationError) {
			setError(validationError);
			return;
		}

		setError("");
		const data = createFormData(formData);
		console.log("Form Data for backend : ", data);
		// for (const [key, value] of data.entries()) {
		// 	console.log(`${key}:`, value);
		// }

		try {
			setLoading(true);
			const res = await axios.post(
				`${import.meta.env.VITE_BACKEND_URL}/api/form`,
				data,
				{
					headers: { "Content-Type": "multipart/form-data" },
					onUploadProgress: (progressEvent) => {
						const percent = Math.round(
							(progressEvent.loaded * 100) / progressEvent.total
						);
						setUploadProgress(percent);
					},
				}
			);
			if (res.data.success) {
				// setCurrentStep(1)
				// setFormData(initialFormData)
				// setAgreements({
				// 	upfrontPayment: false,
				// 	additionalUpgrades: false,
				// 	termsConditions: false,
				// 	privacyPolicy: false,
				// });
				setOrderId(res.data.orderId);
				setIsOrderCompleted(true);
				console.info("Form submitted !!");
				console.log("Response : ", res.data);
			} else {
				setError("Failed to upload files. Please try again.");
			}
		} catch (error) {
			console.error("Upload Failed", error);
			setError("Failed to upload files. Please try again.");
		} finally {
			setLoading(false);
			setUploadProgress(0);
		}
	};

	const CurrentStepComponent = steps[currentStep - 1].component;

	return (
		<div className="bg-themeBlack pt-32 pb-16 px-4 sm:px-6">
			<div className="max-w-2xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="bg-white rounded-3xl shadow-lg overflow-hidden p-2 relative min-h-[47rem]"
				>
					{!loading && !isOrderCompleted ? (
						<>
							{/* Header & progress bar */}
							<div className="px-4 sm:px-8 py-4 sm:py-6 border-b border-gray-100">
								{/* heading and logo */}
								<div className="flex items-center justify-between mb-6 gap-3">
									<motion.h1
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 0.2 }}
										className="text-lg md:text-2xl font-semibold text-gray-900"
									>
										{steps[currentStep - 1].title === "Details" &&
											"Share your contact details"}
										{steps[currentStep - 1].title === "Content Inputs" &&
											"Upload your files"}
										{steps[currentStep - 1].title === "Description" &&
											"Add instructions & references"}
										{steps[currentStep - 1].title === "Checkout" &&
											"Order Summary"}
										<span className="block text-gray-400 font-light text-sm">
											{steps[currentStep - 1].title === "Details" &&
												"Please enter your contact details."}
											{steps[currentStep - 1].title === "Content Inputs" &&
												"Provide the necessary details for your content editing."}
											{steps[currentStep - 1].title === "Description" &&
												"Share your edit instructions and reference links for inspiration."}
											{steps[currentStep - 1].title === "Checkout" &&
												"Review your order and finish & agree to the terms before payment"}
										</span>
									</motion.h1>
									<div className="text-themeBlue font-bold text-xl">TUZU</div>
								</div>

								{/* Step Progress */}
								<div className="grid grid-cols-4 gap-4">
									{steps.map((step, index) => (
										<motion.button
											key={step.number}
											onClick={() => handleStepClick(step.number)}
											className={`pb-2 text-left text-sm font-medium transition-colors relative ${
												currentStep === step.number
													? "text-themeBlue"
													: currentStep > step.number
													? "text-green-500"
													: "text-gray-300"
											}`}
											// whileHover={{ scale: 1.05 }}
											// whileTap={{ scale: 0.95 }}
										>
											<span
												className={`sm:hidden border-1 px-3 rounded-full ${
													currentStep === step.number
														? "border-themeBlue"
														: currentStep > step.number
														? "border-green-500"
														: "border-gray-300"
												} `}
											>
												{step.number}
											</span>
											<span className="hidden sm:block">{step.title}</span>
											<motion.div
												className={`absolute bottom-0 left-0 right-0 h-0.5 ${
													currentStep > step.number
														? "bg-green-500"
														: "bg-gray-300"
												} `}
												initial={{ opacity: 0 }}
												animate={{ opacity: 1 }}
											/>
											<AnimatePresence>
												{currentStep === step.number && (
													<motion.div
														className="absolute bottom-0 left-0 right-0 h-0.5 bg-themeBlue"
														// layoutId="activeTab"
														initial={{
															opacity: 1,
															width: 0,
														}}
														animate={{
															opacity: 1,
															width: "100%",
														}}
														exit={{
															opacity: 1,
															width: 0,
														}}
													/>
												)}
											</AnimatePresence>
										</motion.button>
									))}
								</div>
							</div>

							{/* Step Content */}
							<div className="px-4 sm:px-8 py-4 sm:py-6 min-h-[500px]">
								<AnimatePresence mode="wait">
									<motion.div
										key={currentStep}
										initial={{ opacity: 0, x: 20 }}
										animate={{ opacity: 1, x: 0 }}
										exit={{ opacity: 0, x: -20 }}
										transition={{ duration: 0.3 }}
									>
										<CurrentStepComponent
											formData={formData}
											updateFormData={updateFormData}
											setError={setError}
											agreements={agreements}
											setAgreements={setAgreements}
										/>
									</motion.div>
								</AnimatePresence>
							</div>

							{/* validation message */}
							{error && (
								<div className="px-4 sm:px-8 pb-4">
									<div className="bg-red-50 border border-red-200 rounded-lg p-3">
										<p className="text-sm text-red-600">{error}</p>
									</div>
								</div>
							)}

							{/* Footer */}
							<div className="px-4 sm:px-8 py-4 sm:py-6 border-t border-gray-100 flex justify-between">
								<motion.div
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
								>
									<Button
										variant="outline"
										onClick={handleBack}
										disabled={currentStep === 1}
										className="px-6"
									>
										{/* {currentStep === 1 ? "Cancel" : "Back"} */}
										Back
									</Button>
								</motion.div>

								<motion.div
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
								>
									<Button
										// onClick={handleNext}
										onClick={
											currentStep === steps.length ? handleSubmit : handleNext
										}
										disabled={
											currentStep === steps.length
												? false
												: !canProceedToNextStep()
										}
										// disabled={currentStep === steps.length}
										className="px-6 bg-yellow-400 hover:bg-yellow-500 text-black font-medium"
									>
										{/* //! Submit or Checkoput */}
										{currentStep === steps.length ? "Submit" : "Next"}
									</Button>
								</motion.div>
							</div>
						</>
					) : !isOrderCompleted ? (
						<OrderLoading
							uploadProgress={uploadProgress}
							isOrderCompleted={isOrderCompleted}
						/>
					) : (
						<OrderConfirmation orderId={orderId} />
					)}
				</motion.div>
			</div>
		</div>
	);
};

export default FormPrev;
