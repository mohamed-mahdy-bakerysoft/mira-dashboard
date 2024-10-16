import React from 'react'
import SidebarLinks from '../SidebarLinks'


const Sidebar = () => {
    return (
        <section className='fixed flex flex-col md:w-[31.5%] lg:w-[25%] xl:w-[20%] py-1 px-4 lg:px-8 bg-white transition-all duration-300 overflow-hidden h-full z-40 border-r border-[#0xE2E4E9]'>
            {/* SIDEBAR LOGO */}
            <div className="relative h-[10%] lg:h-[120px] w-full flex flex-row items-center justify-start">
                <div className="pl-3">MIRA</div>

                <button type="button" className="block lg:hidden absolute top-1/2 right-1 -translate-y-1/2 border-2 border-[#313030] py-1.5 px-1.5 rounded-md focus:bg-[#cccccc2c] opacity-70 focus:opacity-100 duration-100"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path></svg></button>
            </div>
            {/* LINKS & NAVIGATIONS */}
            <div className="h-full w-full flex flex-col items-start justify-start">
                <SidebarLinks href='/home' label='Home' icon='/icons/menu-home_icon.svg' />
            
                
            </div>

            {/* FOOTER */}
        </section>
    )
}

export default Sidebar