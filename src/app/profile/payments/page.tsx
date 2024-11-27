import { ArrowDownLeftIcon, ChevronsUpDown, ListFilter, Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


const Payments = () => {
    return (
        <section className="">
            <div className="md:flex justify-between place-items-start">
                <div>
                    <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl text-[#333333]">
                        Payment Methods
                    </h1>
                    <p className="text-sm text-[#333333] mt-4">
                        Add, view, manage payment methods that can be used on mira
                    </p>
                </div>

                <button className="hidden md:block">
                    <Link
                        href="#"
                        className="text-white lg:text-lg bg-[#a57ccb] px-6 h-fit py-2 rounded-[10px] min-w-[140px] block text-center"
                    >
                        Add new payment method
                    </Link>
                </button>
            </div>

            <div className="mt-10">
                <p className="text-sm">This user does not have any cards</p>
            </div>

            <div className="mt-10 md:mt-16 xl:w-[90%]">
                <div className="grid grid-cols-1 tb:grid-cols-2 2xl:grid-cols-3 gap-4"></div>
            </div>

            <button className="mt-8 w-full md:hidden">
                <Link
                    href="#"
                    className="text-white lg:text-lg bg-[#a57ccb] px-6 h-fit py-2 rounded-[10px] min-w-[140px] block text-center"
                >
                    Add new payment method
                </Link>
            </button>

            <div className="mt-12 flex flex-col gap-8">
                <div>
                    <h2 className="text-xl font-500 font-medium text-[#333333]">
                        Transactions
                    </h2>
                    <p className="text-sm text-[#6f6f6f] mt-1">
                        Track your financial transactions on all cards
                    </p>
                </div>

                {/* <div className=""> */}
                <div className="flex justify-between">
                    <div className="relative max-w-[340px] flex items-center">
                        <input
                            type="search"
                            placeholder="Search..."
                            className="w-[180px] sm:w-full p-2 pl-10 text-xs sm:text-sm outline-none transition-all border border-[#e2e4e9] rounded-lg focus:border-[#a57ccb]"
                        />
                        <button type="button" className="absolute left-3">
                            <Search size={14} color="#525866" />
                        </button>
                    </div>
                    <button
                        type="button"
                        className="w-fit p-2 px-4 text-xs sm:text-sm outline-none transition-all flex items-center gap-2 border border-[#E2E4E9] shadow-sm shadow-[#E4E5E73D] text-sub-500 rounded-lg focus:border-[#a57ccb]"
                    >
                        <ListFilter size={20} color="#525866" />
                        <span>Filter</span>
                    </button>
                </div>
                {/* </div> */}

                <div className="overflow-x-auto">
                    <table className="w-full min-w-[600px] text-left text-[#6f6f6f]">
                        <thead>
                            <tr className="bg-[#F6F8FA]">
                                <th className="p-3 pr-5 pb-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="21"
                                        viewBox="0 0 20 21"
                                        fill="none"
                                    >
                                        <rect
                                            x="2"
                                            y="2"
                                            width="16"
                                            height="16"
                                            rx="4"
                                            fill="#E2E4E9"
                                        ></rect>
                                        <g filter="url(#filter0_d_2026_9026)">
                                            <rect
                                                x="3.5"
                                                y="3.5"
                                                width="13"
                                                height="13"
                                                rx="2.6"
                                                fill="white"
                                            ></rect>
                                        </g>
                                        <defs>
                                            <filter
                                                id="filter0_d_2026_9026"
                                                x="1.5"
                                                y="3.5"
                                                width="17"
                                                height="17"
                                                filterUnits="userSpaceOnUse"
                                                color-interpolation-filters="sRGB"
                                            >
                                                <feFlood
                                                    flood-opacity="0"
                                                    result="BackgroundImageFix"
                                                ></feFlood>
                                                <feColorMatrix
                                                    in="SourceAlpha"
                                                    type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                    result="hardAlpha"
                                                ></feColorMatrix>
                                                <feOffset dy="2"></feOffset>
                                                <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                                                <feColorMatrix
                                                    type="matrix"
                                                    values="0 0 0 0 0.105882 0 0 0 0 0.109804 0 0 0 0 0.113725 0 0 0 0.12 0"
                                                ></feColorMatrix>
                                                <feBlend
                                                    mode="normal"
                                                    in2="BackgroundImageFix"
                                                    result="effect1_dropShadow_2026_9026"
                                                ></feBlend>
                                                <feBlend
                                                    mode="normal"
                                                    in="SourceGraphic"
                                                    in2="effect1_dropShadow_2026_9026"
                                                    result="shape"
                                                ></feBlend>
                                            </filter>
                                        </defs>
                                    </svg>
                                </th>
                                <th className="text-xs md:text-sm font-normal p-3 pr-5 pb-5">
                                    <div className="flex items-center">
                                        Amount
                                        <ChevronsUpDown size={16} color="#6f6f6f" fill='#6f6f6f'/>
                                    </div>
                                </th>
                                <th className="text-xs md:text-sm font-normal p-3 pr-5 pb-5">
                                    <div className="flex items-center">
                                        Bank
                                        <ChevronsUpDown size={16} color="#6f6f6f" fill='#6f6f6f'/>
                                    </div>
                                </th>
                                <th className="text-xs md:text-sm font-normal p-3 pr-5 pb-5">
                                    <div className="flex items-center">
                                        Date &amp; Time
                                        <ChevronsUpDown size={16} color="#6f6f6f" fill='#6f6f6f'/>
                                    </div>
                                </th>
                                <th className="text-xs md:text-sm font-normal p-3 pr-5 pb-5">
                                    <div className="flex items-center">
                                        Payment Method
                                        <ChevronsUpDown size={16} color="#6f6f6f" fill='#6f6f6f'/>
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <td>
                                    <div className="h-4 w-full"></div>
                                </td>
                            </tr>
                        </thead>

                        <tbody className="mt-10 font-normal text-xs md:text-sm">
                            <tr className="border-b border-b-[#E2E4E9]">
                                <td className="p-3 pr-5 pb-5">
                                    <input type='checkbox' className='border border-[#E2E4E9] shadow-sm shadow-[#E4E5E73D]'/>
                                </td>
                                <td className="p-3 pr-5 pb-5">1000</td>
                                <td className="p-3 pr-5 pb-5"></td>
                                <td className="p-3 pr-5 pb-5">2024-10-14T08:45:48.768Z</td>
                                <td className="p-3 pr-5 pb-5">
                                    <div className="flex gap-2 items-center">
                                        <div className="border border-[#e9e2e2] shadow-sm shadow-[#E4E5E73D] rounded-full w-8 h-8 flex items-center justify-center">
                                            <ArrowDownLeftIcon size={16} color="#525866" />
                                        </div>
                                        Money Transfer
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

export default Payments