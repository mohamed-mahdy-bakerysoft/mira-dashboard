"use client";

import React, { useState } from "react";
import PasswordTab from "./components/PasswordTab";
import ConnectedAppsTab from "./components/ConnectedAppsTab";
import ActiveAppsTab from "./components/ActiveAppsTab";

const Settings = () => {

	const [activeTab, setActiveTab] = useState(0);

	const tabs = [
		{ label: 'password', component: <PasswordTab /> },
		{ label: 'active apps', component: <ActiveAppsTab /> },
		{ label: 'external connected apps', component: <ConnectedAppsTab /> }
	];

	return (
		<section>
			<h1 className="font-medium text-2xl sm:text-3xl md:text-4xl text-[#333333]">
				Settings
			</h1>
			<div className="mt-5 md:mt-8">
				<div className="flex flex-wrap gap-y-6">
					{/* Tabs Navigation */}
					{
						tabs.map((tab, i) => (
							<button
								key={i}
								type="button"
								className={`text-base sm:text-lg md:text-xl relative px-2.5 capitalize ${activeTab === i ? 'text-[#6d3c97]' : 'text-[#333333]'}  transition-all duration-200 `}
								onClick={() => setActiveTab(i)}
							>
								{tab.label}
								<span className={`absolute right-0 -bottom-2 h-px bg-[#6d3c97] ${activeTab === i ? 'visible opacity-100 w-full' : 'invisible opacity-0 w-0'} transition-all duration-200`}></span>
							</button>
						))
					}
				</div>

				{/* Tabs content */}
				<div>
					{tabs[activeTab].component}
				</div>
			</div>
		</section>
	);
};

export default Settings;
