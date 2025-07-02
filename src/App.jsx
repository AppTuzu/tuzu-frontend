import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ModelContext } from "./context/ModelContext";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "motion/react";
import { Suspense, lazy } from "react";
import Loading from "./components/Loading";
import GooglePlayLogo from "./assets/android-logo.png";
import AppleStoreLogo from "./assets/apple-logo.png";

const App = () => {
	const { isModalOpen, toggleModal } = useContext(ModelContext);

	useEffect(() => {
		isModalOpen
			? (document.body.style.overflow = "hidden")
			: (document.body.style.overflow = "auto");
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isModalOpen]);


	const Home = lazy(() => import("./pages/Home"));
	const About = lazy(() => import("./pages/About"));
	const Navbar = lazy(() => import("./components/Navbar"));
	const Footer = lazy(() => import("./components/Footer"));
	const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
	const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
	const RefundAndCancellation = lazy(() =>
		import("./pages/RefundAndCancellation")
	);
	const Contact = lazy(() => import("./pages/Contact"));
	const Service = lazy(() => import("./pages/Service"));
	const NotFound = lazy(() => import("./pages/NotFound"));
	const Form = lazy(() => import("./pages/Form"));
	const Pricing = lazy(() => import("./pages/Pricing"));
	const Download = lazy(() => import("./pages/Download"));

	return (
		<div className="font-poppins overflow-x-hidden selection:bg-themeYellow/60 selection:text-themeBlack">
			<AnimatePresence>
				{isModalOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 w-full h-screen bg-themeBlue/7 z-60 px-8 backdrop-blur-[2px]"
						onClick={toggleModal}
					>
						<motion.div
							initial={{ y: -450, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: -300, opacity: 0 }}
							transition={{ duration: 0.5, type: "spring", damping: 10 }}
							className="bg-themeBlack rounded-3xl border-2 border-themeBlue/40 text-white flex flex-col gap-5 justify-center items-center px-5 sm:px-10 lg:px-14 py-9 md:py-12 w-full max-w-2xl mx-auto mt-20 relative"
							onClick={(e) => e.stopPropagation()}
						>
							<IoMdClose
								onClick={toggleModal}
								className="absolute right-5 top-4 text-3xl md:top-5 md:right-7 cursor-pointer hover:bg-zinc-600 rounded-full p-0.5 hover:scale-105"
							/>
							<h2 className="text-lg mt-4 md:text-2xl font-bold">
								We're working on it!
							</h2>
							<p className="text-center font-light">
								Your all-in-one content solution, we're building a platform to
								meet all your social media content needs from editing to design
								and beyond. Stay tuned for exciting updates
							</p>
							<div className="flex gap-8 items-center justify-center">
								<img
									loading="lazy"
									src={GooglePlayLogo}
									alt="Google Play Store Logo"
									className="w-24 sm:w-36"
								/>
								<img
									loading="lazy"
									src={AppleStoreLogo}
									alt="App Store Logo"
									className="w-24 sm:w-36"
								/>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			<Suspense fallback={<Loading />}>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/service/:slug" element={<Service />} />
					<Route path="/create" element={<Form />} />
					<Route path="/privacy-policy" element={<PrivacyPolicy />} />
					<Route
						path="/terms-and-conditions"
						element={<TermsAndConditions />}
					/>
					<Route
						path="/refund-and-cancellation-policy"
						element={<RefundAndCancellation />}
					/>
					<Route path="/contact-us" element={<Contact />} />
					<Route path="/pricing" element={<Pricing />} />
					<Route path="/download" element={<Download />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</Suspense>
		</div>
	);
};

export default App;
