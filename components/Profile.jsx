import React from 'react'

import PromptCard from './PromptCard'
import PromptSkeleton from './PromptSkeleton'

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
        {name ? (
            <h1 className='head_text text-left'>
                <span className='blue_gradient'>{name} profile</span>
            </h1>
        ) : (
            <div className="w-full animate-pulse">
                <div className='w-[70%] h-8 bg-gray-200 rounded-lg dark:bg-gray-700'></div>
            </div>
        )}

        <p className='desc text-left'>
            {desc}
        </p>

        {(data != null && data.length > 0) ? (
            <div className="mt-16 prompt_layout">
                {data.map((post) => (
                    <PromptCard 
                        key={post._id}
                        post={post}
                        handleEdit={() => handleEdit && handleEdit(post)}
                        handleDelete={() => handleDelete && handleDelete(post)}
                    />
                ))}
            </div>
        ) : (
            <PromptSkeleton />
        )}
    </section>
  )
}

export default Profile