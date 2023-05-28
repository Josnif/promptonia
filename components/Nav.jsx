'use client';

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import Theme from './Theme';

const Nav = () => {
  const { data: session } = useSession()
  const [providers, setProviders] = useState(null)
  const [toggleDropdown, setToggleDropdown] = useState(false)
  const [toggleProfileDropdown, setToggleProfileDropdown] = useState(false)

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response)
    }

    setUpProviders()
  }, [])

  return (
    <nav className='flex-between items-center w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        {/* <Image 
          src="/assets/images/logo.jpeg" 
          alt='Promptonia logo'
          width={30}
          height={30}
          className='object-contain'
        /> */}
        <p className='logo_text'>
          {/* Jot-Prompt */}
          PROMPTONIA
        </p>
      </Link>

      {/* Destop Navigation  */}
      <div className='sm:flex hidden'>
        {session?.user ? (
          <div className='flex gap-3 md:gap-5 items-center relative'>
            <Link href='/ai-prompt' className='hover:text-gray-400'>
              AI Prompt
            </Link>

            <Link href='/create-prompt' className='hover:text-gray-400'>
              Create Prompt
            </Link>

            <div className="flex">
              <Image
                src={session?.user.image}
                // src='/assets/images/logo.svg'
                width={35}
                height={35}
                className='rounded-full cursor-pointer'
                alt='profile'
                onClick={() => setToggleProfileDropdown((prev) => !prev)}
              />
              {
                toggleProfileDropdown && 
                <div className="dropdown">
                  <Link 
                    href='/profile'
                    className='dropdown_link'
                    onClick={() => setToggleProfileDropdown(false)}
                  >
                    My Profile
                  </Link>
                  <button 
                    type='button'
                    onClick={() => {
                      setToggleProfileDropdown(false);
                      signOut();
                    }}
                    className='mt-3 w-full black_btn'
                  >
                    Sign out
                  </button>
                </div>
              }
            </div>
            <Theme />
          </div>
        ) : (
          <>
            {providers && 
              Object.values(providers).map((provider) => (
                <button type='button' 
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className='black_btn mr-3'
                >
                  Sign In
                </button>
              ))
            }
            <Theme />
          </>
        )
        }
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session?.user.image}
              // src='/assets/images/logo.svg'
              width={37}
              height={37}
              className='rounded-full cursor-pointer'
              alt='profile'
              onClick={() => setToggleDropdown((prev) => !prev)}
            />
            {
              toggleDropdown && 
              <div className="dropdown">
                <Link 
                  href='/profile'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link 
                  href='/create-prompt'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompts
                </Link>
                <button 
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className='mt-5 w-full black_btn'
                >
                  Sign out
                </button>
                <Theme />
              </div>
            }
          </div>
        ) : (
          <>
            {providers && 
              Object.values(providers).map((provider) => (
                <button type='button' 
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className='black_btn'
                >
                  Sign In
                </button>
              ))
            }
            <Theme />
          </>
        )}
      </div>
    </nav>
  )
}

export default Nav