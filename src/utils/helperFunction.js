export const validateForm = (formData) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const numberRegex = /^[0-9]{10}$/;

	if (!emailRegex.test(formData.email)) return "Invalid email";
	if (!numberRegex.test(formData.number)) return "Invalid phone number";
	if (!formData.contentType) return "Content type is required";
	if (!formData.files || formData.files.length === 0)
		return "At least one file is required";

	return null;
};

export const createFormData = (formData) => {
	const data = new FormData();
	data.append("email", formData.email);
	data.append("number", formData.number);
	data.append("contentType", formData.contentType);
	data.append("canvasType", formData.canvasType);
	data.append("videoDuration", formData.videoDuration);
	data.append("language", formData.language);
	data.append("textToSpeech", formData.textToSpeech);
	data.append("textOverlay", formData.textOverlay);
	if (formData.customText) {
		data.append("customText", formData.customText);
	}
	if (formData.textToSpeechScript) {
		data.append("textToSpeechScript", formData.textToSpeechScript);
	}
	if (formData.brandKit !== null) {
		data.append("brandKit", formData.brandKit);
	}
	if (formData.textToSpeechFile !== null && formData.textToSpeechFile !== "") {
		data.append("textToSpeechFile", formData.textToSpeechFile);
	}
	if (formData.textFile !== null && formData.textFile !== "") {
		data.append("textFile", formData.textFile);
	}
	// data.append("textFile", formData.textFile || "");
	// Convert arrays to JSON strings
	// data.append("instructions", JSON.stringify(formData.instructions));
	// data.append("relatedLinks", JSON.stringify(formData.relatedLinks));
	data.append("relatedLinks", formData.relatedLinks);
	data.append("instructions", formData.instructions);
	for (let i = 0; i < formData.files.length; i++) {
		data.append("files", formData.files[i]);
	}

	return data

}