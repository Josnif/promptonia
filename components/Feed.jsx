'use client';

import { useState, useEffect, Suspense } from "react"

import PromptCard from "./PromptCard";
import PromptSkeleton from "./PromptSkeleton";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 sm:grid-cols-2 prompt_layout">
      {data.map((post) => (
       <PromptCard 
        key={`post-${post._id}`}
        post={post}
        handleTagClick={handleTagClick}
       />
      ))}
    </div>
  )
}

const Feed = () => {
  const [posts, setPosts] = useState([]);
  
  const [searchText, setSearchText] = useState('');
  const [searchFilteredPosts, setSearchFilteredPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const handleSearchChange = (e) => {
    setSearchText(e.target.value)
  }

  const searchPost = (searchText) => {
    const regex = new RegExp(searchText)
    const data = posts.filter(post => {
      return regex.test(post.prompt)
              || regex.test(post.tag)
              || regex.test(post.creator.username);
    })

    setSearchFilteredPosts(data)
  }

  const handleTagClick = (tag) => {
    setSearchText(tag)
  }


  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      searchPost(searchText)
    }, 500);
    
    return () => clearTimeout(debounceTimer);
  }, [searchText]);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);

      try {
        const response = await fetch('api/prompt');
        const data = await response.json();
  
        setPosts(data);
        setIsLoading(false);
      } catch (error) {
        // setIsLoading(false);
      }
    }

    fetchPosts();
  }, [])

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input 
          type="text" 
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          className="search_input peer"
        />
      </form>

      {isLoading ? (
        <PromptSkeleton />
      ) : (
        <PromptCardList 
          data={searchText.length < 1 ? posts : searchFilteredPosts}
          handleTagClick={handleTagClick}
        />
      )}
    </section>
  )
}

export default Feed