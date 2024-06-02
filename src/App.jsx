import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { bg, cardAkad, cardResepsi, imgAkad, imgHome, imgMempelai, imgWanita } from './assets'
import LandingPage from './components/templates/LandingPage'
import Akad from './components/templates/Akad'
import Mempelai from './components/templates/Mempelai'
import Pertemuan from './components/templates/Pertemuan'
import Background from './components/templates/Background'

function App() {
  useEffect(()=>{
    Aos.init({duration: 2000});
  }, [])
  return (
    <div className='relative sm:hidden overflow-x-hidden'>
      <LandingPage />
      <img src={bg} className='w-screen' />

      {/* mempelai */}
      <div className="mempelai text-center absolute top-[175vh] xs:top-[190vh] s:top-[200vh] left-1/2 transfrom -translate-x-1/2 w-full flex flex-col justify-center items-center">
        <div className="salam text-lg font-medium w-full">
          <h5 data-aos="fade-up" >بسم الله الرحمن الرحيم صحيح</h5>
          <h6 data-aos="fade-up" className='text-sm my-2'>Assalamualaikum Warahmatullahi Wabarakatuh</h6>
          <h6 data-aos="fade-up" className='text-sm px-5'>Maha suci Allah SWT yang telah menciptakan makhluk-Nya berpasang-pasangan. Tanpa mengurangi rasa hormat, dengan ini kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir pada asara pernikahan kami :</h6>
        </div>
        <img src={imgWanita} data-aos="fade-up" />
      </div>

      {/* story */}
      <div className="story absolute top-[300vh] xs:top-[360vh] s:top-[390vh] ps-12 xs:ps-14 pe-5 xs:pe-7 s:ps-16 s:pe-9 w-screen">
        <div className="pertama" data-aos="fade-left">
          <h5 className='text-white font-medium italic'>2017</h5>
          <div className="card mt-3 bg-white px-3 py-3 rounded-lg">
            <h5 className='text-sm font-medium mb-2'>Awal Pertemuan</h5>
            <div className="img w-full h-[150px] xs:h-[170px] s:h-[190px] border rounded-lg overflow-hidden">
              <img src={cardAkad} className='w-full h-full object-cover' />
            </div>
            <p className='text-[12px] font-medium mt-2'>Awal ketemu masa SMA ketika Galih masih kelas 12 dan Wulan kelas 10, tanpa sengaja bertemu di kantin sekolah pada saat jam istirahat dan dari pandangan pertama saat itu Galih mencari tahu tentang Wulan, dan kebetulan Wulan teman sekelas dengan sepupu nya Galih.</p>
          </div>
        </div>
        <div className="kedua py-5" data-aos="fade-left">
          <h5 className='text-white font-medium italic'>2018</h5>
          <div className="card mt-3 bg-white px-3 py-3 rounded-lg">
            <h5 className='text-sm font-medium mb-2'>Kencan Pertama</h5>
            <div className="img w-full h-[150px] xs:h-[170px] s:h-[190px] border rounded-lg overflow-hidden">
              <img src={cardAkad} className='w-full h-full object-cover' />
            </div>
            <p className='text-[12px] font-medium mt-2'>Setelah saling kenal dan dekat lalu kencan ke pantai pangandaran dan pada saat itu memutuskan untuk menjalin hubungan</p>
          </div>
        </div>
        <div className="ketiga" data-aos="fade-left">
          <h5 className='text-white font-medium italic'>2021</h5>
          <div className="card mt-3 bg-white px-3 py-3 rounded-lg">
            <h5 className='text-sm font-medium mb-2'>Lamaran</h5>
            <div className="img w-full h-[150px] xs:h-[170px] s:h-[190px] border rounded-lg overflow-hidden">
              <img src={cardAkad} className='w-full h-full object-cover' />
            </div>
            <p className='text-[12px] font-medium mt-2'>Setelah saling kenal dan dekat lalu kencan ke pantai pangandaran dan pada saat itu memutuskan untuk menjalin hubungan</p>
          </div>
        </div>
      </div>

      {/* strat date */}
      <div className="absolute top-[445vh] xs:top-[510vh] s:top-[570vh] startdate flex flex-col justify-center items-center gap-7">
        <img src={cardAkad} className='w-[85%]' data-aos="fade-up" />
        <img src={cardResepsi} className='w-[85%]' data-aos="fade-up" />
      </div>
    </div>
  )
}

export default App
