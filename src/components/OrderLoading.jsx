import { motion } from "motion/react";
import { useState } from "react";

const OrderLoading = ({ uploadProgress, isOrderCompleted }) => {
	const [showMessage, setShowMessage] = useState(false);

    if(uploadProgress >= 100){
        setTimeout(() => setShowMessage(true), 10000)
    }

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.4 }}
			className="absolute rounded-3xl z-20 bg-white flex flex-col inset-0 m-auto px-6 sm:px-10 py-6 sm:py-8"
		>
			{/* header */}
			<div className="flex items-center justify-between mb-6 gap-3">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}
					className="text-lg md:text-2xl font-semibold text-gray-900"
				>
					Uploading Files
				</motion.h1>
				<div className="text-themeBlue font-bold text-2xl">TUZU</div>
			</div>

			{/* content */}
			<div className="flex grow flex-col items-center justify-center gap-1">
				<div className="w-full relative">
					<motion.div className="w-full max-w-md h-3 mx-auto bg-gray-200 rounded-full">
						<motion.div
							initial={{ width: "0%" }}
							animate={{ width: `${uploadProgress}%` }}
							transition={{ duration: 2, ease: "easeInOut" }}
							className="h-full bg-themeBlue rounded-full relative"
						>
							<span className="absolute -right-4 -bottom-7 text-sm font-semibold">
								{uploadProgress < 100 ? `${uploadProgress}%` : <Spinner />}
							</span>
						</motion.div>
					</motion.div>
				</div>
				<div className="text-gray-700 text-sm mt-9 text-center">
					{uploadProgress < 100 ? (
						<span>Uploading your files, please wait...</span>
					) : !isOrderCompleted ? (
						<>
							<span>Processing your request...</span>
							{showMessage && (
								<span className="block text-xs text-gray-400 mb-1">
									This may take a few minutes... Please wait
								</span>
							)}
						</>
					) : (
						<span>Done!</span>
					)}
				</div>
				<div className="text-gray-400 text-xs">
					Do not close this window until the upload is complete.
				</div>
			</div>
		</motion.div>
	);
};

export default OrderLoading;

const Spinner = () => {
	return (
		<motion.svg
			animate={{ rotate: 360 }}
			transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
			className="h-6 w-11 text-themeBlue"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 48 48"
		>
			<circle
				className="opacity-25"
				cx="24"
				cy="24"
				r="20"
				stroke="currentColor"
				strokeWidth="6"
			></circle>
			<path
				className="opacity-75"
				fill="currentColor"
				d="M8 24a16 16 0 0116-16v8a8 8 0 00-8 8H8z"
			></path>
		</motion.svg>
	);
};
