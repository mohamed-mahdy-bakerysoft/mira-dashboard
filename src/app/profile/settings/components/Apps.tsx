import { SquareArrowOutUpRightIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface AppsProps {
    appName: string,
    description: string,
    status: string,
    src: string,
    alt: string,

}

const Apps = ({appName, description, status, src, alt}: AppsProps) => {
    return (
        <div className="sm:flex justify-between mt-10 items-center border-b-2 border-b-[#e2e4e9d7] pb-5">
            <div className="flex gap-5">
                <div className="min-w-12 min-h-12 max-w-12 max-h-12 rounded-full flex items-center justify-center border border-[#E2E4E9] shadow-sm shadow-[#E4E5E73D]">
                    <Image src={src}
                        alt={alt}
                        width={32}
                        height={33}
                    />
                </div>

                <div>
                    <div className="flex gap-8">
                        <h3 className="font-medium text-[#333333]">{appName}</h3>
                        <p className="bg-[#F6F8FA] rounded-full text-[#6f6f6f] uppercase text-xs py-0.5 px-2.5 font-inter max-h-6">{status}</p>
                    </div>
                    <p className="text-sm text-[#6f6f6f] mt-1.5">{description}</p>
                </div>
            </div>

            <SquareArrowOutUpRightIcon size={24} className='mr-1' />
        </div>
    )
}

export default Apps