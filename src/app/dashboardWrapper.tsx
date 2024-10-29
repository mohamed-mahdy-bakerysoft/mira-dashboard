'use client'

import React, { useState } from 'react'
import Sidebar from './(components)/Sidebar'

import Navbar from './(components)/Navbar'
import { Menu } from 'lucide-react'


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    }

    return (
        <main className='rethink_sans'>

            <button className={`${isSidebarCollapsed ? "block" : "hidden"}  fixed z-20 flex flex-row items-center justify-center w-[60px] h-[60px] rounded-full bg-[#A57CCB] bottom-14 sm:bottom-20 right-10 sm:right-20 lg:hidden`}
                onClick={toggleSidebar}
            >
                <Menu size={24} color='white' />
            </button>

            <div className='relative w-full h-screen flex flex-row z-10'>

                <Sidebar isSidebarCollapsed={isSidebarCollapsed}
                    toggleSidebar={toggleSidebar()}
                />
                <section className='relative z-10 w-full  pb-20 px-7 sm:px-16 overflow-y-scroll overflow-x-hidden duration-200'>
                    <Navbar />
                    {children}
                </section>
            </div>

        </main>
    )
}


const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <DashboardLayout>
            {children}
        </DashboardLayout>
    )
}

export default DashboardWrapper