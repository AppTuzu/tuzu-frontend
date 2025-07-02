

const PageTemplate = ({ title, description, content, endNote }) => {
  return (
		<div className="w-full flex flex-col justify-center gap-7 lg:gap-11 text-white">
			<h2 className="text-2xl sm:text-3xl font-semibold self-center text-center">
				{title}
			</h2>
			<p className="font-medium text-lg leading-6 text-start md:text-justify">
				{description}
			</p>
			<div className="w-full flex flex-col gap-6">
				{content.map((item) => (
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
			<p className="text-gray-400">{endNote}</p>
		</div>
	);
};

export default PageTemplate;
