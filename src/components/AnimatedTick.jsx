import { motion } from "motion/react";

const AnimatedTick = () => {
	return (
		<svg
			width="100"
			height="100"
			viewBox="0 0 100 100"
			fill="none"
			stroke="#0CC0DF"
			strokeWidth="5"
		>
			{/* Circle outline */}
			<motion.circle
				cx="50"
				cy="50"
				r="40"
				strokeLinecap="round"
				strokeDasharray="1"
				initial={{ pathLength: 0, opacity: 0, scale: 0.8 }}
				animate={{ pathLength: 1, opacity: 1, scale: 1 }}
				transition={{ duration: 0.4 }}
			/>

			{/* Tick mark */}
			<motion.path
				d="M35 50 L45 60 L65 40"
				fill="none"
				stroke="#0CC0DF"
				strokeLinecap="round"
				strokeLinejoin="round"
				initial={{ pathLength: 0, opacity: 0, scale: 0.8 }}
				animate={{ pathLength: 1, opacity: 1, scale: 1 }}
				transition={{ duration: 0.5, delay: 0.2 }}
			/>
		</svg>
	);
};

export default AnimatedTick;
