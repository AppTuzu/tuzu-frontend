import { motion } from "motion/react";
import { Link } from "react-router-dom";

const OrderConfirmation = ({orderId}) => {
	const data = [
		{
			id: 1,
			content: (
				<>
					Thank You!! Your order has been successfully placed with Order ID :{" "}
					<span className="font-semibold">{orderId}</span>
				</>
			),
		},
		{
			id: 2,
			content:
				"Our team will review the details and begin processing your order shortly.Once your content is ready, you'll receive the notification via email and WhatsApp",
		},
		{
			id: 3,
			content: (
				<Link
					to="/"
					className="bg-themeYellow py-2 px-6 rounded-lg hover:bg-yellow-300 border-2 border-yellow-400"
				>
					Go to Home
				</Link>
			),
		},
	];

	return (
		<motion.div
			// initial={{ opacity: 0, width: "70%", height: "20%" }}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.4 }}
			className="absolute rounded-3xl flex flex-col inset-0 m-auto p-6 md:p-8"
		>
			{/* header */}
			<div className="flex items-center justify-between mb-6 gap-3">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}
					className="text-lg md:text-2xl font-semibold text-gray-900"
				>
					Confirmation
				</motion.h1>
				<div className="text-themeBlue font-bold text-2xl">TUZU</div>
			</div>

			{/* content */}
			<div className="flex grow flex-col items-center justify-center gap-4 ">
				<AnimatedTick />
				<div className="max-w-md text-center">
					{data.map((item) => (
						<motion.p
							key={item.id}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 + item.id * 0.1, duration: 0.3 }}
							className={` ${item.id === 3 ? "mt-6" : "mt-0"} `}
						>
							{item.content}
						</motion.p>
					))}
				</div>
			</div>
		</motion.div>
	);
};

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

export default OrderConfirmation;
