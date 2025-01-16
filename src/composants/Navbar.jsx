import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";


const Navbar = () => {
    return (
<nav className="flex py-5 gap-x-20 items-center">
    <div>
        <h2 className="font-bold text-3xl ml-5">Ticket</h2>
    </div>
    
    <div className="flex gap-4 ml-auto"> 
        <ul className="flex gap-x-3">
            <li className="cursor-pointer duration-500 py-3 flex-col">
                <HiDotsHorizontal/>
            </li>
            <li>
                <button className="flex items-center rounded-md bg-white-to-tr from-slate-800 to-slate-700 py-2 px-4 border border-gray-400 text-center text-sm text-green transition-all shadow-sm focus:bg-slate-700 focus:shadow-none active:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1.5">
                        <path fillRule="evenodd" d="M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H18a4.5 4.5 0 0 0 2.206-8.423 3.75 3.75 0 0 0-4.133-4.303A6.001 6.001 0 0 0 10.5 3.75Zm2.03 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v4.94a.75.75 0 0 0 1.5 0v-4.94l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clipRule="evenodd" />
                    </svg>
                    Focus Mode
                </button>
            </li>
            <li>
                <button className="rounded-md bg-green-600 py-2 px-6 border border-transparent text-center text-sm text-white transition-all shadow-md focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 mr-4" type="button">
                    Add Ticket
                </button>
            </li>
        </ul>
    </div>
</nav>

    ) ;   
}
export default Navbar