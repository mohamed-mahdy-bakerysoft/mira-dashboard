import { LucideIcon } from 'lucide-react'
import React from 'react'

interface FaqCardProps {
    icon: LucideIcon,
    label: string
}

const FaqCard = ({ label, icon: Icon }: FaqCardProps) => {
    return (
        <div className='flex justify-center items-center flex-col border border-[#E6E6E6] rounded-xl w-full h-[130px] md:h-[170px] '>
            <Icon size={22}/>
            <p className='text-[#525866] md:text-lg capitalize'>{label}</p>
        </div>
    )
}

export default FaqCard