import { projectData } from "../assets/assets";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRef } from "react";
import { motion } from 'framer-motion';
export const Projects = () => {

    const containerRef = useRef(null);

    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft -= 300;
        }
    };


    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += 300;
        }
    };

    return (
        <motion.div
        initial={{ x: 300 }} whileInView={{ x: 0 }} transition={{ duration: 1 }}
            className="py-20 px-4 md:px-20 lg:px-32" id="Projects">
            <div
                className="flex flex-col items-center justify-center">
                <h1 className="text-center font-semibold font-[Merienda] text-2xl md:text-3xl">Projects <span className="font-[Alata]">Completed</span></h1>
                <div className="w-12 h-0.5 border-[1.5px] border-orange-600 rounded-2xl"></div>
                <p className="font-[Outfit] text-wrap mt-3 text-center">Here we showcase some projects for customer satisfaction</p>
            </div>
            <div className="flex items-center justify-end gap-12 mt-5">
                <button onClick={scrollLeft} className="text-3xl font-bold text-orange-600 transition-all ease-in-out hover:-translate-x-1" ><MdKeyboardArrowLeft /></button>
                <button onClick={scrollRight} className="text-3xl font-bold text-orange-600 transition-all ease-in-out hover:translate-x-1" ><MdKeyboardArrowRight /></button>
            </div>
            <div ref={containerRef} className="mt-12 overflow-hidden flex gap-5 relative overflow-x-scroll scroll-smooth" style={{ scrollbarWidth: 'none' }}>
                {
                    projectData.map((item, index) => {
                        return (
                            <div key={index} className="flex-shrink-0 shadow-md hover:transform hover:scale-105 transition-all duration-300">
                                <img src={item.image} alt={item.id} className="w-[320px] h-[450px] " />
                            </div>
                        )
                    })
                }
            </div>
        </motion.div>
    )
}