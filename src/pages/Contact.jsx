import { FaEnvelope } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
	return (
		<div className="pt-36 pb-14 flex flex-col gap-5 px-10 sm:px-16 bg-themeBlack text-white min-h-[calc(100vh-488px)] md:min-h-[calc(100vh-261px)]">
			<div>
				<h2 className="text-center text-2xl sm:text-3xl font-bold mb-10">
					Contact Us
				</h2>
				<div className="space-y-4 max-w-3xl mx-auto">
					<div>
						<h4>Address:</h4>
						<p>
							TUZU MEDIA TECHNOLOGIES PRIVATE LIMITED <br />
							UNIT 101, OXFORD TOWERS, 139, HAL OLD AIRPORT RD, H.A.L II Stage,
							Bangalore North, Bangalore- 560008, Karnataka, India.
						</p>
					</div>
					<div>
						<h4>Email Id:</h4>
						<p>hello@tuzuapp.com</p>
					</div>

					{/* contact */}
					<div className="py-16 border-t border-t-themeBlue/20 flex flex-col items-center justify-center gap-5 text-white">
						<div className="text-center">
							<h2 className="text-lg md:text-3xl font-semibold">
								Have more queries?
							</h2>
							<h3 className="text-lg md:text-3xl font-semibold">Contact us</h3>
						</div>
						<div className="flex flex-col gap-3 items-center justify-center">
							<Button
								href={"https://wa.me/918078171908"}
								icon={<IoLogoWhatsapp />}
								title={"Chat with us"}
							/>
							<Button
								href={"mailto:hello@tuzuapp.com?subject=Support%20Request"}
								icon={<FaEnvelope />}
								title={"Write to us"}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;


const Button = ({ icon, title, href }) => {
	return (
		<a
			href={href}
			target="_blank"
			className="bg-themeYellow text-black w-54 md:w-64 px-8 py-2 md:py-3 text-lg rounded-lg justify-center flex items-center gap-3 font-semibold cursor-pointer hover:scale-[102%] hover:shadow-lg shadow-themeYellow/30 active:scale-99 transition-all duration-300"
		>
			{icon}
			{title}
		</a>
	);
};