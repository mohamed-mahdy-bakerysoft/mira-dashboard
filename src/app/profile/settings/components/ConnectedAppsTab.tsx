import React from 'react'
import Apps from './Apps'


const ConnectedAppsTab = () => {
	return (
		<>
			<Apps appName='MoonToons'
				description='Watch Islamic cartoon anytime, anywhere'
				status='connected'
				src='/apps-icon-1.svg'
				alt='MoonToons'
			/>

			<Apps appName='BeyondRide'
				description='Enjoy a fast and convenient logistic from your house to school campus'
				status='connected'
				src='/apps-icon-2.svg'
				alt='BeyondRide'
			/>

			<Apps appName="Bake n' Love"
				description='Fast food straight to your door step'
				status='disconnected'
				src='/apps-icon-3.svg'
				alt="Bake n' Love"
			/>
		</>
	)
}

export default ConnectedAppsTab