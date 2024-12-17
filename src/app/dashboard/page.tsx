import React from 'react'
import PlanCard from './components/PlanCard'

const EarlyStageFeatures = [
	'Business Model Canvas Creation',
	'Financial Projections',
	'Clear and simple marketing strategy',
]

const GrowingBusinessesFeatures = [
	'Business Model Canvas Creation',
	'Financial Projections',
	'Clear and simple marketing strategy',
	'Get Daily Marketing Content to Share',
]

const Dashboard = () => {
	return (
		<div className='w-full'>
			<div className='flex flex-col space-y-3'>
				<h3 className='font-medium text-4xl'>View or change plan</h3>
				<p className="font-normal text-xl text-[#6F6F6F]">Select another plan below to change</p>
			</div>

			<div className="mt-16 relative">
				<div className='relative z-20'>
					<p className='text-xl font-normal text-black'>No current plan</p>
					<p className='text-base font-normal text-[#6F6F6F]'>Select a plan below to get started</p>
				</div>

				<div className='relative z-10 mt-16 flex flex-row items-start justify-start gap-10 flex-wrap'>
					<PlanCard planName='Early Stage'
						price={300}
						description='Ideal for early stage businesses and startups'
						features={EarlyStageFeatures}
					/>

					<PlanCard planName='Growing Businesses'
						price={1000}
						description='For businesses, social media managers, agencies looking to scale further'
						features={GrowingBusinessesFeatures}
					/>
				</div>
			</div>
		</div>
	)
}

export default Dashboard