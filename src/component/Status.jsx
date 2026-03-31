import React from 'react';

const Status = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex justify-around p-15 mb-15'>
            <div>
                <h2 className='font-extrabold text-6xl mb-3'>50K+</h2>
                <p className='font-medium text-2xl'>Active Users</p>
            </div>
            <div>
                <h2 className='font-extrabold text-6xl mb-3'>200+</h2>
                <p className='font-medium text-2xl'>Premium Tools</p>
            </div>
            <div>
                <h2 className='font-extrabold text-6xl mb-3'>4.9</h2>
                <p className='font-medium text-2xl'>Rating</p>
            </div>
        </div>
    );
};

export default Status;