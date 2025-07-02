import PageTemplate from "../components/PageTemplate";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const data = {
		title: "Privacy Policy",
		description:
			" At Tuzu Media Technologies Private Limited, your privacy is important to us. This Privacy Policy outlines how we handle your personal information when you use our services. We want to ensure you understand what information we collect, how we use it, and how we protect it.",
		content: [
			{
				id: 1,
				title: "What We Collect",
				description:
					"We only collect the personal information you provide voluntarily through forms, such as your name, email, phone number, social media handles (if applicable), project related content, and payment details which are processed via trusted third-party gateways.",
			},
			{
				id: 2,
				title: "How We Use Your Information",
				description:
					"We use the information you provide to deliver our editing and creative services, communicate with you regarding your requests, process payments, send project updates, and provide basic customer support.",
			},
			{
				id: 3,
				title: "Sharing of Information",
				description:
					"We do not sell or rent your personal data, but we may share it with trusted service providers (like payment processors or email services) solely for fulfilling our services, or with legal authorities if required by law",
			},
			{
				id: 4,
				title: "Data Storage & Security",
				description:
					"We take the security of your information seriously. The data you provide through forms is stored securely and is accessible only to authorized personnel involved in delivering our services. We use industry standard security measures to protect your information from unauthorized access or disclosure",
			},
			{
				id: 5,
				title: "Your Rights",
				description: (
					<>
						You can contact us at any time to access, correct, or delete your
						data, or to withdraw your consent for us to use it, by{" "}
						<span>
							<Link to="/contact-us" className="text-themeBlue hover:underline">
								Contact us
							</Link>
						</span>
						.
					</>
				),
			},
			{
				id: 6,
				title: "Cookies and Tracking",
				description:
					"We do not use cookies, third-party tracking tools, or automatically collect any technical or usage data from your device at this time.",
			},
			{
				id: 7,
				title: "Changes to This Policy",
				description:
					"We may update this Privacy Policy if our practices change, and the latest version will always be available on this page with the updated effective date",
			},
			{
				id: 8,
				title: "Contact Us",
				description: (
					<>
						For any questions or concerns regarding this policy, please{" "}
						<span>
							<Link to="/contact-us" className="text-themeBlue hover:underline">
								Contact us
							</Link>
						</span>{" "}
						<br />
						Tuzu Media Technologies Private Limited.
					</>
				),
			},
		],
		endNote:
			"By using our services, you agree to this Privacy Policy. Thank you for trusting Tuzu with your social media content needs.",
	};

	return (
		<div className="bg-themeBlack text-white px-10 sm:px-14 md:px-22 lg:px-28 py-28 flex items-center justify-center">
			<div className="w-full max-w-5xl">
				<PageTemplate {...data} />
			</div>
		</div>
	);
};

export default PrivacyPolicy;
