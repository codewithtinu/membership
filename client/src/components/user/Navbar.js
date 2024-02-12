import { NavLink } from "react-router-dom";
import Header from "../user/Header";
const UserNavbar = () =>{
    return(

        <div class="bg-indigo-950">
             <nav class="w-full flex justify-between items-center p-2 bg-slate-300">
                <Header/>
        <div class="text-blue-800 hidden md:block ">
            <ul class="flex">
                <li class="mx-2 p-2 font-semibold text-slate-700 text-base">
                    <NavLink to="/" class="hover:text-blue-700 hover:bg-yellow-300 p-[10px]">Home</NavLink>
                </li>
                <li class="mx-2 p-2 font-semibold text-slate-700 text-base">
                    <NavLink to="/" class="hover:text-blue-700 hover:bg-yellow-300 p-[10px]">About Us</NavLink>
                </li>
                <li class="mx-2 p-2 font-semibold text-slate-700 text-base">
                    <NavLink to="/" class="hover:text-blue-700 hover:bg-yellow-300 p-[10px]">Contact Us</NavLink>
                </li>
            </ul>
        </div>
        <div class="text-blue-800 hidden md:block">
            <NavLink to="#" class="bg-indigo-800 text-white font-semibold text-base p-2 rounded-lg">Login / Sign Up</NavLink>
        </div>
        <div class="md:hidden text-2xl cursor-pointer font-semibold">&#9776;</div>
    </nav>

            <h1>hello</h1>
        
        </div>
    )
}
export default UserNavbar;
