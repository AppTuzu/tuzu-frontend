import { useNavigate } from 'react-router-dom'
import { Button } from './Buttons'

const HeroSection = () => {

  const navigate = useNavigate()

  return (
		<div className="w-full flex items-center justify-center px-8 py-36 h-screen bg-themeBlack">
			<div className="flex flex-col gap-9 items-center justify-center">
				<div className="text-center">
					{/* main heading */}
					<h1 className="text-white text-3xl md:text-4xl font-medium flex justify-center items-center gap-1 flex-wrap">
						<span className="text-themeYellow italic text-3xl md:text-4xl font-medium">
							Welcome to
						</span>
						<img
							loading="lazy"
							src="./logo.png"
							alt="TUZU Logo"
							className="w-26"
						/>
						- Your One-Stop
					</h1>
					<h1 className="text-white text-3xl lg:text-4xl font-medium mb-1">
						Destination for Social Media Content Editing!
					</h1>
					<p className="text-white font-light text-base md:text-lg">
						Say goodbye to the hassle of editing and hello to polished,
						professional content that stands out.
					</p>
				</div>
				<div className="bg-linear-to-b from-themeBlue/15 via-[#737373]/15 to-themeBlack/15 w-full md:w-[75%] lg:w-[70%] xl:w-[50%] flex flex-col items-center justify-center px-8 py-8 rounded-3xl text-center gap-8">
					{/* center box */}
					<h3 className="text-xl md:text-2xl text-white font-light">
						Whether you're a budding influencer, a small business owner, or a
						marketing agency looking to make a splash on social media,{" "}
						<span className="font-semibold">we've got you covered.</span>
					</h3>
					<Button
						onClick={() => navigate("/create")}
						title={"Create with us"}
					/>
				</div>
			</div>
		</div>
	);
}

export default HeroSection