import React from 'react'
import Apps from './Apps'


const ActiveAppsTab = () => {
	return (
		<>
			<Apps appName='BridgePay'
				description='Seamless international payments'
				status='not active'
				src='/apps-icon-1.svg'
				alt='BridgePay'
			/>

			<Apps appName='mira Business intelligence'
				description='Build your business with right financial projections and BMC'
				status='active'
				src='/apps-icon-2.svg'
				alt='mira Business intelligence'
			/>

			<Apps appName='miraCapital'
				description='Invest in the digital economy'
				status='not active'
				src='/apps-icon-3.svg'
				alt='miraCapital'
			/>
		</>
	)
}

export default ActiveAppsTab