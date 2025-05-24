
const RefundAndCancellation = () => {
  const data = {
    title: "Refund and Cancellation Policy",
    description:
      "At Tuzu, we aim to ensure your satisfaction with our services. Please read our Refund and Cancellation Policy to understand how we handle refunds and cancellations for our social media content editing services.",
    contentWithSubheading: [
      {
        id: 1,
        title: "Cancellation Policy",
        content: [
          {
            title: "Before Submission:",
            description:
              "You may cancel your order at any time before you submit your content via Google Forms. Once the content has been submitted, cancellations are no longer possible.",
          },
          {
            title: "After Submission:",
            description:
              "Due to the nature of our services, once the content editing process begins, cancellations are not permitted.",
          },
        ],
      },
      {
        id: 2,
        title: "Refund Policy",
        content: [
          {
            title: "Eligibility for Refunds:",
            description:
              "Refunds are only applicable if the final output does not meet the agreed-upon requirements. Refund requests will be processed only after thorough cross-checking of the delivered content against the original instructions provided.",
          },
          {
            title: "Refund Process:",
            description:
              "To request a refund, please contact us within 5 days of receiving your edited content. Include your order details and a brief explanation of why you are requesting the refund.",
          },
          {
            title: "Refund Approval:",
            description:
              "Once your refund request is reviewed and approved, the refund will be processed, and the amount will be credited to your original payment method within 14 business days.",
          },
        ],
      },
    ],
    contentWithoutSubheading: [
      {
        id: 3,
        title: "No Refunds on Completed Services",
        description:
          "Once the final edited content is delivered and accepted, no refunds will be provided. We encourage you to review the preview of your content before final acceptance to ensure it meets your expectations.",
      },
      {
        id: 4,
        title: "Contact Us",
        description:
          "If you have any questions or need further assistance regarding our Refund and Cancellation Policy, please reach out to us at: apptuzu@gmail.com",
      },
    ],
    endNote:
      "We value your business and are committed to providing quality service. Thank you for choosing Tuzu.",
  };

  return (
    <div className="bg-themeBlack text-white px-10 sm:px-14 md:px-22 lg:px-28 py-28 flex items-center justify-center">
      <div className="w-full max-w-5xl">
        <div className="w-full flex flex-col justify-center gap-7 lg:gap-11 text-white">
          <h2 className="text-3xl sm:text-4xl font-semibold self-center text-center">
            {data.title}
          </h2>
          <p className="font-medium text-lg leading-6 text-start md:text-justify">
            {data.description}
          </p>
          <div className="w-full flex flex-col gap-6">
            {data.contentWithSubheading.map((item) => (
              <div key={item.id} className="w-full flex flex-col gap-5">
                <h3 className="text-lg lg:text-[21px] font-semibold">
                  {item.id}. {item.title}
                </h3>
                {item.content.map((item, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <p className="font-light text-base lg:text-lg pl-4 lg:text-justify">
                      {item.title}
                    </p>
                    <p className="font-light text-base lg:text-lg pl-4 lg:text-justify">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            ))}

            {data.contentWithoutSubheading.map((item) => (
              <div key={item.id} className="w-full flex flex-col">
                <h3 className="text-lg lg:text-[21px] font-semibold">
                  {item.id}. {item.title}
                </h3>
                <p className="font-light text-base lg:text-lg pl-4 lg:text-justify">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <p>{data.endNote}</p>
        </div>
      </div>
    </div>
  );
};

export default RefundAndCancellation;
