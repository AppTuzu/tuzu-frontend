import { FaArrowRight } from "react-icons/fa6";

export const NavButton = () => {
  return (
    <div className="flex items-center gap-3 w-fit justify-center px-5 py-3 bg-themeBlack rounded-2xl border-themeBlue border-2 text-themeYellow hover:bg-themeYellow hover:text-themeBlack cursor-pointer hover:border-themeYellow transition-all duration-500 font-medium">
        Create with us
        <FaArrowRight />
    </div>
  )
}


export const Button = () => {
    return (
      <div>Buttons</div>
    )
  }