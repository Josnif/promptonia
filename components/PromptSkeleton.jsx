const PromptSkeleton = () => {
    return (
        <div className="mt-16 prompt_layout animate-pulse">
            <div className="prompt_card">
                <div className="flex justify-between items-start gap-5">
                    <div className="flex-1 flex justify-start items-center gap-3">
                        <div className="w-[40px] h-[40px] rounded-full bg-gray-200 dark:bg-gray-600"></div>
                        <div className="flex flex-col">
                            <h3 className="w-56 h-2 bg-gray-200 rounded-lg dark:bg-gray-600"></h3>
                            <p className="w-24 mt-2 h-2 bg-gray-200 rounded-lg dark:bg-gray-600"></p>
                        </div>
                    </div>
                    <div className="w-4 h-4 bg-gray-200 rounded-full dark:bg-gray-600"></div>
                </div>
            
                <div className="w-full h-8 my-4 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

                <p className="w-20 h-4 bg-gray-300 rounded-lg dark:bg-gray-600"></p>
            </div>
            <div className="prompt_card">
                <div className="flex justify-between items-start gap-5">
                    <div className="flex-1 flex justify-start items-center gap-3">
                        <div className="w-[40px] h-[40px] rounded-full bg-gray-200 dark:bg-gray-600"></div>
                        <div className="flex flex-col">
                            <h3 className="w-56 h-2 bg-gray-200 rounded-lg dark:bg-gray-600"></h3>
                            <p className="w-24 mt-2 h-2 bg-gray-200 rounded-lg dark:bg-gray-600"></p>
                        </div>
                    </div>
                    <div className="w-4 h-4 bg-gray-200 rounded-full dark:bg-gray-600"></div>
                </div>
            
                <div className="w-full h-8 my-4 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

                <p className="w-20 h-4 bg-gray-300 rounded-lg dark:bg-gray-600"></p>
            </div>
            
        </div>
    )
}

export default PromptSkeleton