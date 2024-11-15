import { motion } from 'framer-motion';
import { useState } from 'react';
import { toast } from 'react-toastify';
export const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "f363361f-b64c-4169-856b-f41957a5b622");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            toast('Thanks for reaching us!')
            event.target.reset();
            setResult('')
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };


    return (
        <motion.div
            initial={{ translateX: 200 }} whileInView={{ translateX: 0 }} transition={{ duration: 1 }} viewport={{once:true}}
            className="py-20 px-4" id="Contact">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-center font-semibold font-[Merienda] text-2xl md:text-3xl">Contact <span className="font-[Alata]">Us</span></h1>
                <div className="w-12 h-0.5 border-[1.5px] border-orange-600 rounded-2xl font-[Merienda]"></div>
                <p className="font-[Outfit] text-wrap mt-3 text-center"> Ready to Make a Move? Let’s Build Your Future Together</p>
            </div>
            <form onSubmit={onSubmit} className="flex flex-col gap-5 items-start justify-center max-w-[800px] mx-auto mt-12">
                <div className="flex flex-col gap-5 w-full">
                    <span className='font-[Merienda] text-orange-600'>Your Name</span>
                    <input type="text" placeholder="Your Name" required className="placeholder:text-inherit font-[Alata] font-normal border border-gray-700 bg-transparent w-full p-2 outline-none" />
                </div>
                <div className="flex flex-col gap-5 w-full">
                   <span className='font-[Merienda] text-orange-600'> Your Email</span>
                    <input type="emaiil" placeholder="Your E-mail" required className="placeholder:text-inherit font-[Alata] font-normal border border-gray-700 bg-transparent w-full p-2 outline-none" />
                </div>
                <div className="flex flex-col gap-5 w-full">
                   <span className='font-[Merienda] text-orange-600'> Message</span>
                    <textarea name="Message" placeholder="Message" required rows={10} className="placeholder:text-inherit font-[Alata] font-normal border border-gray-700 bg-transparent w-full p-2 resize-none outline-none"></textarea>
                </div>
                <button className="text-[16px] font-medium font-[Merienda] py-2 px-4 bg-orange-600 text-white rounded-ss-md rounded-ee-md w-fit mx-auto border border-gray-700 hover:border hover:border-orange-600 hover:bg-white hover:text-orange-600 transition-all duration-500 ease-in-out">{result ? result : "Send"}</button>
            </form>
        </motion.div>
    )
}