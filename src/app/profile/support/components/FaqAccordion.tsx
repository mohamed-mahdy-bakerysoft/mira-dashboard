'use client'

import { Plus } from 'lucide-react'
import React, { useState } from 'react'

interface FaqAccordionProps {
    question: string,
    answer: string
}

const FaqAccordion = ({ question, answer }: FaqAccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-[#E6E6E6] border rounded-lg py-5 px-6 flex flex-col cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
        
        >
            <div className="justify-between items-center flex">
                <p className="text-sm md:text-base text-lighter">{question}</p>
                <span>
                    <Plus size={16} className='text-[#6F6F6F] text-sm md:text-base' />
                </span>
            </div>
            <div className={`${isOpen? "": "hidden"} border-t border-t-[#3333331a] mt-5 pt-5`}>
                <p className="text-xs md:text-sm text-lighter">
                    {answer}
                </p>
            </div>
        </div>

    )
}

export default FaqAccordion