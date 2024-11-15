import { motion } from 'framer-motion'
export const Header = () => {
    const mobileNubmer = '+91 95974 35893';

    const copyMobileNumber = () => {
        // Copy phone number to clipboard
        navigator.clipboard.writeText(mobileNubmer)
            .then(() => {
                console.log("Phone number copied to clipboard");
            })
            .catch((error) => {
                console.error("Failed to copy phone number:", error);
            });
    };
    return (
        <div
            className="bg-cyan-50 w-full min-h-[100vh] bg-cover bg-center overflow-hidden relative" style={{ backgroundImage: `url(/bg-img.jpg)` }} id="Home">
            <div className="absolute top-0 w-full min-h-screen bg-black opacity-65 z-0">

            </div>
            <motion.div
                initial={{ y: 200 }} whileInView={{ y: 0 }} transition={{duration:1}} viewport={{once:true}}
                className="absolute top-1/2 text-white w-full px-4">
                <div className="flex flex-col gap-8 items-center">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:5xl font-bold font-[Merienda]">Building durable boundaries <br /> with precision and care at <span className="text-orange-600">Sarathy</span> Fencing Works</h1>
                    <h2 className="text-[14px] sm:text-lg md:text-xl font-[Alata] font-medium">- Building Boundaries, Creating Trust -</h2>
                    <div className="flex justify-center items-center gap-12 font-[Poppins]">
                        <a href="#Contact" className="bg-orange-600 text-white font-medium py-2 px-4 sm:px-6 text-md cursor-pointer">E-mail</a>

                        <a href={`tel:${mobileNubmer}`} className="font-[Merienda] font-medium cursor-pointer border border-orange-600 py-2 px-2 sm:px-4 flex items-center gap-2" onClick={copyMobileNumber}><span><i class="fa-solid fa-phone text-orange-600"></i> </span>Call Us</a>
                    </div>
                </div>
            </motion.div>
        </div>

    )
}
