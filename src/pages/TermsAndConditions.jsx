import { Link } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";

const TermsAndConditions = () => {

  const data = {
		title: "Terms and Conditions",
		description:
			"At Tuzu Media Technologies Private Limited, we aim to provide a smooth and professional experience. These Terms & Conditions outline the rules and expectations when you use our website or services. By using our services, you agree to these terms.",
		content: [
			{
				id: 1,
				title: "Use of Services",
				description: "By using our website or submitting a request, you agree to provide accurate information and use our services only for lawful purposes. We reserve the right to refuse service if any misuse or suspicious activity is detected.",
			},
			{
				id: 2,
				title: "Service Process",
				description: "We offer content editing and creative services based on the information and materials you submit through our website forms. Your content will be reviewed, edited, and delivered as per the type of service selected. Timelines and delivery depend on the project scope.",
			},
			{
				id: 3,
				title: "Payments",
				description: "All services are prepaid. Once you submit your request and complete payment through our trusted third-party gateway, we begin processing your project. Pricing may change over time and is clearly stated at the point of request.",
			},
			{
				id: 4,
				title: "Revisions & Refunds",
				description: "We allow limited revisions depending on the service. Refunds are not guaranteed and are considered only in rare cases where the service could not be fulfilled due to internal errors or technical issues. We encourage you to review your input before submitting a request",
			},
			{
				id: 5,
				title: "Ownership & Rights",
				description: "You retain full ownership of the original content you submit. After the editing is completed and payment is made, the final content delivered is also fully yours. We do not use or share your content beyond your project unless you give us explicit permission.",
			},
			{
				id: 6,
				title: "Conduct & Content Guidelines",
				description: "You must not upload or submit content that is illegal, offensive, harmful, or infringes on anyone’s rights. If such content is detected, we reserve the right to reject your request without a refund",
			},
			{
				id: 7,
				title: "Service Availability",
				description: "We strive to keep our platform running smoothly. However, we are not responsible for delays or failures caused by technical issues, internet outages, or external platform dependencies.",
			},
			{
				id: 8,
				title: "Changes to These Terms",
				description: "We may update these Terms & Conditions as our services evolve. The latest version will always be available on this page with the updated effective date.",
			},
			{
				id: 9,
				title: "Governing Law",
				description: "These terms are governed by the laws of India. Any disputes will be subject to the jurisdiction of courts in [Bengaluru, Karnataka].",
			},
			{
				id: 10,
				title: "Contact Us",
				description: (
					<>
						For any questions or concerns about these terms, feel free to{" "}
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
			"By using Tuzu’s services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. Thank you for choosing Tuzu.",
	};

  return (
    <div className="bg-themeBlack text-white px-10 sm:px-14 md:px-22 lg:px-28 py-28 flex items-center justify-center">
      <div className="w-full max-w-5xl">
        <PageTemplate {...data} />
      </div>
    </div>
  );
};

export default TermsAndConditions;
