import aboutBanner from '../assets/banner.jpg';
import {motion} from 'framer-motion';
export const About = () => {
    return (
        <motion.div className="py-20 px-4" id='About'
        initial={{opacity:0}} whileInView={{opacity:1}}
        transition={{duration:1}} viewport={{once:true}}
        >
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-center font-semibold font-[Merienda] text-2xl md:text-3xl">About <span className="font-[Alata]">Us</span></h1>
                <div className="w-12 h-0.5 border-[1.5px] border-orange-600 rounded-2xl font-[Merienda]"></div>
                <p className="font-[Outfit] text-wrap mt-3 text-center"> Quality Fencing Solutions for Every Space</p>
            </div>
            <div 
          
            className='flex md:justify-center flex-wrap gap-12 mt-12'>
                <div>
                    <img src={aboutBanner} alt="" className='rounded-se-[150px] rounded-es-[150px]' />
                </div>
                <div className='flex flex-col md:flex-row lg:flex-col gap-5'>
                    <div className='grid grid-cols-2 gap-8 w-full'>
                        <div>
                            <h1 className='text-2xl md:text-3xl font-[Merienda] font-semibold text-orange-600'>8+</h1>
                            <p className='text-[14px] md:text-[16px] font-[Alata] font-normal'>Years Excellence</p>
                        </div>
                        <div>
                            <h1 className='text-2xl md:text-3xl font-[Merienda] font-semibold text-orange-600'>50+</h1>
                            <p className='text-[14px] md:text-[16px] font-[Alata] font-normal'>Projects Completed</p>
                        </div>
                        <div>
                            <h1 className='text-2xl md:text-3xl font-[Merienda] font-semibold text-orange-600'>10+</h1>
                            <p className='text-[14px] md:text-[16px] font-[Alata] font-normal'>Mn.sq.ft Completed</p>
                        </div>
                        <div>
                            <h1 className='text-2xl md:text-3xl font-[Merienda] font-semibold text-orange-600'>15+</h1>
                            <p className='text-[14px] md:text-[16px] font-[Alata] font-normal'>Ongoing Projects</p>
                        </div>
                    </div>
                    <div className='max-w-[400px]'>
                        <p className='text-[14px] md:text-[16px] font-extralight font-[Merienda] leading-loose'>At <span className='font-bold text-orange-600'>Sarathy</span> Fencing Work, we specialize in crafting high-quality fences that combine durability, functionality, and aesthetic appeal. With years of expertise in the fencing industry, our team is dedicated to delivering exceptional solutions for residential and commercial properties alike. We understand that a fence is more than just a boundary—it’s an essential part of your property’s security, privacy, and charm.</p>
                    </div>

                </div>
            </div>
        </motion.div>
    )
}