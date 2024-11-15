import { FaRegCircleXmark } from "react-icons/fa6";
import { motion, easeInOut } from "framer-motion";
import { useEffect, useRef } from "react";
export const SideBar = ({ openSidebar, setOpensidebar, background }) => {

    const sidebarRef = useRef();

    useEffect(() => {
        // Close sidebar if clicked outside
        function handleClickOutside(event) {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setOpensidebar(false);
            }
        }

        // Add event listener when sidebar is open
        if (openSidebar) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        // Cleanup event listener on component unmount
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openSidebar]);



    return (
        <div ref={sidebarRef} className={`block sm:hidden w-1/2 ${openSidebar ? 'right-0' : '-right-80'} shadow-lg h-screen overflow-hidden
        ${background === 'Dark' ? 'bg-black text-white' : 'bg-white text-black'}
        fixed top-0 z-50 transition-all duration-500 ease-in-out`}>
            <p onClick={() => setOpensidebar(false)} className="text-2xl font-bold mt-5 flex justify-end px-2 cursor-pointer text-orange-600"><FaRegCircleXmark /></p>
            <div>
                <ul className="flex flex-col gap-12 mt-12 sm:hidden justify-between items-center sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12 font-medium font-[Merienda]">
                    <motion.a
                        initial={{ translateY: 20 }} whileInView={{ translateY: 0 }} transition={{
                            duration: 0.3, ease: easeInOut
                        }}
                        onClick={() => setOpensidebar(false)} href="#Home" className="cursor-pointer hover:transform hover:-translate-y-2 duration-300"><i className="fa-solid fa-location-arrow text-orange-600"></i> Home</motion.a>
                    <motion.a
                        initial={{ translateY: 40 }} whileInView={{ translateY: 0 }} transition={{
                            duration: 0.3, ease: easeInOut
                        }}
                        onClick={() => setOpensidebar(false)} href="#Projects" className="cursor-pointer hover:transform hover:-translate-y-2 duration-300"><i className="fa-solid fa-location-arrow text-orange-600"></i> Projects</motion.a>
                    <motion.a
                        initial={{ translateY: 60 }} whileInView={{ translateY: 0 }} transition={{
                            duration: 0.3, ease: easeInOut
                        }}
                        onClick={() => setOpensidebar(false)} href="#About" className="cursor-pointer hover:transform hover:-translate-y-2 duration-300"><i className="fa-solid fa-location-arrow text-orange-600"></i> About Us</motion.a>
                    <motion.a
                        initial={{ translateY: 80 }} whileInView={{ translateY: 0 }} transition={{
                            duration: 0.3, ease: easeInOut
                        }}
                        onClick={() => setOpensidebar(false)} href="#Testimonials" className="cursor-pointer hover:transform hover:-translate-y-2 duration-300"><i className="fa-solid fa-location-arrow text-orange-600"></i> Testimonials</motion.a>
                </ul>
            </div>

        </div>
    )
}