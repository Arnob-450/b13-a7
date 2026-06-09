import { FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className="bg-[#244D3F]">
            <footer className="container mx-auto py-12 px-4 text-center flex flex-col items-center">
              
                <div className="w-full max-w-2xl mb-2">
                    <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">KeenKeeper</h1>
                    <p className="text-gray-300 text-sm md:text-base mb-4 leading-relaxed">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>
                </div>

                
                <div className="mb-8">
                    <p className="text-white text-lg md:text-xl font-semibold mb-4">Social Links</p>
                    <div className="flex justify-center gap-4">
                        <a 
                            className="bg-white p-3 rounded-full text-[#244D3F] hover:bg-gray-200 transition-colors duration-200" 
                            href="#" 
                            aria-label="YouTube"
                        >
                            <FaYoutube size={20} />
                        </a>
                        <a 
                            className="bg-white p-3 rounded-full text-[#244D3F] hover:bg-gray-200 transition-colors duration-200" 
                            href="#"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={20} />
                        </a>
                        <a 
                            className="bg-white p-3 rounded-full text-[#244D3F] hover:bg-gray-200 transition-colors duration-200" 
                            href="#"
                            aria-label="X (Twitter)"
                        >
                            <FaXTwitter size={20} />
                        </a>
                    </div>
                </div>

             
                <div className="w-full border-t border-gray-400 my-6"></div>

    
                <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
                    <p className="text-xs md:text-sm text-gray-400">&copy; 2026 KeenKeeper. All rights reserved.</p>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                        <a href="#" className="text-xs md:text-sm text-gray-400 hover:text-gray-200 transition-colors">Privacy Policy</a>
                        <a href="#" className="text-xs md:text-sm text-gray-400 hover:text-gray-200 transition-colors">Terms of Service</a>
                        <a href="#" className="text-xs md:text-sm text-gray-400 hover:text-gray-200 transition-colors">Cookies</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;