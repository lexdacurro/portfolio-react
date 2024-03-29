"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faBehance } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope,faAt, faPhone, faComputerMouse } from '@fortawesome/free-solid-svg-icons'
import RenderNavItems from '@/components/navitems';

interface heroProps {
    name : String

}
  
const Hero : React.FC<heroProps> = (props) =>{
    
    const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false); 
    const [showItems, setShowItems] = useState<boolean>(false);
    const [showFloatingScrollMsg, setShowFloatingScrollMsg] = useState<boolean>(false);
    useEffect(()=>{
        const sizeWatcher = () => { 
            setIsSmallScreen(window.innerWidth <= 640)
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
    useEffect(()=>{
        const anotherScrollWatcher = () => { 
            const scrollPosY = window.scrollY;
            const scrollThreshold = 800;
            console.log(scrollThreshold  < scrollPosY)
            setShowFloatingScrollMsg(scrollThreshold  < scrollPosY)
        }
        window.addEventListener('scroll', anotherScrollWatcher);

        // Remove event listener on component unmount
        return () => {
          window.removeEventListener('scroll', anotherScrollWatcher);
        };
    },[])
    return (
        <div className="flex flex-col items-center mt-12 text-center mx-3">
            <div className="flex items-center justify-center mb-6 gap-5"> 
                <a href="https://linkedin.com/in/lexdacurro" title="Visit my LinkedIn Profile" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin}/>
                </a>
                <a href="https://www.behance.net/lexdacs7" title="Visit my Behance Profile!" target="_blank">
                    <FontAwesomeIcon icon={faBehance} />
                </a>
                <a href="mailto:alexedacurro@gmail.com" title="Let's work together!">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </div>
            <div className="flex items-center justify-center font-medium lg:text-5xl md:text-4xl text-3xl">
                <p style={{ lineHeight: 1 }}> Hello </p>
                <div>
                    <Image src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b_1f3fc/512.gif" alt="👋" width="50" height="50"></Image>
                </div>, 
                <p className="ml-2"> My name is</p>
            </div>
            <h1 className="header text-center font-bold lg:text-8xl md:text-7xl text-5xl">{props.name}<span style={{ color : 'rgb(var(--gold))' }}>.</span></h1>
       
            <div className="segoe text-animation lg:text-xl md:text-xl text-base mt-6">
                <p className="text-switcher"> I am a </p>
                <p className="font-bold mt-4">Let’s Work Together!</p>
            </div>
            { 
                (!showItems) ?  (
                    <div className="relative overflow-auto py-8 mt-14 transition ease-in-out">
                        { RenderNavItems() }
                    </div> 
                ) : ''
            
            }
           
            { 
               (!showFloatingScrollMsg) ? ( 
                    <div className="absolute bottom-6 left-[50%] translate-x-[-50%] transition ease-in-out">  
                        <div className="flex items-center justify-center gap-3"> 
                            <Image src="/assets/MouseIcon.png" alt="👋" width={isSmallScreen ? 10 : 20} height={isSmallScreen ? 20 : 30}  className="animate-bounce"></Image>
                            <span className="font-bold text-xs lg:text-base"> Scroll to Continue</span>
                        </div>
                    </div>
               ) : ''
            }
          
        
        </div>
    )
};
export default Hero;