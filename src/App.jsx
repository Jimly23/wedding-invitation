import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { bg, cardAkad, cardResepsi, galery1, galery10, galery11, galery12, galery13, galery2, galery3, galery4, galery5, galery6, galery7, galery8, galery9, header, imgAkad, imgAwal, imgMempelai, imgWanita, page1, page2, page3, page4, page5, page6, story1, story2, story3 } from './assets'
import LandingPage from './components/templates/LandingPage'
import Akad from './components/templates/Akad'
import Mempelai from './components/templates/Mempelai'
import Pertemuan from './components/templates/Pertemuan'
import Background from './components/templates/Background'

function App() {
  useEffect(()=>{
    Aos.init({duration: 1500});
  }, [])
  return(
    <div className='overflow-x-hidden'>
      <div className="landingpage relative w-screen h-screen">
        <img src={imgAwal} className='scale-150 xs:scale-130 s:scale-100' />
      </div>

      <div className="relative">
        <img src={header} alt="" />
      </div>

      <div className="relative">
        <img src={page1} alt="" />
        <img src={page2} alt="" />
        <div className="mempelai text-center absolute top-0 py-20">
          <div className="salam font-medium">
            <h5 data-aos="fade-left" className='text-xl'>بسم الله الرحمن الرحيم صحيح</h5>
            <h6 data-aos="fade-right" className='text-sm my-3 italic'>Assalamualaikum Warahmatullahi Wabarakatuh</h6>
            <h6 data-aos="fade-left" className='text-sm px-5 italic'>Maha suci Allah SWT yang telah menciptakan makhluk-Nya berpasang-pasangan. Tanpa mengurangi rasa hormat, dengan ini kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir pada asara pernikahan kami :</h6>
          </div>
          <img src={imgWanita} data-aos="fade-left"/>
          <img src={imgWanita} data-aos="fade-right" className='mt-[-85px]'/>
        </div>
      </div>

      <div className="relative w-full bg-background pb-20">
        {/* doa */}
        <div className="doa text-center px-5 text-white">
          <h5 className="font-medium text-xl" data-aos="fade-up">
            وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا
            لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً
            وَّرَحْمَةًۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
          </h5>
          <p className="text-[13px] font-medium my-4 italic" data-aos="fade-up">"Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."</p>
          <h5 className="font-bold italic text-sm" data-aos="fade-up">(Q.S. Ar-Rum:21)</h5>
        </div>

        {/* garis */}
        <div className="garis absolute bottom-5 left-5 h-[75%] w-[8px] bg-white rounded-full">
          <div className="absolute w-5 h-5 rounded-full bg-white left-[-6px]"></div>
          <div className="absolute w-5 h-5 rounded-full bg-white left-[-6px] bottom-0"></div>
        </div>

        <div className=" box-card mt-10 bottom-[160px]">
          <h2 className='text-center text-2xl text-white font-medium italic mb-10' data-aos="fade-up">Our Love Story</h2>

          <div className="pertama px-10" data-aos="fade-left">
            <h5 className='text-white font-medium italic'>2017</h5>
            <div className="card mt-3 bg-white px-3 py-3 rounded-lg">
              <h5 className='text-sm font-medium mb-2'>Awal Pertemuan</h5>
              <div className="img relative w-full h-[150px] xs:h-[170px] s:h-[190px] border rounded-lg overflow-hidden">
                <img src={story1} className='absolute top-[-115px] xs:top-[-150px] s:top-[-170px]' />
              </div>
              <p className='text-[12px] font-medium mt-2'>Awal ketemu masa SMA ketika Galih masih kelas 12 dan Wulan kelas 10, tanpa sengaja bertemu di kantin sekolah pada saat jam istirahat dan dari pandangan pertama saat itu Galih mencari tahu tentang Wulan, dan kebetulan Wulan teman sekelas dengan sepupu nya Galih.</p>
            </div>
          </div>
          <div className="pertama px-10 py-10" data-aos="fade-left">
            <h5 className='text-white font-medium italic'>2018</h5>
            <div className="card mt-3 bg-white px-3 py-3 rounded-lg">
              <h5 className='text-sm font-medium mb-2'>Kencan Pertama</h5>
              <div className="img relative w-full h-[150px] xs:h-[170px] s:h-[190px] border rounded-lg overflow-hidden">
              <img src={story2} className='absolute top-[-115px] xs:top-[-150px] s:top-[-170px]' />
              </div>
              <p className='text-[12px] font-medium mt-2'>Setelah saling kenal dan dekat lalu kencan ke pantai pangandaran dan pada saat itu memutuskan untuk menjalin hubungan.</p>
            </div>
          </div>
          <div className="pertama px-10" data-aos="fade-left">
            <h5 className='text-white font-medium italic'>2021</h5>
            <div className="card mt-3 bg-white px-3 py-3 rounded-lg">
              <h5 className='text-sm font-medium mb-2'>Lamaran</h5>
              <div className="img relative w-full h-[150px] xs:h-[170px] s:h-[190px] border rounded-lg overflow-hidden">
              <img src={story3} className='absolute top-[-115px] xs:top-[-150px] s:top-[-170px]' />
              </div>
              <p className='text-[12px] font-medium mt-2'>Setelah saling kenal dan dekat lalu kencan ke pantai pangandaran dan pada saat itu memutuskan untuk menjalin hubungan.</p>
            </div>
          </div>
        </div>
      </div>

      {/* akad */}
      <div className="relative">
        <img src={page5} alt="" />
        <img src={page6} alt="" />
        <div className="absolute top-0 py-40 flex flex-col justify-center items-center gap-7">
            <img src={cardAkad} className='w-[85%]' data-aos="fade-up" />
            <img src={cardResepsi} className='w-[85%]' data-aos="fade-up" />
          </div>
      </div>

      {/* galery */}
      <div className="relative bg-background px-2 py-4">
        <h4 className='text-center font-medium text-xl mb-10 text-white' data-aos="fade-up">Galery</h4>
        <div className="grid grid-cols-2 gap-2">
          <div className="relative w-full h-[200px] rounded-lg overflow-hidden" data-aos="fade-right">
            <img src={galery1} className='absolute xs:top-[-20px] s:top-[-30px]' />
          </div>
          <div className="relative overflow-hidden w-full h-[200px] rounded-lg"  data-aos="fade-left">
            <img src={galery2} className='absolute xs:top-[-20px] s:top-[-30px]' />
          </div>
          <div className="relative overflow-hidden col-span-2  w-full h-[200px] rounded-lg" data-aos="zoom-in">
            <img src={galery3} className='absolute top-[-145px] xs:top-[-190px] s:top-[-220px]' />
          </div>
          <div className="relative overflow-hidden w-full h-[200px] rounded-lg" data-aos="fade-right">
            <img src={galery4} className='absolute xs:top-[-20px] s:top-[-30px]'/>
          </div>
          <div className="relative overflow-hidden w-full h-[200px] rounded-lg"  data-aos="fade-left">
            <img src={galery6} className='absolute xs:top-[-20px] s:top-[-30px]' />
          </div>
          <div className="relative overflow-hidden col-span-2 w-full h-[200px] rounded-lg" data-aos="zoom-in">
            <img src={galery7} className='absolute top-[-145px] xs:top-[-190px] s:top-[-220px]' />
          </div>
          <div className="relative overflow-hidden w-full h-[200px] rounded-lg" data-aos="fade-right">
            <img src={galery8} className='absolute xs:top-[-20px] s:top-[-30px]'/>
          </div>
          <div className="relative overflow-hidden w-full h-[200px] rounded-lg" data-aos="fade-left">
            <img src={galery10} className='absolute xs:top-[-20px] s:top-[-30px]' />
          </div>
          <div className="relative overflow-hidden col-span-2 w-full h-[200px] rounded-lg" data-aos="zoom-in">
            <img src={galery11} className='absolute top-[-145px] xs:top-[-180px] s:top-[-210px]' />
          </div>
          <div className="relative overflow-hidden w-full h-[200px] rounded-lg" data-aos="fade-right">
            <img src={galery12} className='absolute xs:top-[-20px] s:top-[-30px]'/>
          </div>
          <div className="relative overflow-hidden w-full h-[200px] rounded-lg" data-aos="fade-left">
            <img src={galery13} className='absolute xs:top-[-20px] s:top-[-30px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
