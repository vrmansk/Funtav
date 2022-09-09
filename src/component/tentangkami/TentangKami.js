import React from 'react'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

const TentangKami = () => {
    return (
        <>
            <Navbar />
            <div className='w-3/4 mx-auto p-4'>
                <div>
                    <h1 className='text-sky-600 font-semibold text-2xl my-2'>Tentang Kami</h1>
                    <p className='text-justify text-gray-500'>
                        Funtav merupakan
                        penyelenggara kegiatan perjalanan wisata dengan menawaekan paket dibeberapa lokasi yang
                        sangat menabjubkan dan diminati oleh wisatawan baik domestic ataupun mancanegara. Warkit
                        bekerjasama dengan banyak perusahaan transportasi yang telah berpengalaman,
                        akomodasi/penginapan dari hotel kelas melati hingga berbintang, restoran, tour guide yang
                        berlisensi dan tempat-tempat wisata.
                    </p>
                </div>
                <div>
                    <h2 className='text-sky-600 font-semibold text-xl my-2'>Mengapa Kami ?</h2>
                    <h4 className='font-semibold'>Best amenities</h4>
                    <p className='text-justify text-gray-500'>Fasilitas terbaik untuk akomodasi liburan anda, menyesuaikan dengan apa yang anda inginkan</p>
                    <h4 className='font-semibold'>Customizable</h4>
                    <p className='text-justify text-gray-500'>Tour bisa disesuaikan dengan kebutuhan dan keinginan anda, yang paling penting anda merasa
                        nyaman dan puas dengan pelayanan yang kami berikan.</p>
                    <h4 className='font-semibold'>Booking mudah</h4>
                    <p className='text-justify text-gray-500'>Kami buat cara raservasi yang mudah</p>
                    <h4 className='font-semibold'>Best destination</h4>
                    <p className='text-justify text-gray-500'>Destinasi pilihan untuk liburan dan terbaik untuk kamu. Unik dan beda</p>
                    <h4 className='font-semibold'>Support</h4>
                    <p className='text-justify text-gray-500'>Kami berupaya selalu untuk melayani anda kapan saja.</p>
                </div>
                <div>
                    <h2 className='text-sky-600 font-semibold text-xl my-2'>Excellent service kami</h2>
                    <h4 className='font-semibold'>Tour</h4>
                    <p className='text-justify text-gray-500'>Menawarkan paket wisata ke berbagai destinasi di Indonesia dan Luar Negeri</p>
                    <h4 className='font-semibold'>Event</h4>
                    <p className='text-justify text-gray-500'>Merancang dan menyelenggarakan kegiatan untuk perusahaan seperti family gathering, team building, gala dinner atau sekedar meeting sekaligus berwisata</p>
                    <h4 className='font-semibold'>Travel</h4>
                    <p className='text-justify text-gray-500'>Mengakomodir tiket pesawat, sewa kendaraan, sewa speedboat, booking hotel untuk individu maupun corporate.</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default TentangKami