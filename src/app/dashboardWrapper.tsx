import React from 'react'
import Sidebar from './(components)/Sidebar'


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex bg-gray-50 text-gray-900 w-full h-full min-h-screen'>
            <Sidebar />
            <main className='flex flex-col w-full h-full px-9 py-7 bg-gray-200'>
                {/* navbar */}
                {children}
            </main>
        </div>
    )
}


const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <DashboardLayout>
            {children}
        </DashboardLayout>
    )
}

export default DashboardWrapper