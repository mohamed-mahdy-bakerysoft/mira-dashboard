import React from 'react'

interface PlanCardProps {
    planName: string,
    price: number,
    description: string,
    features: string[],
    // duration: number,
}


const PlanCard = ({ planName, price, description, features }: PlanCardProps) => {
    const formatPrice = (amount: number) => {
        return new Intl.NumberFormat('en-NG', {
            // style: 'currency',
            // currency: 'NGN'
        }).format(amount);
    };

    return (
        <div className='relative flex flex-col items-start justify-between gap-4 px-7 py-5 min-h-[500px] max-w-[370px] w-full bg-[#F8F8F8] border border-[#E6E6E6] rounded-lg'>
            <div className='flex flex-col items-start justify-start gap-4'>

                <p className='font-medium text-base sm:text-lg text-[#333333]'>{planName}</p>

                <div className="price flex flex-col gap-3">
                    <p className='text-3xl sm:text-4xl font-bold text-[#333333]'>{price} NGN</p>
                    <p className='text-sm sm:text-base font-normal text-[#333333]'>{description}</p>
                </div>


                <div className="w-full z-20 flex flex-col">
                    <label className='pb-2' htmlFor="duration">Duration</label>
                    <select name="duration" id="duration"
                        className='px-3.5 py-3 text-left text-base text-[#262728] font-normal rounded-lg border border-[#D1D1D6] bg-[#FCFCFC]'
                    >
                        <option value="1000">1 month (NGN {formatPrice(price * 1)})</option>
                        <option value="3000">3 month (NGN {formatPrice(price * 3)})</option>
                        <option value="6000">6 month (NGN {formatPrice(price * 6)})</option>
                        <option value="12000">12 month (NGN {formatPrice(price * 12)})</option>
                    </select>
                </div>

                <div className="relative flex flex-col space-y-3 sm:space-y-2 w-full z-10">
                    {
                        features.map((feature, index) => (
                            <div key={index} className='flex flex-row items-center justify-start gap-3'>
                                <img className='w-[25px] h-auto'
                                    src="/in-plan-check-icon.svg"
                                    alt="check icon"
                                />
                                <p className='font-normal text-xs sm:text-sm text-[#333333]'>
                                    {feature}
                                </p>
                            </div>

                        ))
                    }
                </div>

            </div>

            <div>
                <button type='button'
                    className='py-2.5 px-5 rounded-lg text-white text-heading-6 bg-[#0A0A0A]'
                >
                    Select Plan
                </button>
            </div>


        </div>
    )
}

export default PlanCard