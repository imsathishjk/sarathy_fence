import { GiSpikedFence } from "react-icons/gi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdMiscellaneousServices } from "react-icons/md";
import {motion} from 'framer-motion';
export const Service = () => {
    return (
        <div className="py-20">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-center font-semibold font-[Merienda] text-2xl md:text-3xl">Why <span className="font-[Alata]">Choose Us</span></h1>
                <div className="w-12 h-0.5 border-[1.5px] border-orange-600 rounded-2xl font-[Merienda]"></div>
                <p className="font-[Outfit] text-wrap mt-3 text-center">Your Trusted Partner in Fencing Excellence</p>
            </div>
            <div className="flex justify-center gap-12 mt-12 flex-wrap">
                <motion.div
                initial={{translateY:80}} whileInView={{translateY:0}} transition={{duration:1}}
                className="border border-gray-300 w-[300px] p-5 rounded-md shadow-md hover:border-b-2 hover:border-b-orange-600">
                    <p className="flex items-center justify-center text-2xl font-medium gap-2 text-orange-600"><GiSpikedFence /> <span className="text-xl font-[Merienda] font-bold">Quality</span></p>
                    <p className="leading-loose font-[Outfit]  text-[16px] mt-3">We believe in doing things right the first time. That’s why we use only premium, durable materials designed to withstand the elements and look great for years to come. Our craftsmanship reflects our commitment to delivering fences that blend functionality with beauty.</p>
                </motion.div>
                <motion.div
                initial={{translateY:100}} whileInView={{translateY:0}} transition={{duration:1}}
                className="border border-gray-300 w-[300px] p-5 rounded-md shadow-md hover:border-b-2 hover:border-b-orange-600">
                    <p className="flex items-center justify-center text-2xl font-medium gap-2 text-orange-600"><VscWorkspaceTrusted /> <span className="text-xl font-[Merienda] font-bold">Trust</span></p>
                    <p className="leading-loose font-[Outfit]  text-[16px] mt-3">With 8 years in the fencing industry, our skilled team brings a wealth of experience to every project. We understand the unique needs of residential and commercial clients alike, ensuring that every fence we build meets high standards of safety, security, and aesthetics.</p>
                </motion.div>
                <motion.div
                initial={{translateY:120}} whileInView={{translateY:0}} transition={{duration:1}}
                className="border border-gray-300 w-[300px] p-5 rounded-md shadow-md hover:border-b-2 hover:border-b-orange-600">
                    <p className="flex items-center justify-center text-2xl font-medium gap-2 text-orange-600"><MdMiscellaneousServices /> <span className="text-xl font-[Merienda] font-bold">Service</span></p>
                    <p className="leading-loose font-[Outfit]  text-[16px] mt-3">Our customers are at the heart of everything we do. From the initial consultation to project completion, we focus on open communication, transparency, and attentive service to make sure you’re completely satisfied every step of the way.</p>
                </motion.div>
            </div>
        </div>
    )
}