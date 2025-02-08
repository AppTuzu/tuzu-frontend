import React, { useState } from 'react'

const FAQ = () => {

  const [openedAccordionId, setOpenedAccordionId] = useState(1)

  const data = [{
    id: 1,
    question: 'What is Netflix?',
    answer: 'Netflix is a streaming service that offers a wide variety of TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.'
  },
  {
    id: 2,
    question: 'How much does Netflix cost?',
    answer: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $9.99 to $18.99 a month. No extra costs, no contracts.'
  },
  {
    id: 3,
    question: 'Where can I watch?',
    answer: 'Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.'
  },
  {
    id: 4,
    question: 'How do I cancel?',
    answer: 'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'
  },
  {
    id: 5,
    question: 'What can I watch on Netflix?',
    answer: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.'
  }
]

  return (
    <div className='bg-white px-12 py-20 flex flex-col items-center justify-center gap-10'>
      <h3 className='text-5xl font-bold'>FAQ</h3>
      <div className='w-full'>
        {data.map((item) => (
          <Accordion key={item.id} {...item} toggle={setOpenedAccordionId} isOpen={openedAccordionId === item.id} />
        ))}
      </div>
    </div>
  )
}

const Accordion = ({toggle, isOpen, id, question, answer}) => {
  return (  
    <div className='flex flex-col justify-center border-b-4 border-gray-500 w-full'>
      <div className='flex items-center justify-between cursor-pointer p-4 w-full' onClick={() => toggle(isOpen ? null : id)}>
        <h4 className='text-2xl'>{question}</h4>
        <span className={`text-4xl ${isOpen ? 'rotate-45' : 'rotate-0'} transition-all duration-200 ease-in`}> +
          {/* {isOpen ? '-' : '+'} */}
        </span>
      </div>
      {/* { isOpen && (
      <p className='px-4 mb-4 '>{answer}</p>
      )} */}
    <p className={`px-4 mb-4 ${isOpen ? 'opacity-100 h-28' : 'opacity-0 h-0'} transition-all duration-300 ease-in-out overflow-hidden`}>{answer}</p>
    </div>
  )
}

export default FAQ