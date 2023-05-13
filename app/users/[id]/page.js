"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
    const searchParams = useSearchParams();
    const username = searchParams.get('user');
    const userId = params.id;
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
          const response = await fetch(`/api/users/${userId}/posts`);
          const data = await response.json();

          
          setPosts(data);
        }
    
        console.log(userId);
        if(userId) fetchPosts();
      }, [])


    return (
        <Profile 
            name={username ?? 'User'}
            desc="Welcome to your personalized profile page"
            data={posts}
        />
    )
}

export default UserProfile;