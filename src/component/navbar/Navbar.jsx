import { CiClock2 } from "react-icons/ci";
import { GoGraph } from "react-icons/go";
import { RiHome2Line } from "react-icons/ri";
import { NavLink } from "react-router";


const Navbar = () => {
    return (
        <div className="bg-base-100 shadow-sm">
            <div className="navbar container mx-auto">
                <div className="flex-1">
                    <a className="text-xl font-bold">Keen<span className="text-[#244D3F]">Keeper</span></a>
                </div>
                <div className="">
                    <ul className="flex">
                        <li><NavLink className={({ isActive }) => `btn btn-ghost text-[#64748B]  ${isActive ? 'text-white btn-active bg-[#244D3F] ' : ''}`} to={'/'}> <RiHome2Line />Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => `btn btn-ghost text-[#64748B] ${isActive ? 'text-white btn-active bg-[#244D3F] ' : ''}`} to={'/books'}><CiClock2 /> Timeline</NavLink></li>
                        <li><NavLink className={({ isActive }) => `btn btn-ghost text-[#64748B]  ${isActive ? 'text-white btn-active bg-[#244D3F] ' : ''}`} to={'/page-to-read'}>
                           <GoGraph /> Stats</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;