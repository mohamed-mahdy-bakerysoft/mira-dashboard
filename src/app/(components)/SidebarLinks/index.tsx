import Link from 'next/link'
import React from 'react'

interface SidebarLinksProps {
    href: string,
    label: string,
    icon: string
}

const SidebarLinks = ({ href, label, icon }: SidebarLinksProps) => {
    return (
        <Link href={href}>
            <button type='button' className="flex flex-row items-center justify-start gap-1 w-full py-2 pl-3.5 rounded-lg duration-200 opacity-50"
            >
                <img className='w-[20px] h-auto relative' src={icon} alt={label} />
                <div className="flex gap-1.5 items-center justify-start">
                    <span className='capitalize font-normal text-[] whitespace-nowrap text-[#6F6F6F]'>
                        {label}
                    </span>
                </div>
            </button>

        </Link>
    )
}

export default SidebarLinks