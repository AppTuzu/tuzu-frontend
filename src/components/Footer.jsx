import { useContext } from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ModelContext } from "../context/ModelContext";
import { motion } from "motion/react";

const Footer = () => {
	const { toggleModal } = useContext(ModelContext);

	const footer_links1 = [
		{
			title: "About us",
			link: "/about",
		},
		{
			title: "Contact us",
			link: "/contact-us",
		},
		{
			title: "Pricing",
			link: "/pricing",
		},
	];
	const footer_links2 = [
		{
			title: "Privacy policy",
			link: "/privacy-policy",
		},
		{
			title: "Terms and conditions",
			link: "/terms-and-conditions",
		},
		{
			title: "Refund and cancellation policy",
			link: "/refund-and-cancellation-policy",
		},
	];

	return (
		<div className="bg-themeBlack text-white w-full px-20 lg:px-32 xl:px-48 py-16 border-t border-t-themeBlue/20 flex flex-col md:flex-row justify-between gap-8">
			<div className="flex flex-col gap-3">
				{footer_links1.map((item, index) => (
					<Link
						to={item.link}
						key={index}
						className="cursor-pointer transition-all duration-200 hover:text-[#81b5be] pl-2 md:pl-0 hover:scale-[102%]"
					>
						<motion.span
							initial={{ opacity: 0, filter: "blur(5px)" }}
							whileInView={{ opacity: 1, filter: "blur(0px)" }}
							transition={{ duration: 0.3, delay: index * 0.1 }}
						>
							{item.title}
						</motion.span>
					</Link>
				))}
				<motion.p
					initial={{ opacity: 0, filter: "blur(5px)" }}
					whileInView={{ opacity: 1, filter: "blur(0px)" }}
					transition={{ duration: 0.3, delay: 0.4 }}
					className="cursor-pointer transition-all duration-200 hover:text-[#81b5be] pl-2 md:pl-0 hover:scale-[102%]"
					onClick={toggleModal}
				>
					Our app
				</motion.p>
			</div>

			<div className="flex flex-col gap-3">
				{footer_links2.map((item, index) => (
					<Link
						to={item.link}
						key={index}
						className="cursor-pointer transition-all duration-200 hover:text-[#81b5be] pl-2 md:pl-0 hover:scale-[102%]"
					>
						<motion.span
							initial={{ opacity: 0, filter: "blur(5px)" }}
							whileInView={{ opacity: 1, filter: "blur(0px)" }}
							transition={{ duration: 0.3, delay: index * 0.1 }}
						>
							{item.title}
						</motion.span>
					</Link>
				))}
			</div>

			<motion.div
				initial={{ opacity: 0, y: 0 }}
				whileInView={{ opacity: 1, y: 10 }}
				transition={{ duration: 0.3, delay: 0.4 }}
				className="flex flex-col w-32 gap-1"
			>
				<Link to="/">
					<img
						loading="lazy"
						src="./logo.png"
						alt="Tuzu Logo"
						className="w-32 cursor-pointer"
					/>
				</Link>
				<div className="flex justify-center gap-5 px-3">
					{/* <a href="#" onClick={(e) => e.preventDefault()} rel="noopener noreferrer">
            <FaYoutube className="transition-all duration-200 cursor-pointer hover:text-[#81b5be]" />
          </a> */}
					<a
						href="https://www.instagram.com/tuzu_app/"
						target="_blank"
						aria-label="Follow us on Instagram"
						rel="noopener noreferrer"
					>
						<FaInstagram className="transition-all duration-200 cursor-pointer hover:text-[#81b5be]" />
					</a>
					<a
						href="https://www.linkedin.com/company/tuzu-app/"
						target="_blank"
						aria-label="Follow us on Linkedin"
						rel="noopener noreferrer"
					>
						<FaLinkedinIn className="transition-all duration-200 cursor-pointer hover:text-[#81b5be]" />
					</a>
					{/* <a href="#" onClick={(e) => e.preventDefault()} rel="noopener noreferrer">
            <FaXTwitter className="transition-all duration-200 cursor-pointer hover:text-[#81b5be]" />
          </a> */}
				</div>
			</motion.div>
		</div>
	);
};

export default Footer;
