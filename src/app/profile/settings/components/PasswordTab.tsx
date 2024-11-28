import Link from "next/link";
import React from "react";

const PasswordTab = () => {
	return (
		<>
			<div className="sm:flex justify-between mt-10 items-center border-b-2 border-b-[#e2e4e9d7] pb-5">
				<div className="">
					<h3 className="font-medium font-inter text-[#333333]">
						Change Password
					</h3>
					<p className="text-sm text-lighter mt-1">
						Update password for enhanced account security.
					</p>
				</div>
				<Link
					href="#"
					type="button"
					className="mt-5 sm:mt-0 py-2.5 px-5 border border-[#E2E4E9] shadow-sm shadow-[#E4E5E73D] rounded-[10px] text-sm inline-block"
				>
					Change Password
				</Link>
			</div>

			<div className="sm:flex justify-between mt-10 items-center border-b-2 border-b-[#e2e4e9d7] pb-5">
				<div className="">
					<h3 className="font-medium font-inter text-[#333333]">
						Two-factor Authentication
					</h3>
					<p className="text-sm text-lighter mt-1">
						Add an extra layer of protection to your account.
					</p>
				</div>
				<Link
					href="#"
					type="button"
					className="mt-5 sm:mt-0 py-2.5 px-5 border border-[#E2E4E9] shadow-sm shadow-[#E4E5E73D] rounded-[10px] text-sm inline-block"
				>
					Manage Authentication
				</Link>
			</div>
		</>
	);
};

export default PasswordTab;
