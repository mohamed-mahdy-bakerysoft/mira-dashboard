"use client"

import Image from 'next/image'
import React from 'react'
import SidebarLinks from '../SidebarLinks'
import { CreditCard, Facebook, Headset, Instagram, Linkedin, Settings, Twitter, User, XSquare, Youtube } from 'lucide-react'
import Link from 'next/link'


const Sidebar = () => {
	return (
		<div className='bloc hidden px-6 bg-[#F8F9FD] lg:w-[350px] lg:relative absolute lg:block z-20 transition-all duration-200'>
			<div className="flex flex-col min-h-[100dvh] justify-between h-full">
				<div>
					<div className="flex lg:justify-center justify-between items-center pl-4 py-14">
						<Link href='/' >
							<Image src="/logo_profile.svg" alt="logo" width={65} height={65} />
						</Link>
						<XSquare className='lg:hidden' />

					</div>

					<div className="flex w-full flex-col gap-4">
						<SidebarLinks href='/profile' label='Profile' icon={User} />
						<SidebarLinks href='/profile/settings' label='Settings' icon={Settings} />
						<SidebarLinks href='/profile/payments' label='Payments' icon={CreditCard} />
						<SidebarLinks href='/profile/support' label='Customer Support' icon={Headset} />
					</div>
				</div>

				<div className='footer-links'>
					<div className="flex items-center ml-2 mb-20 mt-32 gap-3">
						<a href="#"><Youtube /></a>
						<a href="#"><Twitter /></a>
						<a href="#"><Instagram /></a>
						<a href="#"><Linkedin /></a>
						<a href="#"><Facebook /></a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Sidebar