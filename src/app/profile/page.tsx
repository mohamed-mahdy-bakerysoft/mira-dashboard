import { ChevronRight, LinkIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Profile = () => {
	return (
		<section className="relative">
			<h1 className="font-medium text-2xl sm:text-3xl md:text-4xl text-[#333333]">My Profile</h1>

			<div className='flex flex-col gap-8 mt-8 md:mt-10'>
				<div className='flex gap-4 items-center'>
					<Image src='/user-profile-image.svg'
						alt='maclemon'
						width={50} height={50}
						className='relative rounded-full'
					/>

					<button type="button"
						className='py-1.5 px-2.5 h-fit rounded-lg border border-[#E2E4E9] shadow-sm shadow-[#E4E5E73D]'
					>
						Upload
						<input type="file"
							accept='.jpg, .png, .jpeg, .gif'
							className="hidden"
						/>
					</button>
				</div>

				<div>
					<div>
						<div className='py-5 md:grid md:grid-cols-2 border-t-2 border-t-[#E2E4E9]/50 '>
							<div>
								<h2 className="font-medium text-[#333333]">Full Name</h2>
								<p className="text-sm text-[#6F6F6F]">Your name will be visible to all</p>
							</div>
							<div className="mt-6 md:mt-0">
								<p className="text-sm text-main-900 capitalize">maclemon</p>
								<button type="button" className="flex text-primary items-center gap-2 mt-2 text-sm">
									Edit <ChevronRight size={16} />
								</button>
							</div>
						</div>

						<div className='py-5 md:grid md:grid-cols-2 border-t-2 border-t-[#E2E4E9]/50 '>
							<div>
								<h2 className="font-medium text-[#333333]">Email Address</h2>
								<p className="text-sm text-[#6F6F6F]">Individual or business email address</p>
							</div>
							<div className="mt-6 md:mt-0">
								<p className="text-sm text-main-900">maclemon17@gmail.com</p>
								<button type="button" className="flex text-primary items-center gap-2 mt-2 text-sm">
									Edit <ChevronRight size={16} />
								</button>
							</div>
						</div>

						<div className='py-5 md:grid md:grid-cols-2 border-t-2 border-t-[#E2E4E9]/50 '>
							<div>
								<h2 className="font-medium text-[#333333]">Phone Number</h2>
								<p className="text-sm text-[#6F6F6F]">Phone Number</p>
							</div>
							<div className="mt-6 md:mt-0">
								<p className="text-sm text-main-900 capitalize">+2340000000000</p>
								<button type="button" className="flex text-primary items-center gap-2 mt-2 text-sm">
									Edit <ChevronRight size={16} />
								</button>
							</div>
						</div>

						<div className='py-5 md:grid md:grid-cols-2 border-t-2 border-t-[#E2E4E9]/50 '>
							<div>
								<h2 className="font-medium text-[#333333]">Location</h2>
								<p className="text-sm text-[#6F6F6F]"></p>
							</div>
							<div className="mt-6 md:mt-0">
								<p className="text-sm text-main-900 capitalize">Oyo State</p>
								<button type="button" className="flex text-primary items-center gap-2 mt-2 text-sm">
									Edit <ChevronRight size={16} />
								</button>
							</div>
						</div>

						<div className='py-5 md:grid md:grid-cols-2 border-t-2 border-t-[#E2E4E9]/50 '>
							<div>
								<h2 className="font-medium text-[#333333]">Gender</h2>
								<p className="text-sm text-[#6F6F6F]"></p>
							</div>
							<div className="mt-6 md:mt-0">
								<p className="text-sm text-main-900 capitalize">None</p>
								<button type="button" className="flex text-primary items-center gap-2 mt-2 text-sm">
									Edit <ChevronRight size={16} />
								</button>
							</div>
						</div>
						
						<div className='py-5 md:grid md:grid-cols-2 border-t-2 border-t-[#E2E4E9]/50 '>
							<div>
								<h2 className="font-medium text-[#333333]">Social Links</h2>
								<p className="text-sm text-[#6F6F6F]">Input your social media links</p>
							</div>
							<div className="mt-6 md:mt-0">
								<div className="flex flex-wrap gap-3">
									<Link href='https://linkedin.com/in/' target='_blank' className='flex gap-1 items-center text-sm '><LinkIcon size={12}/> LinkedIn</Link>
									<Link href='https://web.facebook.com/' target='_blank' className='flex gap-1 items-center text-sm '><LinkIcon size={12}/> Facebook</Link>
									<Link href='https://x.com/' target='_blank' className='flex gap-1 items-center text-sm '><LinkIcon size={12}/> Twitter</Link>
									<Link href='https://instagram.com/' target='_blank' className='flex gap-1 items-center text-sm '><LinkIcon size={12}/> Instagram</Link>
									<Link href='https://youtube.com/' target='_blank' className='flex gap-1 items-center text-sm '><LinkIcon size={12}/> Youtube</Link>
								</div>
								<button type="button" className="flex text-primary items-center gap-2 mt-2 text-sm">
									Edit <ChevronRight size={16} />
								</button>
							</div>
						</div>
					</div>

					<div className='flex justify-between mt-20'>
						<div>
							<p className="font-medium text-dark-charcoal">Tier</p>
							<p className="text-sm text-lighter">Tier 0</p>
						</div>

						<button className='px-6 py-2 h-fit text-white text-center lg:text-lg bg-[#A57CCB] rounded-[10px] min-w-[140px]'>
							<Link href='#'>Upgrade Tier</Link>
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Profile