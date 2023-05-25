"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
    const searchParams = useSearchParams();
    // const username = searchParams.get('user');
    const [user, setUser] = useState({});
    const userId = params.id;
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`/api/users/${userId}/posts`);
                const data = await response.json();
      
                
                setPosts(data.prompts);
                setUser(data.user);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
    
        if(userId) fetchPosts();
      }, [])


    return (
        <>
            {/* {isLoading ? (
                <ProfileSkeleton />
            ) : ( */}
                {/* <Suspense fallback={<ProfileSkeleton />}> */}
                    <Profile 
                        name={user?.username}
                        desc=""
                        data={posts}
                        // loading={isLoading}
                    />
                {/* </Suspense> */}
            {/* )} */}
        </>
    )
}

export default UserProfile;