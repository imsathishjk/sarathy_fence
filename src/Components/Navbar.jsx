import { RiMenu3Line } from "react-icons/ri";
import { MdLightMode } from "react-icons/md";
import { MdOutlineNightlightRound } from "react-icons/md";
// import { GiSpikedFence } from "react-icons/gi";

export const Navbar = ({switchBackground,background,setOpensidebar,openSidebar}) => {



    return (
        <div className={`flex justify-between items-center sm:gap-5 md:gap-8 lg:gap-14 py-3 px-2 md:px-4 shadow-sm fixed top-0 w-full z-10 ${background === 'Dark' ? 'bg-black text-white transition-all duration-500 ease-in-out':'bg-white text-black transition-all duration-500 ease-in-out'}`}>
            <div>
                <h1 className='text-xl lg:text-2xl font-bold font-[Merienda] cursor-pointer flex items-center gap-1'><span className="text-white w-8 h-8 md:w-10 md:h-10 rounded-ee-3xl bg-orange-600 flex items-center justify-center">SF</span> Sarathy Fence</h1>
            </div>
            <ul className="hidden sm:flex justify-between items-center sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12 font-medium font-[Merienda]">
                <a href="#Home" className="cursor-pointer"><i className="fa-solid fa-location-arrow text-orange-600 hover:-translate-y-1 transition-all"></i> Home</a>
                <a href="#Projects" className="cursor-pointer"><i className="fa-solid fa-location-arrow text-orange-600"></i> Projects</a>
                <a href="#About" className="cursor-pointer"><i className="fa-solid fa-location-arrow text-orange-600"></i> About Us</a>
                <a href="#Testimonials" className="cursor-pointer hidden lg:block"><i className="fa-solid fa-location-arrow text-orange-600"></i> Testimonials</a>
            </ul>
            <div>
                <p className="font-[Merienda] cursor-pointer flex items-center gap-2" onClick={switchBackground}><span className="text-lg text-orange-600 font-semibold">{background === 'Light'?<MdLightMode/>:<MdOutlineNightlightRound/>}</span></p>
            </div>
            <div className="sm:hidden block">
                <p className="font-medium text-2xl text-orange-600 cursor-pointer" onClick={()=>setOpensidebar(!openSidebar)}><RiMenu3Line /></p>
            </div>
        </div>
    )
}