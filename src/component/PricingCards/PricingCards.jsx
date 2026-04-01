import React, { use } from 'react';
import PricingCard from './PricingCard';

const PricingCards = ({pricingPromise}) => {
    const promiseDataRes = use(pricingPromise);
    const promiseData = promiseDataRes.data;
    console.log(promiseData)
    return (
        <div className='max-w-300 mx-auto mb-20'>
            <div className='text-center mb-10'>
                <h2 className='font-extrabold text-5xl text-black'>Simple, Transparent Pricing</h2>
                <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
                {
                    promiseData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingCards;