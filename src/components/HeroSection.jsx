import { useNavigate } from 'react-router-dom'
import { Button } from './Buttons'
import { motion } from 'motion/react'

const HeroSection = () => {

  const navigate = useNavigate()

  return (
		<div className="w-full flex items-center justify-center px-8 py-36 h-dvh bg-themeBlack">
			<div className="flex flex-col gap-9 items-center justify-center">
				<div className="text-center">
					{/* main heading */}
					<motion.h1
						initial={{ opacity: 0, filter: "blur(5px)" }}
						animate={{ opacity: 1, filter: "blur(0px)" }}
						className="text-white text-3xl md:text-4xl font-medium flex justify-center items-center gap-1 flex-wrap"
					>
						<span className="text-themeYellow italic text-3xl md:text-4xl font-medium">
							Welcome to
						</span>
						<img
							loading="lazy"
							src="./logo.png"
							alt="TUZU Logo"
							width='104'
							height='26'
							className="w-26"
						/>
						- Your One - Stop
					</motion.h1>
					<motion.h1
						initial={{ opacity: 0, filter: "blur(5px)" }}
						animate={{ opacity: 1, filter: "blur(0px)" }}
						className="text-white text-3xl lg:text-4xl font-medium mb-1"
					>
						Destination for Social Media Content Editing!
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="text-white font-light text-base md:text-lg"
					>
						Say goodbye to the hassle of editing and hello to polished,
						professional content that stands out.
					</motion.p>
				</div>
				{/* gradinent box */}
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}
					className="bg-linear-to-b from-themeBlue/15 via-[#737373]/15 to-themeBlack/15 w-full md:w-[75%] lg:w-[70%] xl:w-[50%] flex flex-col items-center justify-center px-8 py-8 rounded-3xl text-center gap-8"
				>
					{/* center box */}
					<h2 className="text-lg md:text-xl text-white font-light">
						Whether you're a budding influencer, a small business owner, or a
						marketing agency looking to make a splash on social media,{" "}
						<span className="font-semibold">we've got you covered.</span>
					</h2>
					<Button
						onClick={() => navigate("/create")}
						title={"Create with us"}
					/>
				</motion.div>
			</div>
		</div>
	);
}

export default HeroSection