import { CiLocationOn } from "react-icons/ci";
import { motion} from 'framer-motion';
export const Testimonials = () => {
    return (
        <div className="py-20" id="Testimonials">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-center font-semibold font-[Merienda] text-2xl md:text-3xl">Customer <span className="font-[Alata]">Testimonials</span></h1>
                <div className="w-12 h-0.5 border-[1.5px] border-orange-600 rounded-2xl font-[Merienda]"></div>
                <p className="font-[Outfit] text-wrap mt-3 text-center">Your Trusted Partner in Fencing Excellence.</p>
            </div>
            <div className="flex justify-center gap-12 mt-12 flex-wrap">
                <motion.div 
                initial={{translateX:-100}} whileInView={{translateX:0}} transition={{ease:"linear", duration:1}} viewport={{once:true}}
                className="w-[300px] border border-gray-300 shadow-md p-5 rounded-md hover:scale-105 hover:tranfrom transition-all ease-in-out cursor-pointer">
                    <div className="flex flex-col gap-2">
                        <p className="font-[Merienda] text-center text-xl w-8 h-8 bg-orange-600 text-white rounded-md mx-auto">R</p>
                        <h1 className="text-lg font-medium font-[Merienda] text-center">Raja Durai,</h1>
                        <p className="text-lg font-medium text-gray-400 font-[Outfit] flex items-center gap-1 justify-center"><span className=""><CiLocationOn/></span>Trichy</p>
                    </div>
                    <div className="mt-2">
                        <p className="text-[16px] font-normal font-[Outfit] leading-loose">Absolutely thrilled with our new fence! The team at <span className="font-[Merienda] text-orange-600 font-bold">Sarathy</span> Fencing Work was professional, punctual, and highly skilled. They understood exactly what we wanted and went above and beyond to deliver. Our yard feels secure and looks amazing. Highly recommend their services!</p>
                    </div>
                </motion.div>
                <motion.div
                 initial={{translateY:40}} whileInView={{translateY:0}} transition={{ease:"linear", duration:1}} viewport={{once:true}}
                className="w-[300px] border border-gray-300 shadow-md p-5 rounded-md hover:scale-105 hover:tranfrom transition-all ease-in-out cursor-pointer">
                    <div className="flex flex-col gap-2">
                        <p className="font-[Merienda] text-center text-xl w-8 h-8 bg-orange-600 text-white rounded-md mx-auto">J</p>
                        <h1 className="text-lg font-medium font-[Merienda] text-center">Jegan,</h1>
                        <p className="text-lg font-medium text-gray-400 font-[Outfit] flex items-center gap-1 justify-center"><span className=""><CiLocationOn/></span>Salem</p>
                    </div>
                    <div className="mt-2">
                        <p className="text-[16px] font-normal font-[Outfit] leading-loose">We needed a durable yet stylish fence for our commercial property, and <span className="font-[Merienda] text-orange-600 font-bold">Sarathy</span> Fencing Work delivered perfectly. From consultation to installation, the process was seamless. They worked around our schedule and completed the project on time. Exceptional quality and service</p>
                    </div>
                </motion.div>
                <motion.div
                 initial={{translateX:100}} whileInView={{translateX:0}} transition={{ease:"linear", duration:1}} viewport={{once:true}}
                className="w-[300px] border border-gray-300 shadow-md p-5 rounded-md hover:scale-105 hover:tranfrom transition-all ease-in-out cursor-pointer">
                    <div className="flex flex-col gap-2">
                        <p className="font-[Merienda] text-center text-xl w-8 h-8 bg-orange-600 text-white rounded-md mx-auto">A</p>
                        <h1 className="text-lg font-medium font-[Merienda] text-center">Aravind Samy,</h1>
                        <p className="text-lg font-medium text-gray-400 font-[Outfit] flex items-center gap-1 justify-center"><span className=""><CiLocationOn/></span>Coimbatore</p>
                    </div>
                    <div className="mt-2">
                        <p className="text-[16px] font-normal font-[Outfit] leading-loose"><span className="font-[Merienda] text-orange-600 font-bold">Sarathy</span> Fencing Work transformed our backyard with a beautiful custom fence. They took the time to understand our design preferences and executed them flawlessly. The whole team was friendly, and their attention to detail is impressive. Couldn’t be happier with the results!</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}