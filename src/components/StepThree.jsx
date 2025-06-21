import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Plus, X } from "lucide-react";

const StepThree = ({ formData, updateFormData }) => {
	const [newInstruction, setNewInstruction] = useState("");
	const [newLink, setNewLink] = useState("");

	const addInstruction = () => {
		if (newInstruction.trim()) {
			updateFormData({
				instructions: [...formData.instructions, newInstruction.trim()],
			});
			setNewInstruction("");
		}
	};

	const removeInstruction = (index) => {
		const updatedInstructions = formData.instructions.filter(
			(_, i) => i !== index
		);
		updateFormData({ instructions: updatedInstructions });
	};

	const addLink = () => {
		if (newLink.trim()) {
			updateFormData({
				relatedLinks: [...formData.relatedLinks, newLink.trim()],
			});
			setNewLink("");
		}
	};

	const removeLink = (index) => {
		const updatedLinks = formData.relatedLinks.filter(
			(_, i) => i !== index
		);
		updateFormData({ relatedLinks: updatedLinks });
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="space-y-6"
		>

			{/* Add Instructions */}
			<div className="space-y-4">
				<label className="block text-sm font-medium text-gray-700">
					Add instructions
				</label>

				<div className="space-y-3">
					{formData.instructions.map((instruction, index) => (
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
							className="border-yellow-200 focus:border-yellow-400"
							onKeyPress={(e) => e.key === "Enter" && addInstruction()}
						/>
						<motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
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

					{/* <Textarea
						placeholder="Note 2"
						className="border-yellow-200 focus:border-yellow-400 min-h-[80px]"
						onChange={(e) => updateFormData({ note2: e.target.value })}
					/> */}

					{formData.instructions.length > 0 && (
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
			</div>

			{/* Add Related Links */}
			<div className="space-y-4">
				<label className="block text-sm font-medium text-gray-700">
					Add related links
				</label>

				<div className="space-y-3">
					{formData.relatedLinks.map((link, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							className="flex items-center space-x-2 p-3 border border-yellow-200 rounded-lg bg-yellow-50"
						>
							<span className="flex-1 text-sm">{link}</span>
							<Button
								variant="ghost"
								size="sm"
								onClick={() => removeLink(index)}
								className="h-6 w-6 p-0 hover:bg-red-100"
							>
								<X className="h-3 w-3 text-red-500" />
							</Button>
						</motion.div>
					))}

					<div className="flex space-x-2">
						<Input
							placeholder="https://shortUrl.com/xyz"
							value={newLink}
							onChange={(e) => setNewLink(e.target.value)}
							className="border-yellow-200 focus:border-yellow-400"
							onKeyPress={(e) => e.key === "Enter" && addLink()}
						/>
						{formData.relatedLinks.length > -1 && (
							<motion.div
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								<Button
									onClick={addLink}
									variant="outline"
									className="border-themeYellow text-yellow-400 hover:bg-yellow-50 hover:text-yellow-600"
								>
									<span className="hidden sm:block">Add</span>
									<Plus className="h-4 w-4" />
								</Button>
							</motion.div>
						)}
					</div>

					{formData.relatedLinks.length > 0 && (
						<motion.button
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							className="text-themeBlue text-sm font-medium hover:text-cyan-500 flex items-center"
							onClick={addLink}
						>
							<Plus className="h-4 w-4 mr-1" />
							Add another link
						</motion.button>
					)}
				</div>
			</div>

			{/* Info */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.3 }}
				className="mt-8 p-4 bg-cyan-50 rounded-lg border border-cyan-200"
			>
				<p className="text-sm text-gray-600">
					💡 Be specific with your instructions and provide reference links to
					help us understand your vision better.
				</p>
			</motion.div>
		</motion.div>
	);
};

export default StepThree;
