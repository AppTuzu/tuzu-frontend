import { title } from "motion/react-client";
import React from "react";

const PrivacyPolicy = () => {
    
  data = {
    title: "Privacy Policy",
    description:
      "At Tuzu, your privacy is important to us. This Privacy Policy outlines how we handle your personal information when you use our services. Since Tuzu primarily operates through Google Forms, we want to ensure you understand what information we collect, how we use it, and how we protect it.",
    content: [
      {
        id: 1,
        title: "Information Collection",
        description:
          "We do not collect any personal information directly through our website. The only information we gather is what you voluntarily provide through Google Forms. This may include your name, email address, and any other details you choose to share for the purpose of receiving our services.",
      },
      {
        id: 2,
        title: "Use of Information",
        description:
          "The information you provide via Google Forms is used solely to process your requests, deliver the services you have requested, and communicate with you about your projects. We do not use your information for any other purposes, and we do not sell, share, or disclose your information to third parties except as necessary to fulfill your requests.",
      },
      {
        id: 3,
        title: "Data Security",
        description: "We take the security of your information seriously. The data you provide through Google Forms is stored securely and is accessible only to authorized personnel involved in delivering our services. We use industry-standard security measures to protect your information from unauthorized access or disclosure."
      },
      {
        id: 4,
        title: "Third-Party Services",
        description: "Google Forms is a third-party service, and by submitting information through it, you are also subject to Google’s Privacy Policy. We recommend reviewing Google’s Privacy Policy to understand how they handle your information."
      },
      {
        id: 5,
        title: "Cookies and Tracking",
        description: "Our website does not use cookies or any other tracking technologies to collect personal information."
      },
      {
        id: 6,
        title: "Your Rights",
        description: "As a user, you have the right to access, correct, or delete the personal information you have provided. If you wish to exercise these rights, please contact us using the information provided below."
      },
      {
        id: 7,
        title: "Changes to This Privacy Policy",
        description: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically to stay informed about how we are protecting your information."
      },
      {
        id: 8,
        title: "Contact Us",
        description: "If you have any questions or concerns about this Privacy Policy, please contact us at: apptuzu@gmail.com"
      },
      
    ],
    endNote: "By using our services, you agree to this Privacy Policy. Thank you for trusting Tuzu with your social media content needs."
  };

  return (
    <div>
      <div>
        <h2>Privacy Policy</h2>
        <p>
          At Tuzu, your privacy is important to us. This Privacy Policy outlines
          how we handle your personal information when you use our services.
          Since Tuzu primarily operates through Google Forms, we want to ensure
          you understand what information we collect, how we use it, and how we
          protect it.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
