import React from 'react'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

const pertanyaan = [
    { no: 1, pertanyaan: 'Berapa anggaran yang Anda miliki?' },
    { no: 2, pertanyaan: 'Transportasi apa yang ingin Anda gunakan?' },
    { no: 3, pertanyaan: 'Apakah Anda ingin menginap di Hotel / Lounge?' },
    { no: 4, pertanyaan: 'Apakah Anda memiliki referensi makanan/makanan yang tidak Anda inginkan?' },
    { no: 5, pertanyaan: 'Apakah Anda lebih suka jadwal yang padat atau jadwal yang longgar?' },
    { no: 6, pertanyaan: 'Apakah Anda ingin fokus pada Kuliner/Budaya?' },
    { no: 7, pertanyaan: 'Berapa banyak orang yang akan pergi dengan Anda?' },
    { no: 8, pertanyaan: 'Apakah Anda memiliki catatan medis?' },
]
const Formulir = () => {
    return (
        <>
            <Navbar />
            <main>
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
                >
                    <div className="absolute top-0 w-full h-full  bg-cover"
                        style={{
                            backgroundImage: "url('assets/banner.jpg')"
                        }}>
                        <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
                    </div>
                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                <div className="pr-12">
                                    <h1 className="text-white font-semibold text-5xl">
                                        Kami siap bantu untuk merencanakan perjalanan Travel anda
                                    </h1>
                                    {/* <p className="mt-4 text-lg text-gray-300">
                                        Silahkan isi formulir dan jawab pertanyaan dibawah ini dan akan kami kirimkan hasil perencanaan perjalanan melalui email/WA.
                                    </p> */}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <section className="pb-5 bg-gray-300/10 -mt-20">
                    <div className="container w-3/4  mx-auto px-4">
                        <div className="mx-auto">
                            <div className="w-full  px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <h2  >Silahkan isi formulir dan jawab pertanyaan dibawah ini</h2>
                                        <h2 >kami kirimkan hasil perencanaan perjalanan anda melalui email/WA</h2>
                                        <form className='w-full border-2 mt-3 rounded-md'>
                                            <div className='flex justify-between p-2'>
                                                <label>Nama Lengkap </label>
                                                <input className='w-5/6 border rounded-sm mx-4 px-4' type="text" placeholder="Nama Lengkap" />
                                            </div>
                                            <div className='flex justify-between p-2 '>
                                                <label >Email </label>
                                                <input className='w-5/6 border rounded-sm mx-4 px-4' type="email" placeholder="Email" />
                                            </div>
                                            <div className='flex justify-between p-2 ' >
                                                <label>No Handphone </label>
                                                <input className='w-5/6 border rounded-sm mx-4 px-4' placeholder="No Handphone" ></input>
                                            </div>
                                            <div className='border-t-2 mx-4 my-4'></div>
                                            <form className='w-full mt-3 '>
                                                {pertanyaan.map((data, index) => (
                                                    <div className='flex flex-wrap mb-4'>
                                                        <label key={index} className='mx-4'>{data.pertanyaan}</label>
                                                        <input className='w-full border-dotted border-b-2 rounded-sm mx-4' type="text" />
                                                    </div>
                                                ))}
                                            </form>
                                            <button className="h-10 w-40 my-2 bg-amber-400 text-center text-sky-700 font-bold px-4 py-2 rounded-md hover:bg-amber-600 focus:text-white">Submit</button>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            {/* <div className="w-full pt-20  mx-auto">
                <div className="object-cover overflow-hidden h-80 -mt-4 ">
                    <img className=" h-full w-full" src={`/assets/travel.png`}></img>
                    <h1>Loan Adviser Kami Siap Membantu Anda</h1>
                    <p>Kami memiliki Loan Adviser yang tersebar di berbagai tempat. Anda bisa memilih Loan Adviser yang nantinya akan  membantu dalam memproses dan mengawal pinjaman dan atau produk finansial lainnya yang Anda pilih dari awal hingga  selesai.</p >
                </div >

                <div className="w-3/4 border-4 -mt-36 bg-black z-1 pt-20 mx-auto" >
                    <h2  >Baru Pertama di Loan Market?</h2>
                    <p >Biarkan Loan Adviser Kami Menghubungi Anda</p>
                    <form >
                        <div>
                            <input type="text" placeholder="Nama Lengkap" />
                        </div>
                        <div >
                            <input type="email" placeholder="Email" />
                        </div>
                        <div >
                            <input placeholder="No Handphone" ></input>
                        </div>
                        <div><button type="submit" >Kirim</button></div>
                    </form>
                </div>
            </div > */}
        </>
    )
}

export default Formulir