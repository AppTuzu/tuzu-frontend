const Contact = () => {
	return (
		<div className="pt-36 pb-14 flex flex-col gap-5 px-10 sm:px-16 bg-themeBlack text-white min-h-[calc(100vh-488px)] md:min-h-[calc(100vh-261px)]">
			<div>
				<h2 className="text-center">Contact Us</h2>
				<div className="space-y-4">
					<div>
						<h4>Address</h4>
						<p>
							10/1, 16th A Main Rd, Mahadeshwara Nagar, BTM 2nd Stage, BTM
							Layout, Bengaluru, Karnataka 560076, India.
						</p>
					</div>
					<div>
						<h4>Email Id:</h4>
						<p>apptuzu@gmail.com</p>
					</div>
					<div>
						<h4>Mobile Number:</h4>
						<p>(+91) 7907522108</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
