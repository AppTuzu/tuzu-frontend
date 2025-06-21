import { useState } from "react";
import { motion } from "motion/react";
import { faqData as data } from "@/utils/data";

const FAQ = () => {
  const [openedAccordionId, setOpenedAccordionId] = useState(null);

  return (
    <div className="px-6 md:px-8 pt-10 pb-16 flex flex-col items-center justify-center gap-10">
      <h3 className="text-3xl sm:text-4xl font-bold text-white">FAQ</h3>
      <div className="w-full max-w-3xl">
        {data.map((item) => (
          <Accordion
            key={item.id}
            {...item}
            toggle={setOpenedAccordionId}
            isOpen={openedAccordionId === item.id}
          />
        ))}
      </div>
    </div>
  );
};

const Accordion = ({ toggle, isOpen, id, question, answer }) => {
  return (
    <div className="flex flex-col justify-center border-b-1 border-themeBlue/70 w-full">
      <div
        className="flex items-center justify-between cursor-pointer p-4 w-full"
        onClick={() => toggle(isOpen ? null : id)}
      >
        <h4 className="text-xl md:text-2xl text-white">{question}</h4>

        <motion.svg
          initial={{rotate: 0}}
          animate={{rotate: isOpen ? -90 : 0}}
          width="20"
          height="20"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{scale: 1}}
            animate={{scale: isOpen ? 0 : 1}}
            d="M1 13L25 13"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <motion.path
            d="M13 25L13 1"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </motion.svg>

        {/* <span className={`text-4xl ${isOpen ? 'rotate-45' : 'rotate-0'} transition-all duration-200 ease-in`}> + */}
        {/* {isOpen ? '-' : '+'} */}
        {/* </span> */}
      </div>
      {/* { isOpen && (
      <p className='px-4 mb-4 '>{answer}</p>
      )} */}
      
      <p
        className={`text-base text-zinc-400 md:text-lg px-4 mb-4 ${
          isOpen ? "opacity-100 h-20" : "opacity-0 h-0"
        } transition-all duration-400 ease-in-out overflow-hidden`}
      >
        {answer}
      </p>

    </div>
  );
};

export default FAQ;
