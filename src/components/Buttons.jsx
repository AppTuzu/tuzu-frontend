import { FaArrowRight } from "react-icons/fa6";

export const NavButton = () => {
  return (
    <div className="flex items-center gap-3 text-base w-fit justify-center px-5 py-3 bg-themeBlack rounded-xl border-themeBlue border-2 text-themeYellow hover:bg-themeYellow hover:text-themeBlack cursor-pointer hover:border-themeYellow transition-all duration-500 font-medium hover:scale-[102%] hover:shadow-lg shadow-themeYellow/30">
      Create with us
      <FaArrowRight />
    </div>
  );
};

export const Button = ({title, onClick}) => {
  return (
    <button onClick={onClick} className="flex items-center text-lg gap-3 w-fit justify-center px-7 sm:px-12 py-3 bg-themeYellow rounded-4xl text-themeBlack hover:bg-themeYellow  cursor-pointer transition-all duration-500 font-medium hover:scale-[102%] hover:shadow-lg shadow-themeYellow/30">
      {title}
      {/* <FaArrowRight /> */}
    </button >
  );
};
