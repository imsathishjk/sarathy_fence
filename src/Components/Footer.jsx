export const Footer = () => {
    return (
        <div className="mt-8 px-4 flex flex-wrap gap-5 py-5 border-t border-t-gray-300 shadow-md">
            <div className="flex flex-col items-start gap-2 max-w-[650px]">
                <h1 className="font-[Merienda] text-2xl font-bold">Sarathy Fence</h1>
                <p className="font-[Outfit] font-medium text-gray-500 text-[16px] text-wrap leading-loose">
                    Sarathy Fencing Work has the expertise and passion to exceed your expectations. Explore our portfolio, read our client testimonials, and contact us to start planning your fencing project today.
                    Thank you for choosing Sarathy Fencing Work – where your fencing needs come first!
                </p>
            </div>
            <div className="flex flex-col items-start gap-2 flex-grow">
                <h1 className="font-[Merienda] text-lg underline text-orange-600">Quick Links</h1>
                <ul className="flex flex-col items-start gap-3 font-[Outfit] px-1">
                    <a href="#Home" className="cursor-pointer hover:underline hover:text-orange-600 hover:transition-all hover:ease-in-out hover:duration-300">Home</a>
                    <a href="#About" className="cursor-pointer hover:underline hover:text-orange-600 hover:transition-all hover:ease-in-out hover:duration-300">About Us</a>
                    <a href="#Projects" className="cursor-pointer hover:underline hover:text-orange-600 hover:transition-all hover:ease-in-out hover:duration-300">Projects</a>
                    <a href="#Testimonials" className="cursor-pointer hover:underline hover:text-orange-600 hover:transition-all hover:ease-in-out hover:duration-300">Testimonials</a>
                    <a href="#Contact" className="cursor-pointer hover:underline hover:text-orange-600 hover:transition-all hover:ease-in-out hover:duration-300">Contact Us</a>
                </ul>
            </div>
            <div className="flex flex-col items-start gap-2 font-[Outfit] flex-grow">
                <h1 className="font-[Merienda] text-lg underline text-orange-600">Social Links</h1>
                <ul className="flex flex-col gap-2">
                    <a href="instagram" className="hover:underline hover:text-orange-600 hover:transition-all hover:ease-in-out hover:duration-300 flex items-center gap-1"><i class="fa-brands fa-instagram"></i> Instagram</a>
                    <a href="instagram" className="hover:underline hover:text-orange-600 hover:transition-all hover:ease-in-out hover:duration-300 flex items-center gap-1"><i class="fa-brands fa-x-twitter"></i> Twitter</a>
                    <a href="instagram" className="hover:underline hover:text-orange-600 hover:transition-all hover:ease-in-out hover:duration-300 flex items-center gap-1"><i class="fa-brands fa-youtube"></i> Youtube</a>
                    <a href="instagram" className="hover:underline hover:text-orange-600 hover:transition-all hover:ease-in-out hover:duration-300 flex items-center gap-1"><i class="fa-brands fa-whatsapp"></i> Whatsapp</a>
                    <a href="instagram" className="hover:underline hover:text-orange-600 hover:transition-all hover:ease-in-out hover:duration-300 flex items-center gap-1"><i class="fa-brands fa-telegram"></i> Telegram</a>
                </ul>
            </div>
            <div className="flex flex-col items-start gap-2 font-[Outfit] flex-grow">
                <h1 className="font-[Merienda] text-lg underline text-orange-600">Get in Touch</h1>
                <p>T.Sivanantham,</p>
                <p>Sarathy Fencing Works,</p>
                <p>Vasudevanur,</p>
                <p>ChinnaSalem Circle,</p>
                <p>Kallakurichi District.</p>
                <p >Contact : <span className="font-[Merienda]">+91 95974 35893</span></p>
            </div>
        </div>
    )
}