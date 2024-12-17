import { useEffect, useRef, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { bg, cardAkad, cardResepsi, dana, galery1, galery10, galery11, galery12, galery13, galery2, galery3, galery4, galery5, galery6, galery7, galery8, galery9, galihDanWulan, galihWulan, gift, header, imgAkad, imgAwal, imgMempelai, imgPria, imgWanita, jym, kepada, mandiri, page1, page2, page3, page4, page5, page6, saveTheDate, story1, story2, story3, tamu, theWedding, titleGalery } from '../assets'

import sound from '../assets/audio/janjisuci.mp3'
import { FaPause, FaPlay, FaWhatsapp } from 'react-icons/fa'
import { FaMessage } from 'react-icons/fa6'
import { HiDocument, HiOutlineDocument, HiOutlineMailOpen } from 'react-icons/hi'
import Waktu from '../components/templates/Waktu'

const Galih = () => {
  const audioRef = useRef(new Audio(sound))
    const [isPlay, setPlay] = useState(false)
    const [startPlay, setStartPlay] = useState(true)
  
    useEffect(()=>{
      Aos.init({duration: 1500});
    }, [])
  
    useEffect(() => {
      if (!startPlay) {
        // Enable scroll
        document.body.style.overflow = 'auto';
      } else {
        // Disable scroll
        document.body.style.overflow = 'hidden';
      }
    }, [startPlay]);
  
  
    const [textCopy,setTextCopy] = useState(false);
  
    const handleCopyClick = (nomor) => {
      navigator.clipboard.writeText(nomor).then(() => {
        setTextCopy(true)
        setTimeout(() => {
          setTextCopy(false)
        }, 2000);
      }).catch(err => {
        console.error('Gagal menyalin teks: ', err);
      });
    };
  
    const handleStartPlay = () => {
      audioRef.current.play()
      setStartPlay(false)
    }
  
    const play = () => {
      if(isPlay){
        audioRef.current.play()
      }else{
        audioRef.current.pause()
      }
      setPlay(!isPlay)
    }
  
    // whatsapp
    const handleWhatsAppClick = (phoneNumber) => {
      // const phoneNumber = '6282329322353'; 
      const message = ''; 
      const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappLink, '_blank');
    };
  return (
<div className={`relative overflow-x-hidden sm:hidden`}>
      <div className="landingpage relative w-screen h-screen">
        <img src={imgAwal} className='w-full h-full object-cover object-top' />
        <div className="absolute top-0 w-full h-full bg-black opacity-40"></div>
        <div className="absolute bottom-[120px] flex flex-col justify-center items-center text-center left-1/2 transform -translate-x-1/2">
          <img src={theWedding} alt="" className='w-[200px]' />
          <img src={galihWulan} alt="" className='pt-4 pb-10' />
          <img src={kepada} alt="" className='pb-3 w-[200px]' />
          <img src={tamu} alt="" className='w-[130px]'/>
        </div>
        <div className={`${startPlay? 'flex':'hidden'} fixed z-[1] top-0 w-full h-full bg-black bg-opacity-50 items-center justify-center`}>
          <div onClick={handleStartPlay} className="cursor-pointer items-center text-white bg-background border-2 text-sm font-medium w-[180px] flex justify-between px-5 py-2 rounded-full">
            <div className="icon">
              <HiOutlineMailOpen size={25}/>
            </div>
            <h4>Buka Undangan</h4>
          </div>
        </div>
        {startPlay? 'hidden': 
          <div onClick={play} className="fixed p-2 bottom-5 cursor-pointer text-white flex items-center justify-center left-1/2 transform -translate-x-1/2 z-[1] w-6 h-6 bg-background rounded-full">
            {isPlay? <FaPlay />:<FaPause />}
          </div>
        }
      </div>

      <div className="relative flex justify-center">
        <img src={header} alt="" />
        <div className="absolute bottom-[185px]" data-aos="zoom-in">
          <img src={galihDanWulan} className='w-[250px]' />
        </div>
        <div className='absolute bottom-[120px] w-full px-[30px]' data-aos="fade-up">
          <Waktu />
        </div>
      </div>

      <div className="relative">
        <img src={page1} alt="" />
        <img src={page2} alt="" />
        <div className="mempelai text-center absolute top-0 py-20">
          <div className="salam font-medium">
            <h5 data-aos="fade-up" className='text-xl'>بسم الله الرحمن الرحيم صحيح</h5>
            <h6 data-aos="fade-up" className='text-sm my-3 italic'>Assalamualaikum Warahmatullahi Wabarakatuh</h6>
            <h6 data-aos="fade-up" className='text-sm px-5 italic'>Maha suci Allah SWT yang telah menciptakan makhluk-Nya berpasang-pasangan. Tanpa mengurangi rasa hormat, dengan ini kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir pada asara pernikahan kami :</h6>
          </div>
          <img src={imgWanita} data-aos="fade-left"/>
          <img src={imgPria} data-aos="fade-right" className='mt-[-85px]'/>
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
          <h2 className='text-center text-2xl text-white font-medium italic mb-10' data-aos="zoom-in">Our Love Story</h2>

          <div className=" px-10 text-background" data-aos="fade-left">
            <h5 className='text-white font-medium italic'>2017</h5>
            <div className="card mt-3 bg-white px-3 py-3 rounded-lg">
              <h5 className='text-sm font-medium mb-2'>Awal Pertemuan</h5>
              <div className="img relative w-full h-[150px] xs:h-[170px] s:h-[190px] border rounded-lg overflow-hidden">
                <img src={story1} className='absolute top-[-115px] xs:top-[-150px] s:top-[-170px]' />
              </div>
              <p className='text-[12px] font-medium mt-2'>Awal ketemu masa SMA ketika Galih masih kelas 12 dan Wulan kelas 10, tanpa sengaja bertemu di kantin sekolah pada saat jam istirahat dan dari pandangan pertama saat itu Galih mencari tahu tentang Wulan, dan kebetulan Wulan teman sekelas dengan sepupu nya Galih.</p>
            </div>
          </div>
          <div className=" px-10 py-10 text-background" data-aos="fade-left">
            <h5 className='text-white font-medium italic'>2018</h5>
            <div className="card mt-3 bg-white px-3 py-3 rounded-lg">
              <h5 className='text-sm font-medium mb-2'>Kencan Pertama</h5>
              <div className="img relative w-full h-[150px] xs:h-[170px] s:h-[190px] border rounded-lg overflow-hidden">
              <img src={story2} className='absolute top-[-115px] xs:top-[-150px] s:top-[-170px]' />
              </div>
              <p className='text-[12px] font-medium mt-2'>Setelah saling kenal dan dekat lalu kencan ke pantai pangandaran dan pada saat itu memutuskan untuk menjalin hubungan.</p>
            </div>
          </div>
          <div className=" px-10 text-background" data-aos="fade-left">
            <h5 className='text-white font-medium italic'>2021</h5>
            <div className="card mt-3 bg-white px-3 py-3 rounded-lg">
              <h5 className='text-sm font-medium mb-2'>Lamaran</h5>
              <div className="img relative w-full h-[150px] xs:h-[170px] s:h-[190px] border rounded-lg overflow-hidden">
              <img src={story3} className='absolute top-[-135px] xs:top-[-150px] s:top-[-170px]' />
              </div>
              <p className='text-[12px] font-medium mt-2'>Pada tahun 2021 kami memutuskan untuk lamaran dan menjalin hubungan serius.</p>
            </div>
          </div>
        </div>
      </div>

      {/* akad */}
      <div className="relative">
        <img src={page5} alt="" />
        <img src={page6} alt="" />
        <div className="absolute top-0 py-40 pt-60 flex flex-col justify-center items-center gap-7">
            <img src={saveTheDate} className='w-[200px] mb-[30px]' data-aos="fade-up" />
            <img src={cardAkad} className='w-[85%]' data-aos="fade-up" />
            <img src={cardResepsi} className='w-[85%]' data-aos="fade-up" />
          </div>
      </div>

      {/* galery */}
      <div className="relative bg-background px-2 py-4">
        <div className='flex justify-center mb-10' data-aos="fade-up">
          <img src={titleGalery} className='w-[110px]' />
        </div>
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

      {/* wedding gift */}
      <div className="relative text-background">
        <img src={page1} alt="" />
        <img src={page2} alt="" />
        <div className="absolute top-0 pt-[100px] px-10 text-sm font-medium">
          {textCopy && 
            <div className="copytext fixed top-10 bg-background text-white left-1/2 transform -translate-x-1/2 px-5 py-1 rounded-full z-[9]">
              Berhasil di Salin
            </div>
          }
          <div className="flex justify-center" data-aos="zoom-in">
            <img src={gift} className='w-[200px]' />
          </div>
          <p className='text-center mt-10' data-aos="zoom-in">Doa restu Anda merupakan karunia terindah bagi kami. Dan jika memberi adalah ungkapan tanda kasih, dengan senang hati kami menerima kado secara cashless melalui :</p>
          <div className="payment text-center">
            <div className="mandiri" data-aos="zoom-in">
              <div className="logo flex justify-center mb-[-40px]">
                <img src={mandiri} className='w-[200px]' />
              </div>
              <p>No. Rekening : 1390023055266</p>
              <p>Wulan Juliasih</p>
              <button onClick={() => handleCopyClick('1390023055266')} className='py-1 px-4 bg-background rounded-full text-white cursor-pointer mt-3'><h3 className='flex items-center'><HiOutlineDocument className='me-1' size={20}/> Salin No. Rekening</h3></button>
            </div>
            <div className="dana mt-[40px]" data-aos="zoom-in">
              <div className="logo flex justify-center mb-[10px]">
                <img src={dana} className='w-[60px]' />
              </div>
              <p>No. Dana : 083126746504</p>
              <p>Galih Indrawan</p>
              <button onClick={() => handleCopyClick('083126746504')} className='py-1 px-4 bg-background rounded-full text-white cursor-pointer mt-3'>
              <h3 className='flex items-center'><HiOutlineDocument className='me-1' size={20}/> Salin No. Dana</h3>
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-[300px]" data-aos="zoom-in">
          <div className="logo flex justify-center w-screen flex-col items-center">
            <h3 className='text-center font-medium text-lg'>Konfirmasi Kehadiran</h3>
            <div onClick={()=>handleWhatsAppClick('6283861229081')} className="whatsapp bg-background text-white px-5 py-1 rounded-full font-medium mt-5 flex items-center text-sm cursor-pointer">
              <FaWhatsapp className='me-2' size={18}/>
              Whatsap
            </div>
          </div>
        </div>
      </div>

      {/* google maps */}
      <div className="relative px-5 py-5 pb-10 bg-background">
        <h2 className='text-xl text-white text-center italic font-medium mb-5' data-aos="fade-up">Maps</h2>
        <div className="maps border-2 border-white rounded-2xl overflow-hidden" data-aos="fade-up">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.6415419261057!2d108.79946727592448!3d-7.167371170330259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f77d4a784e5e7%3A0xfc5d156419fbea05!2sJl.%20Raya%20Salem%20-%20Bentar%20No.54%2C%20Salem%2C%20Kec.%20Salem%2C%20Kabupaten%20Brebes%2C%20Jawa%20Tengah%2052275!5e0!3m2!1sid!2sid!4v1717332622625!5m2!1sid!2sid" style={{border: 'border-0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-[400px]'></iframe>
        </div>
      </div>

      {/* doa pengantin */}
      <div className="relative text-center text-background">
        <img src={page5} alt="" />
        <div className="absolute top-0 mt-[150px] px-[20px] font-medium">
          <div className="doa-pengantin" data-aos="zoom-in">
            <h4>Doa Pengantin</h4>
            <div className="doa">
              <h4 className='my-5'>بَارَكَ اللهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ</h4>
              <h4 className='text-sm italic'>"Mudah-mudahan Allah memberkahi engkau dalam segala hal (yang baik) dan mempersatukan kamu berdua dalam kebaikan"</h4>
            </div>
          </div>
          <p className="text-sm mt-10" data-aos="zoom-in">
            Merupakan suatu kehormatan dan kebahagianan bagi kami sekeluarga apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai. Atas kehadiran serta doa restunya, kami ucapkan terimaksih.
          </p>
        </div>
      </div>

      {/* Contact */}
      <div className="relative text-background font-medium">
        <img src={page6} alt="" />
        <div data-aos="fade-up" className="absolute bottom-[300px] left-1/3 transform  text-center">
          <h5 className='text-sm'>By</h5>
          <h1 className='pt-1 pb-5 text-xl'>JymInvite</h1>
          <button onClick={()=>handleWhatsAppClick('6282329322353')} className='flex items-center text-sm py-1 font-medium bg-background px-4 rounded-full text-white'>
            <FaWhatsapp  size={18} className='me-[5px]'/>
            <h6>Whatsapp</h6>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Galih