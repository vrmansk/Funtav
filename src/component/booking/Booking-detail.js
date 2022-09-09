import React from 'react'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

const BookingDetail = () => {
    return (
        <>
            <Navbar />
            <div className='w-3/4 shadow-md h-80 mx-auto p-4 bg-sky-600/90' >
                <div className=' flex flex-wrap h-72 '>
                    <div className=' w-1/2'>
                        <img className='h-72 w-full shadow-md border-2 object-cover overflow-hidden' src={`assets/paket tour/surabaya.jpg`} />
                    </div>
                    <div className='w-1/2 '>
                        <h1 className='text-white text-center  text-3xl mt-12'>Surabaya <span className='font-semibold text-amber-400'>3D2N</span> </h1>
                        <h3 className='font-bold text-white text-4xl text-center mx-4 my-2'>Rp.3.000.000 </h3>
                        <button className='border-2 p-4 mx-32 hover:bg-amber-500 text-white my-8'>Pesan Via Whatsapp</button>
                    </div>
                </div>


                {/* <h2 className='text-sky-500 font-semibold mb-4 text-3xl'>Title</h2>
                <img className='border2' src={`assets/travel.png`} />
                <div className='flex justify-between my-3'>
                    <h3 className='text-gray-700 text-lg'>Keberangkatan 20 Sep 2022 - 23 Sep 2022 </h3>
                    <button className='bg-amber-400 text-white text-center h-8 w-32 rounded-md hover:bg-amber-600 focus:ring-2'>ubah tanggal</button>
                </div>
                <div>
                    <h3 className='text-gray-700 text-base'>Ringkasan Tour</h3>
                </div> */}
            </div>
            <div className='w-3/4 mx-auto shadow-md bg-white p-4'>
                <h1 className='text-sky-600 text-3xl font-semibold'>Fasilitas</h1>
                <ul className='my-2'>
                    <li className='ml-4'>- Transportasi Darat dan Laut selama trip</li>
                    <li className='ml-4'>- Penginapan</li>
                    <li className='ml-4'>- Makan/minum selama trip</li>
                    <li className='ml-4'>- Tiket masuk wisata</li>
                    <li className='ml-4'>- Guide</li>
                    <li className='ml-4'>- Dokumentasi</li>
                </ul>
                <h1 className='text-sky-600 text-3xl font-semibold'>Tidak Temasuk</h1>
                <ul className='my-2'>
                    <li className='ml-4'>- Additional trip</li>
                    <li className='ml-4'>- Pengeluaran pribadi</li>
                </ul>
                <h1 className='text-sky-600 text-3xl font-semibold'>Jadwal Paket</h1>
                <ul className='my-2'>
                    <li >23-25 September</li>
                    <li >21-23 Oktober</li>
                    <li >25-27 November</li>
                </ul>
            </div>
            <Footer />
        </>
    )
}

export default BookingDetail