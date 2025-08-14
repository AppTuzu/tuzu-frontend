import { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { NavButton } from "./Buttons";
import { ModelContext } from "../context/ModelContext";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrollY, setScrollY] = useState(0);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [showNavbar, setShowNavbar] = useState(true);

	const navigate = useNavigate();

	const { toggleModal } = useContext(ModelContext);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			setScrollY(currentScrollY);

			if (currentScrollY > lastScrollY && currentScrollY > 50) {
				// Scrolling down
				setShowNavbar(false);
			} else if (currentScrollY < lastScrollY) {
				// Scrolling up
				setShowNavbar(true);
			}

			setLastScrollY(currentScrollY);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScrollY]);

	const navbarBackground =
		scrollY > 0
			? "bg-[radial-gradient(circle,_rgba(45,45,45,0.8),_rgba(32,32,32,0.8))] backdrop-blur-md shadow-lg"
			: "bg-[radial-gradient(circle,_#2d2d2d,_#202020)]";

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<motion.nav
			initial={{ y: -100, opacity: 0 }}
			animate={{
				y: showNavbar ? 0 : -100,
				opacity: showNavbar ? 1 : 0,
			}}
			whileInView={{ opacity: 1}}
			transition={{
				duration: 0.4,
				type: "spring",
				stiffness: 100,
				damping: 20,
			}}
			className={`flex fixed top-0 left-0 right-0 justify-between items-center sm:px-14 px-6 py-4 z-50 ${navbarBackground} transition-colors duration-500`}
		>
			{/* bg-[radial-gradient(circle,_#2d2d2d,_#202020)]" */}
			{/* bg-radial from-[#202020] to-[#2d2d2d] */}

			{/* logo */}
			<motion.div initial={{ opacity: 0}} animate={{ opacity: 1 }} transition={{ delay: 0.3}}>
				<Link
					onClick={() => setIsOpen(false)}
					to={"/"}
					className="cursor-pointer"
				>
					<img
						src="./logo.png"
						alt="Tuzu"
						width='116'
						height='29'
						className="w-29 cursor-pointer"
					/>
				</Link>
			</motion.div>

			{/* nav items */}
			<div className="flex items-center justify-center">
				{/* larger devices */}
				<div className="hidden lg:flex items-center font-light gap-12">
					<Link to={"/about"} className="text-white text-lg group relative">
						About us
						<span className="w-0 h-[2px] left-0 -bottom-1 absolute bg-white/70 origin-left group-hover:w-full transition-all duration-500" />
					</Link>

					<p
						onClick={toggleModal}
						className="text-white relative text-lg group cursor-pointer"
					>
						Our app
						<span className="w-0 left-0 -bottom-1 absolute h-[2px] bg-white/70 origin-left group-hover:w-full transition-all duration-500" />
					</p>

					<NavButton onClick={() => navigate("/create")} />
				</div>

				{/* smaller devices */}
				<div className="lg:hidden">
					<Icon isOpen={isOpen} toggleMenu={toggleMenu} />

					<AnimatePresence>
						{isOpen && (
							<motion.div
								initial="hidden"
								// animate={isOpen ? "show" : "hidden"}
								animate="show"
								exit="hidden"
								variants={{
									hidden: {
										maxHeight: 0,
										opacity: 0,
										overflow: "hidden",
										pointerEvents: "none",
										transition: {
											duration: 0.4,
											ease: "linear",
											delay: 0.25,
										},
									},
									show: {
										maxHeight: 500,
										opacity: 1,
										pointerEvents: "auto",
										transition: {
											duration: 0.4,
											ease: "linear",
											staggerChildren: 0.2,
											delayChildren: 0.5,
										},
									},
								}}
								className={`w-screen bg-[radial-gradient(circle,_#2d2d2d,_#202020)] sm:px-14 px-6 py-8 absolute left-0 top-[75px] flex flex-col justify-center items-start gap-8`}
							>
								<motion.div
									variants={{
										hidden: {
											opacity: 0,
											y: 40,
											transition: { duration: 0.3 },
										},
										show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
									}}
								>
									<Link
										onClick={toggleMenu}
										to={"/about"}
										className="text-white relative text-lg group"
									>
										About us
										<span className="w-0 left-0 -bottom-1 absolute h-[2px] bg-white/70 origin-left group-hover:w-full transition-all duration-500" />
									</Link>
								</motion.div>

								<motion.p
									variants={{
										hidden: {
											opacity: 0,
											y: 40,
											transition: { duration: 0.3 },
										},
										show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
									}}
									className="text-white relative text-lg group cursor-pointer"
									onClick={() => {
										toggleMenu();
										toggleModal();
									}}
								>
									Our app
									<span className="w-0 left-0 -bottom-1 absolute h-[2px] bg-white/70 origin-left group-hover:w-full transition-all duration-500" />
								</motion.p>

								<motion.div
									variants={{
										hidden: {
											opacity: 0,
											y: 40,
											transition: { duration: 0.3 },
										},
										show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
									}}
								>
									<NavButton
										onClick={() => {
											toggleMenu();
											navigate("/create");
										}}
									/>
								</motion.div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</motion.nav>
	);
};

const Icon = ({ isOpen, toggleMenu }) => {
	return (
		<motion.div
			onClick={toggleMenu}
			initial={{ borderRadius: "8px" }}
			animate={{ borderRadius: isOpen ? "100%" : "8px" }}
			// transition={{duration: 0.5, ease: "linear", delay: 0}}
			className={`bg-transparent ${isOpen ? "px-2" : "px-2"} py-1 cursor-pointer`}
		>
			<motion.svg
				width="35"
				height="35"
				viewBox="0 0 22 14"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<motion.line
					initial={{ x1: 1, y1: 1, x2: 20, y2: 1 }}
					animate={{
						x1: isOpen ? 4 : 1,
						y1: isOpen ? 1 : 1,
						x2: isOpen ? 18 : 20,
						y2: isOpen ? 13 : 1,
					}}
					x1="1"
					y1="1"
					x2="20"
					y2="1"
					stroke="#E0E0E0"
					strokeWidth="1.5"
					transition={{ duration: 0.5, ease: "easeInOut" }}
					strokeLinecap="round"
				/>
				<motion.line
					initial={{ x1: 1, y1: 7, x2: 20, y2: 7 }}
					animate={{
						x1: isOpen ? 11 : 1,
						y1: isOpen ? 7 : 7,
						x2: isOpen ? 11 : 20,
						y2: isOpen ? 7 : 7,
					}}
					transition={{ duration: 0.4, ease: "easeInOut" }}
					x1="1"
					y1="7"
					x2="20"
					y2="7"
					stroke="#E0E0E0"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
				<motion.line
					initial={{ x1: 1, y1: 13, x2: 20, y2: 13 }}
					animate={{
						x1: isOpen ? 4 : 1,
						y1: isOpen ? 13 : 13,
						x2: isOpen ? 18 : 20,
						y2: isOpen ? 1 : 13,
					}}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					x1="1"
					y1="13"
					x2="20"
					y2="13"
					stroke="#E0E0E0"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
			</motion.svg>
		</motion.div>
	);
};

export default Navbar;
