import { Link } from "react-router-dom";

const RefundAndCancellation = () => {

  return (
		<div className="bg-themeBlack text-white px-10 sm:px-14 md:px-22 lg:px-28 py-28 flex items-center justify-center">
			<div className="w-full max-w-5xl">
				<div className="w-full flex flex-col justify-center gap-7 lg:gap-11 text-white">
					<h2 className="text-2xl sm:text-3xl font-semibold self-center text-center">
						Refund and Cancellation Policy
					</h2>

					<div className="w-full flex flex-col gap-6">
						<div className="w-full flex flex-col">
							<h3 className="text-lg lg:text-[21px] font-semibold">
								1. Cancellation Policy
							</h3>
							<p className="font-light text-base lg:text-lg pl-4 lg:text-justify">
								Once an order is placed and payment is completed, it cannot be
								cancelled under any circumstances. Since our services are custom
								and work begins shortly after the order is received,
								cancellation is not possible
							</p>
						</div>

						<div className="w-full flex flex-col">
							<h3 className="text-lg lg:text-[21px] font-semibold">
								2. Refund Policy
							</h3>
							<p className="font-light text-base lg:text-lg pl-4 lg:text-justify">
								Refunds are not guaranteed and are only considered in
								exceptional cases such as:
								<ul className="list-disc pl-4">
									<li>
										We are unable to deliver your order due to an internal issue
										or technical failure on our end.
									</li>
									<li>
										You accidentally submitted incorrect information and
										informed us before the end of the day the order was placed,{" "}
										<Link
											to="/contact-us"
											className="text-themeBlue hover:underline"
										>
											Contact us
										</Link>
									</li>
								</ul>
								Requests outside of these cases such as a change of mind or
								delay in communication are not eligible for a refund.
							</p>
						</div>

						<div className="w-full flex flex-col">
							<h3 className="text-lg lg:text-[21px] font-semibold">
								3. No Refunds on Completed Services
							</h3>
							<p className="font-light text-base lg:text-lg pl-4 lg:text-justify">
								Once the final edited content is delivered and accepted, no
								refunds will be provided. We encourage you to review the preview
								of your content before final acceptance to ensure it meets your
								expectations.
							</p>
						</div>

						<div className="w-full flex flex-col">
							<h3 className="text-lg lg:text-[21px] font-semibold">
								4. How to Request a Refund
							</h3>
							<p className="font-light text-base lg:text-lg pl-4 lg:text-justify">
								If you believe you are eligible for a refund, please contact us
								within 7 days of placing the order at: <br />
								<Link
									to="/contact-us"
									className="text-themeBlue hover:underline"
								>
									Contact us
								</Link><br />
								Include your name, project details, and the reason for the
								refund request. We will respond within 3–5 business days.
							</p>
						</div>

						<div className="w-full flex flex-col">
							<h3 className="text-lg lg:text-[21px] font-semibold">
								5. Mode of Refund
							</h3>
							<p className="font-light text-base lg:text-lg pl-4 lg:text-justify">
								If a refund is approved, it will be processed to your original
								payment method. Refund timelines depend on your bank or payment
								provider.
							</p>
						</div>

						<div className="w-full flex flex-col">
							<h3 className="text-lg lg:text-[21px] font-semibold">
								6. Final Decision
							</h3>
							<p className="font-light text-base lg:text-lg pl-4 lg:text-justify">
								All refund decisions are made at the sole discretion of Tuzu
								Media Technologies Private Limited. Our goal is to be fair and
								transparent, while ensuring that service time and effort are
								respected.
							</p>
						</div>
					</div>

					<p>
						By placing an order with us, you agree to this Refund & Cancellation
						Policy. Thank you for choosing Tuzu. <br /> We’re here to support
						your content creation journey.
					</p>
				</div>
			</div>
		</div>
	);
};

export default RefundAndCancellation;
