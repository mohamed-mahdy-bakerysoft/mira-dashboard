import { Flag, Headphones, MessageCircleMore, Search } from 'lucide-react'
import React from 'react'
import FaqCard from '../components/FaqCard'
import FaqAccordion from '../components/FaqAccordion'


const Support = () => {

    const Faqs = [
        {
            question: "Can i upgrade my MIRA subscription",
            answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum Duis aute irure dolor in reprehenderit in voluptate velit esse cillum"
        },
        {
            question: "Can i fund my account?",
            answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum Duis aute irure dolor in reprehenderit in voluptate velit esse cillum"
        },
        {
            question: "Can i delete my account?",
            answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum Duis aute irure dolor in reprehenderit in voluptate velit esse cillum"
        },
    ]

    return (
        <section className='relative mx-auto max-w-[900px] max-h-[84vh] sm:max-h-none sm:min-h-[110px]'>
            <h1 className="text-center font-medium text-2xl sm:text-3xl md:text-4xl text-[#333333]">Hello 👋🏾 How can we help?</h1>

            <div className="relative max-h-[80vh] sm:max-h-none border-black">
                <div className="relative w-full top-0 z-20 duration-700">
                    <div className="w-ful pt-5">
                        <div className="relative flex items-center pl-4 rounded-xl bg-[#F6F8FA] p-0.5 pr-1 mx-auto duration-300 w-full md:w-[600px] border border-[#E2E4E9]">
                            <Search size={16} className='text-[#6F6F6F] md:text-lg min-h-4 min-w-4' />
                            <input type="text" placeholder='Describe your issue'
                                className='px-2 py-2.5 text-sm text-[#6F6F6F] w-full focus:!w-full border-none outline-none bg-transparent placeholder:text-[#6F6F6F]'
                            />
                            <button className='py-2 px-3 h-full text-white text-sm bg-[#A57CCB] rounded-lg outline-none'>Search</button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="pb-10">
                    <p className="my-4 sm:my-8 md:text-lg text-center text-[#6F6F6F]">Or browse our FAQs below</p>


                    <div className="grid items-center grid-cols-1 md:grid-cols-3 gap-6 justify-center w-full">
                        <FaqCard label='Support ticket' icon={Flag} />
                        <FaqCard label='Call support' icon={Headphones} />
                        <FaqCard label='Live chat' icon={MessageCircleMore} />
                    </div>

                    <p className="my-10 font-medium text-[22px] md:text-[28px] text-[#6F6F6F]">Frequently asked questions</p>

                    <div className="flex flex-col gap-5">
                        {
                            Faqs.map((faq, i) => (
                                <FaqAccordion key={i} question={faq.question} answer={faq.answer} />
                            ))
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Support