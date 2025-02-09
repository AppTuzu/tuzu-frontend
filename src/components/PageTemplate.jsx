import React from "react";

const PageTemplate = ({ title, description, content, endNote }) => {
  return (
    <div className="w-full flex flex-col justify-center gap-7 lg:gap-11 text-white">
      <h2 className="text-4xl font-semibold self-center">{title}</h2>
      <p className="font-medium text-lg leading-6">{description}</p>
      <div className="w-full flex flex-col gap-6">
        {content.map((item) => (
          <div key={item.id} className="w-full flex flex-col">
            <h3 className="text-lg lg:text-[21px] font-semibold">{item.id}. {item.title}</h3>
            <p className="font-light text-base lg:text-lg pl-4">{item.description}</p>
          </div>
        ))}
      </div>
      <p>{endNote}</p>
    </div>
  );
};

export default PageTemplate;
