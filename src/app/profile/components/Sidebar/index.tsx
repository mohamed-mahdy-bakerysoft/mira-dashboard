"use client"

import Image from 'next/image'
import React from 'react'
import SidebarLinks from '../SidebarLinks'
import { CreditCard, Headset, Menu, Settings, User, XSquare } from 'lucide-react'
import Link from 'next/link'
import useToggleSidebar from '@/hooks/useToggleSidebar'


const Sidebar = () => {
	const { isSidebarCollapsed, toggleSidebar } = useToggleSidebar();

	return (
		<>
			<button className={`${isSidebarCollapsed ? "hidden" : "block"} fixed z-20 flex flex-row items-center justify-center w-[50px] h-[50px] rounded-full bg-[#A57CCB] bottom-14 sm:bottom-12 right-6 sm:right-20 lg:hidden`}
				onClick={toggleSidebar}
			>
				<Menu size={16} color='white' />
			</button>


			{/* MOBILE NAVIGATION */}
			{
				isSidebarCollapsed && (
					<div className="translate-x-0  lg:hidden bg-[#f8f9fd] min-w-[300px] h-[100dvh] px-6 gap[16px] transition-all duration-200 fixed left-0 z-30">
						<div className="flex justify-between pl-4 items-center py-14">
							<Link href="/">
								<Image
									src="/logo_profile.svg"
									alt="logo"
									width={65}
									height={65}
								/>
							</Link>

							<XSquare onClick={toggleSidebar} />
						</div>

						<nav className="flex w-full flex-col gap-4">
							<SidebarLinks href="/profile" label="Profile" icon={User} />
							<SidebarLinks
								href="/profile/settings"
								label="Settings"
								icon={Settings}
							/>
							<SidebarLinks
								href="/profile/payments"
								label="Payments"
								icon={CreditCard}
							/>
							<SidebarLinks
								href="/profile/support"
								label="Customer Support"
								icon={Headset}
							/>
						</nav>

						<footer className="flex items-center ml-2 mb-20 mt-32 gap-3">
							<a href="#">
								<Image src='/icons/youtube.svg'
									alt='youtube'
									width={28}
									height={28}
								/>
							</a>
							<a href="#">
								<Image src='/icons/x.svg'
									alt='X- Formerly (Twitter)'
									width={28}
									height={28}
								/>
							</a>
							<a href="#">
								<Image src='/icons/instagram.svg'
									alt='instagram'
									width={28}
									height={28}
								/>
							</a>
							<a href="#">
								<Image src='/icons/linkedin.svg'
									alt='linkedin'
									width={28}
									height={28}
								/>
							</a>
							<a href="#">
								<Image src='/icons/facebook.svg'
									alt='facebook'
									width={28}
									height={28}
								/>
							</a>
						</footer>
					</div>
				)
			}

			{/* DESKTOP NAVIGATION */}
			<div className="hidden px-6 bg-[#F8F9FD] lg:w-[350px] lg:relative absolute lg:block z-20 transition-all duration-200">
				<div className="flex flex-col min-h-[100dvh] justify-between h-full">
					<nav>
						<div className="flex lg:justify-center justify-between items-center pl-4 py-14">
							<Link href="/">
								<Image
									src="/logo_profile.svg"
									alt="logo"
									width={65}
									height={65}
								/>
							</Link>
							<XSquare className="lg:hidden" />
						</div>

						<div className="flex w-full flex-col gap-4">
							<SidebarLinks href="/profile" label="Profile" icon={User} />
							<SidebarLinks
								href="/profile/settings"
								label="Settings"
								icon={Settings}
							/>
							<SidebarLinks
								href="/profile/payments"
								label="Payments"
								icon={CreditCard}
							/>
							<SidebarLinks
								href="/profile/support"
								label="Customer Support"
								icon={Headset}
							/>
						</div>
					</nav>

					<footer className="footer-links">
						<div className="flex items-center ml-2 mb-20 mt-32 gap-3">
							<a href="#">
								<Image src='/icons/youtube.svg'
									alt='youtube'
									width={28}
									height={28}
								/>
							</a>
							<a href="#">
								<Image src='/icons/x.svg'
									alt='X- Formerly (Twitter)'
									width={28}
									height={28}
								/>
							</a>
							<a href="#">
								<Image src='/icons/instagram.svg'
									alt='instagram'
									width={28}
									height={28}
								/>
							</a>
							<a href="#">
								<Image src='/icons/linkedin.svg'
									alt='linkedin'
									width={28}
									height={28}
								/>
							</a>
							<a href="#">
								<Image src='/icons/facebook.svg'
									alt='facebook'
									width={28}
									height={28}
								/>
							</a>
						</div>
					</footer>
				</div>
			</div>
		</>
	);
}

export default Sidebar