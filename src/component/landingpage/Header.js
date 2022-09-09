import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";

export default function Header() {
    const paket = [
        { name: "Paket 1", image: '/assets/paket tour/surabaya.jpg', harga: 'Rp.3000000', lokasi: 'Surabaya', durasi: '3D2N' },
        { name: "Paket 2", image: '/assets/paket tour/bandung.jpg', harga: 'Rp.2000000', lokasi: 'Bandung', durasi: '3D2N' },
        { name: "Paket 3", image: '/assets/paket tour/jogja.jpg', harga: 'Rp.2500000', lokasi: 'Jogja', durasi: '3D2N' },
        { name: "Paket 4", image: '/assets/paket tour/bali.jpg', harga: 'Rp.5000000', lokasi: 'Bali', durasi: '3D2N' },
        { name: "Paket 5", image: '/assets/paket tour/lombok.jpg', harga: 'Rp.4500000', lokasi: 'Lombok', durasi: '2D1N' },
        { name: "Paket 6", image: '/assets/paket tour/surabaya.jpg', harga: 'Rp.2500000', lokasi: 'Surabaya', durasi: '2D1N' },
        { name: "Paket 7", image: '/assets/paket tour/bandung.jpg', harga: 'Rp.1600000', lokasi: 'Bandung', durasi: '2D1N' },
        { name: "Paket 8", image: '/assets/paket tour/lombok.jpg', harga: 'Rp.600000', lokasi: 'Lombok', durasi: '3D2N' },
    ]
    return (
        <>
            <Navbar />
            <div className="relative w-full mb-6 mx-auto">
                <div className="object-cover overflow-hidden h-80 ">
                    <img className=" h-full w-full" src={`/assets/travel.png`}></img>
                </div>
            </div >
            <div className=" w-5/6 mx-auto mb-6 p-3">
                <h2 className="text-center mb-6 text-4xl text-sky-800 ">FunTav Service</h2>
                <div className="flex w-5/6 mx-auto justify-evenly ">
                    <div className="flex flex-wrap justify-center rounded-md mx-2 h-56 w-80 bg-sky-700 opacity-75 ">
                        <h3 className="mx-6 my-6 text-center text-white font-semibold text-xl">Pesan langsung menggunakan
                            sistem pemesanan kami</h3>
                        <a href="#paket" className="h-10 w-40  bg-amber-400 text-center text-sky-700 font-bold px-4 py-2 rounded-md hover:bg-amber-600 focus:text-white">Book Online</a>
                    </div>
                    <div className="flex flex-wrap justify-center rounded-md mx-2 h-56 w-80  bg-sky-700 opacity-75">
                        <h3 className="mx-6 my-6 text-center text-white font-semibold text-xl">Kami siap membantu merencanakan perjalanan impian Anda kapanpun dan dimanapun</h3>
                        <Link to={'/form-travel'} className="h-10 w-36  bg-amber-400 text-center  text-sky-700 font-bold px-4 py-2 rounded-md hover:bg-amber-600 focus:text-white">Klik disini</Link>
                    </div>
                </div>
            </div>
            <div className="w-full py-5 bg-sky-700 mx-auto">
                <div className=" ml-2 ">
                    <div className="px-4">
                        <h1 className="text-center text-amber-400 font-semibold text-3xl my-2">Tentang Kami</h1>
                        <p className="text-white text-justify">Funtav travel merupakan
                            penyelenggara kegiatan perjalanan wisata dengan menawaekan paket dibeberapa lokasi yang
                            sangat menabjubkan dan diminati oleh wisatawan baik domestic ataupun mancanegara. Warkit
                            bekerjasama dengan banyak perusahaan transportasi yang telah berpengalaman,
                            akomodasi/penginapan dari hotel kelas melati hingga berbintang, restoran, tour guide yang
                            berlisensi dan tempat-tempat wisata. </p>

                    </div>
                </div>
            </div >

            <div id='paket' className="  mx-auto p-6">
                <div className="flex justify-between px-4">
                    <h3 className="ml-12 font-semibold text-lg">Paket Tour Khusus</h3>
                </div>
                <div className=" flex flex-wrap gap-4 justify-evenly p-2 bg-white mt-2">
                    {paket.map((data, index) => (
                        <Link to={'/booking'}>
                            <div key={index} className="border-2 rounded-md shadow-lg mx-2 h-72 w-72">
                                <img className=" h-48 w-full overflow-hidden " src={data.image}></img>
                                <div className="p-1">
                                    <h2 className="text-center font-semibold text-xl">{data.name}</h2>
                                    <h4 className="text-center  text-base"><span className="font-semibold">{data.durasi}</span> {data.lokasi}</h4>
                                    <h1 className="text-center  text-2xl">{data.harga}</h1>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="w-11/12 mx-auto h-72 my-1">
                <img className="object-cover h-full w-full" src={`/assets/banner.jpg`}></img>
            </div>
            {/* <div>
                        <h1>Tour Terbaru</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div> */}
            <Footer />
        </>
    )
}