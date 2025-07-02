import AnimatedTick from "@/components/AnimatedTick";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DownloadIcon, OctagonAlert, Plus, Video, X } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import axios from "axios";

const Download = () => {
	// loading, download, review, review-confirm, download-confirm
	const [status, setStatus] = useState("loading");
	const [instructions, setInstruction] = useState([]);
	const [newInstruction, setNewInstruction] = useState("");
	const [error, setError] = useState("");
	const [data, setData] = useState(null);

	const orderId = new URLSearchParams(window.location.search).get("orderId");

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(
					// `http://localhost:8080/api/download?orderId=${orderId}`
					`https://tuzu-backend-785068118363.asia-south1.run.app/api/download?orderId=${orderId}`
				);
				setData(res.data);
				setStatus("download");
				setError("");
			} catch (err) {
				console.log(err);
				setError("Network error");
				setStatus("error");
			}
		};

		if (orderId) {
			fetchData();
		} else {
			setError("Missing order ID");
			setStatus("error");
		}
	}, [orderId]);

	const addInstruction = () => {
		if (newInstruction.trim()) {
			setInstruction([...instructions, newInstruction.trim()]);
			setNewInstruction("");
		}
	};

	const removeInstruction = (index) => {
		const updatedInstructions = instructions.filter((_, i) => i !== index);
		setInstruction(updatedInstructions);
	};

	const isDisabled = data?.status !== "";

	const fileId = data?.videoLink?.match(/\/d\/(.*?)\//)?.[1];

	const directDownloadLink = fileId
		? `https://drive.google.com/uc?export=download&id=${fileId}`
		: null;

	const renderContent = () => {
		switch (status) {
			case "download":
				return (
					<>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 }}
							className="px-4 sm:px-8 py-6 sm:py-8 grow space-y-3"
						>
							<p>Preview your content</p>
							<div className="border-2 border-themeYellow bg-yellow-50/40 rounded-md p-3">
								Order ID: #<span className="font-semibold">{orderId}</span>
							</div>
							<div className="flex items-end gap-4">
								<div className="border-2 border-themeBlue bg-cyan-50/40 rounded-lg p-2 flex w-fit gap-3 items-end">
									<iframe
										title="Video Preview"
										src={data.videoLink.replace("/view", "/preview")}
										// width="640"
										// height="360"
										allow="autoplay"
										allowFullScreen
										className="rounded-sm shadow-md"
									/>
								</div>
								<a
									// href={data.videoLink}
									href={directDownloadLink}
									target="_blank"
									rel="noopener noreferrer"
									title="Download"
									className="border-2 border-themeBlue rounded-full p-3 hover:bg-themeBlue/10 cursor-pointer"
								>
									<DownloadIcon size={20} />
								</a>
							</div>
							{data.status && (
								<p className="capitalize text-gray-400 font-medium">
									Status : {data.status}
								</p>
							)}
						</motion.div>

						<div className="px-4 sm:px-8 py-4 sm:py-6 border-t border-gray-100 flex gap-3 justify-end text-sm">
							<button
								onClick={() => setStatus("review")}
								disabled={isDisabled}
								className="rounded-md bg-themeBlue text-white px-4 py-2 cursor-pointer hover:scale-98 transition-all active:scale-102 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:bg-gray-400"
							>
								Request correction
							</button>
							<button
								onClick={() => setStatus("download-confirm")}
								className="rounded-md bg-themeYellow px-4 py-3 cursor-pointer hover:scale-98 transition-all active:scale-102"
							>
								Approve
							</button>
						</div>
					</>
				);
			case "review":
				return (
					<>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 }}
							className="px-4 sm:px-8 py-5 grow space-y-3"
						>
							<p className="text-left text-sm font-semibold w-28 transition-colors relative text-themeBlue">
								Description
								<span className="bg-themeBlue absolute h-0.5 w-full -bottom-1 left-0"></span>
							</p>

							<label className="block text-sm font-medium text-gray-700 mt-8">
								Add instructions
							</label>

							<div className="space-y-3">
								{instructions.map((instruction, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										className="flex items-center space-x-2 p-3 border border-yellow-200 rounded-lg bg-yellow-50"
									>
										<span className="flex-1 text-sm">{instruction}</span>
										<Button
											variant="ghost"
											size="sm"
											onClick={() => removeInstruction(index)}
											className="h-6 w-6 p-0 hover:bg-red-100"
										>
											<X className="h-3 w-3 text-red-500" />
										</Button>
									</motion.div>
								))}

								<div className="flex space-x-2">
									<Input
										placeholder="Add bike image in that transition"
										value={newInstruction}
										onChange={(e) => setNewInstruction(e.target.value)}
										className="border-yellow-200 focus:border-yellow-400 placeholder:text-sm"
										onKeyPress={(e) => e.key === "Enter" && addInstruction()}
									/>
									<motion.div
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
									>
										<Button
											onClick={addInstruction}
											variant="outline"
											className="border-themeYellow text-yellow-400 hover:bg-yellow-50 hover:text-yellow-600"
										>
											<span className="hidden sm:block">Add</span>
											<Plus className="h-4 w-4" />
										</Button>
									</motion.div>
								</div>

								{instructions.length > 0 && (
									<motion.button
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
										className="text-cyan-500 text-sm font-medium hover:text-cyan-600 flex items-center"
										onClick={addInstruction}
									>
										<Plus className="h-4 w-4 mr-1" />
										Add another note
									</motion.button>
								)}
							</div>
						</motion.div>

						<div className="px-4 sm:px-8 py-4 sm:py-6 border-t border-gray-100 flex gap-3 justify-end text-sm">
							<button
								onClick={() => setStatus("download")}
								className="rounded-md border-2 border-themeYellow px-6 py-2 cursor-pointer hover:scale-98 transition-all hover:bg-themeYellow/10 active:scale-102"
							>
								Back
							</button>
							<button
								onClick={() => handleSubmit()}
								className="rounded-md bg-themeYellow px-6 py-3 cursor-pointer hover:scale-98 transition-all active:scale-102"
							>
								Submit
							</button>
						</div>
					</>
				);
			case "review-confirm":
			case "download-confirm":
				return (
					<div className="flex grow flex-col items-center justify-center gap-4 ">
						<AnimatedTick />
						<div className="max-w-lg text-center">
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2, duration: 0.3 }}
							>
								{status === "download-confirm"
									? "Thank you!! For approving your content."
									: " We've received your revision request"}
							</motion.p>
							{status === "review-confirm" && (
								<motion.p
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.3, duration: 0.3 }}
									className="mt-2 text-sm"
								>
									Thank you for the feedback! Our team will review your
									instructions.
								</motion.p>
							)}
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.3, duration: 0.3 }}
								className=" text-sm"
							>
								We're glad you liked it! Your final output will now be shared
								with you via Email.
							</motion.p>
						</div>
					</div>
				);
			case "loading":
				return (
					<div className="flex grow items-center justify-center gap-3">
						<motion.div
							className="w-5 h-5 border-4 border-gray-300 border-t-4 border-t-themeBlue rounded-full"
							animate={{ rotate: 360 }}
							transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
						/>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="text-gray-500 text-lg"
						>
							Loading...
						</motion.div>
					</div>
				);
			case "error":
				return (
					<div className="flex items-center justify-center grow gap-2 text-red-500">
						<OctagonAlert />
						<p>{error || "Something went wrong..!!"}</p>
					</div>
				);
			default:
				return (
					<div className="flex items-center justify-center grow">
						<p className="text-gray-500">Something went wrong..!!</p>
					</div>
				);
		}
	};

	const handleSubmit = async () => {
		if (instructions.length === 0) {
			setError("Please add at least one instruction.");
			return;
		}

		try {
			const res = await axios.post(
				// `http://localhost:8080/api/update-sheet`
				`https://tuzu-backend-785068118363.asia-south1.run.app/api/update-sheet`,
				{
					orderId,
					desc: instructions.join(", "),
				}
			);
			setStatus("review-confirm");
		} catch (error) {
			console.error("Error updating sheet:", error);
			setError("Failed to submit instructions. Please try again.");
		}
	};

	return (
		<div className="bg-themeBlack pt-32 pb-16 px-4 sm:px-6">
			<div className="max-w-2xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="bg-white rounded-3xl shadow-lg overflow-hidden p-2 relative min-h-[47rem] flex flex-col"
				>
					{/* header */}
					<div className="px-4 sm:px-8 py-4 sm:py-6 border-b border-gray-100">
						{/* heading and logo */}
						<div className="flex items-center justify-between gap-3">
							<motion.h1
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.2 }}
								className="text-lg md:text-2xl font-semibold text-gray-900"
							>
								{status === "download"
									? "Your content is ready"
									: status === "review"
									? "Add instructions"
									: "Confirmation"}
								<span className="block text-gray-400 font-light text-sm">
									{status === "download"
										? "Please review your file and let us know how you would like to proceed"
										: status === "review"
										? "Share your edit instructions"
										: ""}
								</span>
							</motion.h1>
							<div className="text-themeBlue font-bold text-xl">TUZU</div>
						</div>
					</div>

					{/* main */}
					{renderContent()}
					
				</motion.div>
			</div>
		</div>
	);
};

export default Download;
