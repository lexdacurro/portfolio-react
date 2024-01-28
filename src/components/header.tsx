"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import RenderNavItems from '@/components/navitems';

interface headerProps {
    name: String

}
const Header: React.FC<headerProps> = (props) => {
    const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
    const [showItems, setShowItems] = useState<boolean>(false);
    useEffect(()=>{
        const sizeWatcher = () => { 
            setIsSmallScreen(window.innerWidth <= 936)
        };
      
        sizeWatcher();
        window.addEventListener('resize', sizeWatcher);
        
        const scrollWatcher = () => { 
            const scrollPosY = window.scrollY;
            const scrollThreshold = 450;
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
     
        <div className="flex items-center justify-between px-14 py-5 sticky top-0">
            <div className="flex items-center">
                <Image src="/assets/disenyoLogo.png" alt="Your Logo" width={!isSmallScreen ? 81 : 60} height={!isSmallScreen ? 60 : 40} />
              
            </div>
            
            { 
                
               (!isSmallScreen && showItems) ? ( 
                    <div className="relative overflow-auto py-5 transition ease-in-out">
                        { RenderNavItems() }
                    </div> 
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