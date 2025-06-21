import { useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Upload, Check } from "lucide-react";
import { canvasTypeInfo, videoDurationInfo } from "@/utils/data";
import { IoMdClose } from "react-icons/io";

const StepTwo = ({ formData, updateFormData, setError }) => {
	const fileInputRef = useRef(null);
	const brandKitRef = useRef(null);
	const textFileRef = useRef(null);
	const scriptFileRef = useRef(null);

	const handleFileUpload = (files) => {
		if (files) {
			// setUrl(URL.createObjectURL(files[0]));
			const fileArray = Array.from(files);
			updateFormData({ files: [...formData.files, ...fileArray] });
		}
	};

	const handleBrandKitUpload = (files) => {
		if (files && files[0]) {
			updateFormData({ brandKit: files[0] });
		}
	};

	const handleTextFileUpload = (files) => {
		if (files && files[0]) {
			updateFormData({ textFile: files[0] });
		}
	};

	const handleScriptFileUpload = (files) => {
		if (files && files[0]) {
			updateFormData({ textToSpeechFile: files[0] });
		}
	};

	const renderDynamicContent = () => {
		if (formData.contentType === "Social media post (post, story, etc.)") {
			return (
				// canvas type
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-3">
						Canvas Type
					</label>
					<p className="text-xs text-gray-400 mb-3">
						Select the preferred sizes for your content
					</p>
					<RadioGroup
						value={formData.canvasType}
						onValueChange={(value) => updateFormData({ canvasType: value })}
						className="space-y-2"
					>
						{canvasTypeInfo.map((item, idx) => (
							<div key={idx} className="flex items-center space-x-2">
								<RadioGroupItem value={item.value} id={item.id} />
								<Label htmlFor={item.id} className="text-sm">
									{item.title}
								</Label>
							</div>
						))}
					</RadioGroup>
				</div>
			);
		} else {
			return (
				<>
					{/* video duration */}
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-3">
							Video duration
						</label>
						<p className="text-xs text-gray-400 mb-3">
							Choose the time span for your video
						</p>
						<RadioGroup
							value={formData.videoDuration}
							onValueChange={(value) =>
								updateFormData({ videoDuration: value })
							}
							className="space-y-1"
						>
							{videoDurationInfo.map((item, idx) => (
								<div key={idx} className="flex items-center space-x-2">
									<RadioGroupItem value={item.value} id={item.id} />
									<Label htmlFor={item.id} className="text-sm">
										{item.title}
									</Label>
								</div>
							))}
						</RadioGroup>
					</div>

					{/* text to speech */}
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-3">
							Text-to-speech
						</label>
						<p className="text-xs text-gray-400 mb-3">
							Choose if you want text-to-speech voiceover
						</p>
						<RadioGroup
							value={formData.textToSpeech}
							onValueChange={(value) => {
								updateFormData({
									textToSpeech: value,
									textToSpeechScript:
										value !== "speech-script"
											? ""
											: formData.textToSpeechScript || "",
									textToSpeechFile:
										value !== "speech-file"
											? null
											: formData.textToSpeechFile || null,
								});
							}}
							className="space-y-1"
						>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="no" id="r11" />
								<Label htmlFor="r11" className="text-sm">
									No
								</Label>
							</div>
							<div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="speech-script" id="r22" />
									<Label htmlFor="r22" className="text-sm">
										Provide text-to-speech script
									</Label>
								</div>
								<AnimatePresence>
									{formData.textToSpeech === "speech-script" && (
										<motion.div
											initial={{ opacity: 0, height: 0 }}
											animate={{ opacity: 1, height: "auto" }}
											exit={{ opacity: 0, height: 0 }}
											className="mt-3"
										>
											<Textarea
												placeholder="Enter your text-to-speech script"
												value={formData.textToSpeechScript || ""}
												onChange={(e) =>
													updateFormData({ textToSpeechScript: e.target.value })
												}
												className="border-themeYellow focus:border-yellow-400"
											/>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="speech-file" id="r33" />
								<Label htmlFor="r33" className="text-sm">
									Upload text-to-speech file
								</Label>
							</div>
						</RadioGroup>
						{/* script file upload */}
						<AnimatePresence>
							{formData.textToSpeech === "speech-file" && (
								<motion.div
									initial={{ opacity: 0, height: 0 }}
									animate={{ opacity: 1, height: "auto" }}
									exit={{ opacity: 0, height: 0 }}
									className="mt-3"
								>
									<motion.div
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
										onClick={() => scriptFileRef.current?.click()}
										className="border-2 border-dashed border-themeYellow rounded-lg p-4 text-center cursor-pointer hover:border-yellow-400 transition-colors w-32 h-20"
									>
										{formData.textToSpeechFile ? (
											<div className="flex flex-col items-center justify-center h-full">
												<Check className="size-5 stroke-green-600 stroke-3" />
												<span className="text-xs text-green-600">Uploaded</span>
											</div>
										) : (
											<div className="flex items-center justify-center h-full">
												<div className="w-6 h-6 bg-gray-400 text-white rounded-full flex justify-center items-center">
													+
												</div>
											</div>
										)}
									</motion.div>
									<p className="text-xs text-gray-400 mt-1">
										Upload your text file
									</p>
									<input
										ref={scriptFileRef}
										type="file"
										// accept=".txt"
										className="hidden"
										onChange={(e) => handleScriptFileUpload(e.target.files)}
									/>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</>
			);
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="space-y-6"
		>
			{/* Upload Files */}
			<div className="space-y-4">
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-3">
						Upload files*
					</label>
					<div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
						{formData.files.length > 0 &&
							formData.files.map((file, idx) => {
								const url = URL.createObjectURL(file);
								const isImage = file.type.startsWith("image/");
								const isVideo = file.type.startsWith("video/");
								return (
									<motion.div
										initial={{ opacity: 0, scale: "80%" }}
										animate={{ opacity: 1, scale: "100%" }}
										key={idx}
										className=" bg-gray-300 rounded-lg overflow-hidden relative h-32"
									>
										{isImage ? (
											<img
												src={url}
												alt={file.name}
												className="object-cover w-full h-full"
												onLoad={() => URL.revokeObjectURL(url)}
											/>
										) : isVideo ? (
											<video
												src={url}
												controls
												className="object-cover w-full h-full"
												onLoadedData={() => URL.revokeObjectURL(url)}
											/>
										) : (
											<div className="flex flex-col items-center justify-center w-full h-full text-white">
												<span className="text-xs">{file.name}</span>
											</div>
										)}
										<span
											className="absolute right-2 top-2 z-50 size-7 rounded-full place-content-center place-items-center bg-themeYellow cursor-pointer hover:bg-yellow-300"
											onClick={() => {
												const newFiles = formData.files.filter(
													(_, i) => i !== idx
												);
												updateFormData({ files: newFiles });
											}}
										>
											<IoMdClose size={18} className="stroke-[15px]" />
										</span>
									</motion.div>
								);
							})}

						<motion.div
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							onClick={() => fileInputRef.current?.click()}
							className="border-2 border-dashed border-yellow-300 rounded-lg p-6 text-center cursor-pointer hover:border-yellow-400 transition-colors flex items-center justify-center h-32"
						>
							{/* {formData.files.length > 0 ? (
									<div className="flex items-center justify-center">
										<Video className="w-8 h-8 text-green-500" />
										<span className="ml-2 text-sm text-green-600">
											{formData.files.length} file(s) uploaded
										</span>
									</div>
								) : ( */}
							<div className="flex flex-col">
								<Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
								<p className="text-sm text-gray-500">Upload files</p>
							</div>
							{/* )} */}
						</motion.div>
					</div>
					<p className="text-xs text-gray-400 mt-2">
						Attach images, videos, or other files for editing
					</p>
					<input
						ref={fileInputRef}
						type="file"
						multiple
						className="hidden"
						onChange={(e) => {
							const files = e.target.files;
							handleFileUpload(files);
							if (files.length === 0) {
								setError("Please upload at least one file.");
							} else {
								setError("");
							}
						}}
					/>
				</div>

				{/* Brand Kit Upload */}
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-3">
						Upload brand kit or style
					</label>
					<motion.div
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						onClick={() => brandKitRef.current?.click()}
						className="border-2 border-dashed border-yellow-300 rounded-lg p-6 text-center cursor-pointer hover:border-yellow-400 transition-colors w-32 h-24"
					>
						{formData.brandKit ? (
							<div className="flex flex-col items-center justify-center h-full">
								<Check className="size-5 stroke-green-600 stroke-3" />
								{/* <div className="w-4 h-4 bg-green-500 rounded-full mb-1"></div> */}
								<span className="text-xs text-green-600">Uploaded</span>
							</div>
						) : (
							<div className="flex items-center justify-center h-full">
								<div className="w-6 h-6 bg-gray-400 text-white rounded-full flex justify-center">
									+
								</div>
							</div>
						)}
					</motion.div>
					<p className="text-xs text-gray-400 mt-2">
						Upload your logo, colors, fonts, or style preferences
					</p>
					<input
						ref={brandKitRef}
						type="file"
						className="hidden"
						onChange={(e) => handleBrandKitUpload(e.target.files)}
					/>
				</div>
			</div>

			{/* Dynamic Content */}
			{renderDynamicContent()}

			{/* Language Selection */}
			<div>
				<label className="block text-sm font-medium text-gray-700 mb-3">
					Language Selection
				</label>
				<RadioGroup
					value={formData.language}
					onValueChange={(value) => updateFormData({ language: value })}
				>
					<div className="flex items-center space-x-2">
						<RadioGroupItem value="english" id="lang1" />
						<Label htmlFor="lang1" className="text-sm">
							English
						</Label>
					</div>
				</RadioGroup>
				<p className="text-xs text-gray-400 mt-1">
					Currently, we support only English
				</p>
			</div>

			{/* Text Overlay */}
			<div>
				<label className="block text-sm font-medium text-gray-700 mb-3">
					Text overlay
				</label>
				<p className="text-xs text-gray-400 mb-3">
					Choose if you want text overlay for your content
				</p>
				<RadioGroup
					value={formData.textOverlay}
					onValueChange={(value) =>
						updateFormData({
							textOverlay: value,
							customText: value !== "custom" ? "" : formData.customText || "",
							textFile: value !== "file" ? null : formData.textFile || null,
						})
					}
					className="space-y-2"
				>
					<div className="flex items-center space-x-2">
						<RadioGroupItem value="no" id="text1" />
						<Label htmlFor="text1" className="text-sm">
							No
						</Label>
					</div>
					<div className="">
						<div className="flex items-center space-x-2">
							<RadioGroupItem value="custom" id="text2" />
							<Label htmlFor="text2" className="text-sm">
								Provide custom text
							</Label>
						</div>
						{/* Enter custom text */}
						<AnimatePresence>
							{formData.textOverlay === "custom" && (
								<motion.div
									initial={{ opacity: 0, height: 0 }}
									animate={{ opacity: 1, height: "auto" }}
									exit={{ opacity: 0, height: 0 }}
									className="mt-3"
								>
									<Textarea
										placeholder="Your custom text"
										value={formData.customText || ""}
										onChange={(e) =>
											updateFormData({ customText: e.target.value })
										}
										className="border-themeYellow focus:border-yellow-400"
									/>
								</motion.div>
							)}
						</AnimatePresence>
					</div>

					<div className="flex items-center space-x-2">
						<RadioGroupItem value="file" id="text3" />
						<Label htmlFor="text3" className="text-sm">
							Upload text file
						</Label>
					</div>
				</RadioGroup>
				{/* uploda text file */}
				<AnimatePresence>
					{formData.textOverlay === "file" && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							className="mt-3"
						>
							<motion.div
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								onClick={() => textFileRef.current?.click()}
								className="border-2 border-dashed border-themeYellow rounded-lg p-4 text-center cursor-pointer hover:border-yellow-400 transition-colors w-32 h-20"
							>
								{formData.textFile ? (
									<div className="flex flex-col items-center justify-center h-full">
										<Check className="size-5 stroke-green-600 stroke-3" />
										<span className="text-xs text-green-600">Uploaded</span>
									</div>
								) : (
									<div className="flex items-center justify-center h-full">
										<div className="w-6 h-6 bg-gray-400 text-white rounded-full flex justify-center items-center">
											+
										</div>
									</div>
								)}
							</motion.div>
							<p className="text-xs text-gray-400 mt-1">
								Upload your text file
							</p>
							<input
								ref={textFileRef}
								type="file"
								// accept=".txt"
								className="hidden"
								onChange={(e) => handleTextFileUpload(e.target.files)}
							/>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</motion.div>
	);
};

export default StepTwo;
