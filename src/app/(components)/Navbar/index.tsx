'use client'

import { ChevronDown } from 'lucide-react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'


const Navbar = () => {
    const [isProfileOpen, setisProfileOpen] = useState(false);

    const pathname = usePathname();
    const profile = pathname === "/profile" || pathname?.startsWith("/profile/");

    const toggleProfile = () => {
        setisProfileOpen(!isProfileOpen);
    }

    return (
        <header id='navbar' className='relative w-full'>
            <div className='w-full flex flex-col items-center justify-between pt-5 sm:px-0 pb-6 gap-y-5'>
                <div className="w-full flex items-center justify-between lg:justify-end">

                    {/* rightside | LOGO */}
                    <div className=' lg:hidden'>
                        <img src={`${profile ? "/logo_profile.svg" : "/logo.svg"}`}
                            alt="Mira"
                            className='w-[65px] h-auto'
                        />
                    </div>

                    {/* leftside | profile */}
                    <div className="relative">
                        <div className="flex flex-row items-center justify-end gap-x-5">
                            <button type='button'>
                                <img src="/user-actions-icon.svg"
                                    alt="user actions"
                                    className='relative w-[28px] h-auto'
                                />
                            </button>

                            <button type='button' onClick={toggleProfile}
                                className='flex flex-row items-center justify-end gap-x-2 pl-1 pr-1.5 py-1 bg-[#FAFBFB] border border-[#E2E4E9] rounded-full'>
                                <img src="/user-profile-image.svg"
                                    alt="profile avatar"
                                    className='w-[28px] h-[28px] md:w-[40px] md:h-[40px] rounded-full'
                                />
                                <ChevronDown size={12} color='#6F6F6F' fill='#6F6F6F' />
                            </button>
                        </div>

                        {/* MANAGE PROFILE DROPDOWN */}
                        <div className={`${isProfileOpen ? 'block' : 'hidden'} absolute w-[280px] right-0 p-10 mt-5 rounded-md shadow-md z-50 bg-[#FCFCFC] duration-100`}>
                            <img src="/user-profile-image.svg"
                                alt="profile avatar"
                                className='relative mx-auto w-[60px] h-[60px] rounded-full'
                            />

                            <p className='my-3 capitalize text-center text-xl text-gray-700'>
                                Hello, <span className='font-bold capitalize'>Maclemon!</span>
                            </p>

                            <div className='flex flex-col w-full gap-2 mt-3'>
                                <button type='button'
                                    className={`${profile ? "hidden" : ""} px-4 py-2 text-xs md:text-sm w-full font-medium text-gray-900 border border-[#BEBEBE] rounded-full duration-200`}>
                                    <Link href='/profile'>Mangage your profile</Link> 
                                </button>

                                <button className='px-4 py-2 text-xs md:text-sm w-full font-medium text-red-500 border border-[#BEBEBE] rounded-full duration-200'>
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </header>
    )
}

export default Navbar