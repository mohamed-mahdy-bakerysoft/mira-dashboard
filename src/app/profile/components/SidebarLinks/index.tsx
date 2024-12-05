import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface SidebarLinksProps {
    href: string,
    label: string,
    icon: LucideIcon,
    onClick: () => void,
    isDesktop?: boolean,
}

const SidebarLinks = ({ href, label, icon: Icon, onClick, isDesktop }: SidebarLinksProps) => {

    const pathname = usePathname();
    const isActive = pathname === href;

    const handleClick = () => {
        onClick();
    }

    return (
        <Link href={href}
            className={`${isActive ? 'bg-white' : 'bg-transparent'} hover:bg-white/80 hover:scale-[0.99] rounded-[10px] transition-all duration-200`}
            onClick={isDesktop ? undefined : handleClick}
        >
            <button className='flex gap-4 px-3 py-2 text-lg md:text-xl'>
                <Icon />
                <span>{label}</span>
            </button>

        </Link>
    )
}

export default SidebarLinks