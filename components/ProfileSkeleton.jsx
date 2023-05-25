'use client';

import PromptSkeleton from './PromptSkeleton';

const ProfileSkeleton = () => {
    return (
        <div className="w-full animate-pulse">
            <div className='w-[70%] h-5 bg-gray-200 rounded-lg dark:bg-gray-700'></div>
            <div className='text-left w-48 mt-2 h-2 bg-gray-200 rounded-lg dark:bg-gray-700'></div>

            <PromptSkeleton />
        </div>
    )
}

export default ProfileSkeleton;