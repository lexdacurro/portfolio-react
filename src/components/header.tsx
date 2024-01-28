"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


interface headerProps {
    name: String

}
const Header: React.FC<headerProps> = (props) => {
    const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
    const [showItems, setShowItems] = useState<boolean>(false);
    useEffect(()=>{
        const sizeWatcher = () => { 
            setIsSmallScreen(window.innerWidth <=640)
        };
      
        sizeWatcher();
        window.addEventListener('resize', sizeWatcher);
        
        const scrollWatcher = () => { 
            const scrollPosY = window.scrollY;
            const scrollThreshold = 500;
            console.log(scrollThreshold  < scrollPosY)
            setShowItems(scrollThreshold  < scrollPosY)
        }
        window.addEventListener('scroll', scrollWatcher);

        // Remove event listener on component unmount
        return () => {
          window.removeEventListener('scroll', scrollWatcher);
          window.removeEventListener('resize', sizeWatcher);
        };
    },[])
    return (
     
        <div className="flex items-center justify-between lg:px-14 px-7 py-5 sticky top-0">
            <div className="flex items-center">
                <Image src="/assets/disenyoLogo.png" alt="Your Logo" width={!isSmallScreen ? 81 : 60} height={!isSmallScreen ? 60 : 40} />
              
            </div>
          
            { 
                
               (!isSmallScreen && showItems) ? ( 
                    <nav className="p-6 segoe transition-all ease-in-out duration-300 "> 
                      
                        <div className="flex-grow flex justify-center items-center lg:w-auto font-bold">
                            <div className="text-sm lg:flex-grow">
                                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 mr-4 text-base">
                                    Case Studies 
                                </a>
                                <span className="px-6 "> / </span>
                                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 mr-4 text-base">
                                    Work Experience
                                </a>
                                <span className="px-6 "> / </span>
                                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-base">
                                    Personal Projects
                                </a>
                                <span className="px-6 "> / </span>
                                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-base">
                                    Contacts
                                </a>
                            </div>
                        </div>
                    </nav>
               ) : ''
            }
            {/* Button */}
            <button className="font-bold py-2 px-4 rounded">
                <FontAwesomeIcon icon={faBars} />
            </button>
        </div>
   

    )
};
export default Header;