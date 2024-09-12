'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; 

function Header() {
  const [isShaking, setIsShaking] = useState(false);
  const router = useRouter(); 
  // Shake the logo on page load
  useEffect(() => {
    setIsShaking(true); // Start shaking
    const timeout = setTimeout(() => setIsShaking(false), 1000); // Stop shaking after 1s
    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, []);

  // Shake the logo when the user scrolls to the header
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      const headerTop = header?.getBoundingClientRect().top || 0;

      // Trigger shake when the header is in the viewport
      if (headerTop >= 0 && headerTop <= window.innerHeight) {
        setIsShaking(true);
        const timeout = setTimeout(() => setIsShaking(false), 1000);
        return () => clearTimeout(timeout);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navigateToPlans = () => {
     router.push('/plans'); // Programmatically navigate to the /plans page
   };
  return (
    <header className='sticky top-0  z-10 mt-5 pl-40 w-full'>
      <div>
        <ul className='flex justify-between items-center'>
          <div className='image'>
            <li>
              <a href="#">
                <img
                  src="/images/logo.png"
                  alt="logo"
                  className={`transition-transform duration-300 ease-out ${isShaking ? 'animate-shake' : ''} hover:animate-shake`}
                />
              </a>
            </li>
          </div>
          <div className='side-div flex justify-center items-center gap-10 pr-32'>
            <li><a href="#" className='hover:text-purple-700'>About</a></li>
            <li>
              <button onClick={navigateToPlans} className="text-black hover:text-purple-700">Plans</button> {/* Button to trigger navigation */}
            </li>
            <div className="signup border-solid border-2 border-blue-700 rounded-md p-1">
              <li><a href="#" className='p-3 text-blue-700 hover:text-purple-700'>Signup</a></li>
            </div>
          </div>
        </ul>
      </div>
    </header>
  );
}

export default Header;
