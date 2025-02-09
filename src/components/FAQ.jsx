import React, { useState } from "react";
import { motion } from "motion/react";

const FAQ = () => {
  const [openedAccordionId, setOpenedAccordionId] = useState(null);

  const data = [
    {
      id: 1,
      question: "How do I place an order?",
      answer:
        'Select the desired service, click "Order Now," and follow the checkout process to complete your purchase.',
    },
    {
      id: 2,
      question: "Is there an upfront payment?",
      answer:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $9.99 to $18.99 a month. No extra costs, no contracts.",
    },
    {
      id: 3,
      question: "What happens after I place my order?",
      answer:
        "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
    },
    {
      id: 4,
      question: "How do I submit my content details?",
      answer:
        "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      id: 5,
      question: "What is the process for content creation?",
      answer:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      id: 6,
      question: "Can I request revisions?",
      answer:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      id: 7,
      question: "How will I receive the final content?",
      answer:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      id: 8,
      question: "What if I need additional support?",
      answer:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
  ];

  return (
    <div className=" px-8 py-20 flex flex-col items-center justify-center gap-10">
      <h3 className="text-5xl font-bold text-white">FAQ</h3>
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
        className={`text-base text-zinc-300 md:text-lg px-4 mb-4 ${
          isOpen ? "opacity-100 h-28" : "opacity-0 h-0"
        } transition-all duration-400 ease-in-out overflow-hidden`}
      >
        {answer}
      </p>

    </div>
  );
};

export default FAQ;
