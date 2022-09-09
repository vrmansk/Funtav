import React from "react";
import { BsCartPlus, BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="w-full  py-3 bg-sky-700 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">

            <div className="border-2 md:border-0 md:container mx-auto lg:w-4/5 px-2 flex md:items-center ">
                <Link to={'/'} className="hidden mx-2 md:block mt-2 md:text-xl text-base text-white pr-2 font-semibold hover:text-gray-400" >FunTav</Link>
                <div className="flex flex-grow md:flex-wrap md:justify-center">
                    {/* <input type="search" className="w-full  mt-1 p-1 md:mt-0 md:w-full md:mx-4 rounded-lg" placeholder="Search"></input> */}
                    <ul className="hidden mt-1 md:flex md:justify-center md:w-4/5 list-style-none">
                        <li className="p-2 hover:font-semibold hover:text-gray-400"><Link to={'/'} href="#">Beranda</Link></li>
                        <li className="p-2 hover:font-semibold hover:text-gray-400"><Link to={'/'}>Paket</Link></li>
                        <li className="p-2 hover:font-semibold hover:text-gray-400"><Link to={'/'}>Promo</Link></li>
                        <li className="p-2 hover:font-semibold hover:text-gray-400"><Link to={'/'}>Event</Link></li>
                        <li className="p-2 hover:font-semibold hover:text-gray-400"><Link to={'/tentang-kami'}>Tentang Kami</Link></li>
                    </ul>
                </div>

                <div className=" flex-wrap mx-auto">
                    <div className="flex my-1 mx-2">
                        <button className="h-10 w-24 my-2 bg-amber-400 text-center text-sky-700 font-bold px-4 py-2 rounded-md hover:bg-amber-600 focus:text-white">Login</button>
                    </div>
                    {/* <button className="hidden md:block md:mx-auto p-2 rounded-lg text-xs bg-gray-700 hover:bg-gray-800 hover:text-gray-300">Find store</button> */}
                </div>
            </div>

        </nav >
    )
}

export default Navbar