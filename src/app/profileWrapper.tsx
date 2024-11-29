import React from 'react'
import Navbar from './(components)/Navbar'
import Sidebar from './profile/components/Sidebar'

const UserProfileLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='rethink_sans'>

            <div className='relative w-full h-screen flex flex-row z-10'>
                <Sidebar />

                <section className='relative z-10 w-full pb-20 px-7 overflow-y-scroll overflow-x-hidden duration-200'>
                    <div className="lg:w-[80%] mx-[5vw] lg:mx-14 pb-8">
                        <Navbar />
                        {children}

                    </div>
                </section>
            </div>

        </main>
    )
}


const ProfileWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <UserProfileLayout>
            {children}
        </UserProfileLayout>
    )
}

export default ProfileWrapper