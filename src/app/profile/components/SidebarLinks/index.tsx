import { Icon, LucideIcon } from 'lucide-react'
// import Link from 'next/link'
import React from 'react'

interface SidebarLinksProps {
    href: string,
    label: string,
    icon: LucideIcon,
}

const SidebarLinks = ({ href, label, icon: Icon }: SidebarLinksProps) => {
    return (
        <>
            <button className='flex gap-4 px-3 py-2 text-lg md:text-xl hover:bg-white/80 hover:scale-[0.99] bg-transparent rounded-[10px] transition-all duration-200 '>
                <Icon />

                <span>{label}</span>
            </button>

        </>
    )
}

export default SidebarLinks