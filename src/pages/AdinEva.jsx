import { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import bgAwal from "../assets/adin/bg-awal.jpg";
import bgDua from "../assets/adin/bg-2.png";
import title from "../assets/adin/title.png";
import title2 from "../assets/adin/title2.png";
import pria from "../assets/adin/pria.png";
import wanita from "../assets/adin/wanita.png";
import bca from "../assets/adin/bca.png";
import resepsi from "../assets/adin/resepsi.png";
import akad from "../assets/adin/akad.png";
import {
  gift,
  page1,
  page2,
  page5,
  page6,
  saveTheDate,
} from "../assets";

import sound from "../assets/audio/janjisuci.mp3";
import { FaPause, FaPlay, FaWhatsapp } from "react-icons/fa";
import {
  HiOutlineDocument,
  HiOutlineMailOpen,
} from "react-icons/hi";
import Waktu from "../components/templates/Waktu";

const AdinEva = () => {
  const audioRef = useRef(new Audio(sound));
  const [isPlay, setPlay] = useState(false);
  const [startPlay, setStartPlay] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  useEffect(() => {
    if (!startPlay) {
      // Enable scroll
      document.body.style.overflow = "auto";
    } else {
      // Disable scroll
      document.body.style.overflow = "hidden";
    }
  }, [startPlay]);

  const [textCopy, setTextCopy] = useState(false);

  const handleCopyClick = (nomor) => {
    navigator.clipboard
      .writeText(nomor)
      .then(() => {
        setTextCopy(true);
        setTimeout(() => {
          setTextCopy(false);
        }, 2000);
      })
      .catch((err) => {
        console.error("Gagal menyalin teks: ", err);
      });
  };

  const handleStartPlay = () => {
    audioRef.current.play();
    setStartPlay(false);
  };

  const play = () => {
    if (isPlay) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setPlay(!isPlay);
  };

  // whatsapp
  const handleWhatsAppClick = (phoneNumber) => {
    // const phoneNumber = '6282329322353';
    const message = "";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };
  return (
    <div className={`relative overflow-x-hidden sm:hidden`}>
      <div className="landingpage relative w-screen h-screen">
        <img src={bgAwal} className="w-full h-full object-cover object-top" />
        <div className="absolute top-0 w-full h-full bg-black opacity-40"></div>
        <div className="absolute bottom-[120px] flex flex-col justify-center items-center text-center left-1/2 transform -translate-x-1/2">
          <img src={title} alt="" className="w-[250px]" />
        </div>
        <div
          className={`${
            startPlay ? "flex" : "hidden"
          } fixed z-[1] top-0 w-full h-full bg-black bg-opacity-50 items-center justify-center`}
        >
          <div
            onClick={handleStartPlay}
            className="cursor-pointer items-center text-white bg-background border-2 text-sm font-medium w-[180px] flex justify-between px-5 py-2 rounded-full"
          >
            <div className="icon">
              <HiOutlineMailOpen size={25} />
            </div>
            <h4>Buka Undangan</h4>
          </div>
        </div>
        {startPlay ? (
          "hidden"
        ) : (
          <div
            onClick={play}
            className="fixed p-2 bottom-5 cursor-pointer text-white flex items-center justify-center left-1/2 transform -translate-x-1/2 z-[1] w-6 h-6 bg-background rounded-full"
          >
            {isPlay ? <FaPlay /> : <FaPause />}
          </div>
        )}
      </div>

      <div className="relative flex justify-center">
        <img src={bgDua} alt="" />
        <div className="absolute bottom-[185px]" data-aos="zoom-in">
          <img src={title2} className="w-[160px]" />
        </div>
        <div
          className="absolute bottom-[120px] w-full px-[30px] mx-auto"
          data-aos="fade-up"
        >
          <Waktu />
        </div>
      </div>

      <div className="relative">
        <img src={page1} alt="" />
        <img src={page2} alt="" />
        <div className="mempelai text-center absolute top-0 py-20">
          <div className="salam font-medium">
            <h5 data-aos="fade-up" className="text-xl">
              بسم الله الرحمن الرحيم صحيح
            </h5>
            <h6 data-aos="fade-up" className="text-sm my-3 italic">
              Assalamualaikum Warahmatullahi Wabarakatuh
            </h6>
            <h6 data-aos="fade-up" className="text-sm px-5 italic">
              Maha suci Allah SWT yang telah menciptakan makhluk-Nya
              berpasang-pasangan. Tanpa mengurangi rasa hormat, dengan ini kami
              bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir pada asara
              pernikahan kami :
            </h6>
          </div>
          <img src={wanita} data-aos="fade-left" />
          <img src={pria} data-aos="fade-right" className="mt-[-85px]" />
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
          <p className="text-[13px] font-medium my-4 italic" data-aos="fade-up">
            "Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan
            pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu
            merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan
            kasih sayang. Sesungguhnya pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."
          </p>
          <h5 className="font-bold italic text-sm" data-aos="fade-up">
            (Q.S. Ar-Rum:21)
          </h5>
        </div>
      </div>

      {/* akad */}
      <div className="relative">
        <img src={page5} alt="" />
        <img src={page6} alt="" />
        <div className="absolute top-0 py-40 pt-60 flex flex-col justify-center items-center gap-7">
          <img
            src={saveTheDate}
            className="w-[200px] mb-[30px]"
            data-aos="fade-up"
          />
          <img src={resepsi} className="w-[85%]" data-aos="fade-up" />
          <img src={akad} className="w-[85%]" data-aos="fade-up" />
        </div>
      </div>

      {/* wedding gift */}
      <div className="relative text-background">
        <img src={page1} alt="" />
        <img src={page2} alt="" />
        <div className="absolute top-0 pt-[100px] px-10 text-sm font-medium">
          {textCopy && (
            <div className="copytext fixed top-10 bg-background text-white left-1/2 transform -translate-x-1/2 px-5 py-1 rounded-full z-[9]">
              Berhasil di Salin
            </div>
          )}
          <div className="flex justify-center" data-aos="zoom-in">
            <img src={gift} className="w-[200px]" />
          </div>
          <p className="text-center mt-10" data-aos="zoom-in">
            Doa restu Anda merupakan karunia terindah bagi kami. Dan jika
            memberi adalah ungkapan tanda kasih, dengan senang hati kami
            menerima kado secara cashless melalui :
          </p>
          <div className="payment text-center">
            <div className="mt-[40px]" data-aos="zoom-in">
              <div className="logo flex justify-center mb-[10px]">
                <img src={bca} className="w-[150px]" />
              </div>
              <p>No. Rekening : 4860105344</p>
              <p>Ahadin Muhamad</p>
              <button
                onClick={() => handleCopyClick("4860105344")}
                className="py-1 px-4 bg-background rounded-full text-white cursor-pointer mt-3"
              >
                <h3 className="flex items-center">
                  <HiOutlineDocument className="me-1" size={20} /> Salin No.
                  Rekening
                </h3>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* google maps */}
      <div className="relative px-5 py-5 pb-10 bg-background">
        <h2
          className="text-xl text-white text-center italic font-medium mb-5"
          data-aos="fade-up"
        >
          Maps
        </h2>
        <div
          className="maps border-2 border-white rounded-2xl overflow-hidden"
          data-aos="fade-up"
        >
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.6415419261057!2d108.79946727592448!3d-7.167371170330259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f77d4a784e5e7%3A0xfc5d156419fbea05!2sJl.%20Raya%20Salem%20-%20Bentar%20No.54%2C%20Salem%2C%20Kec.%20Salem%2C%20Kabupaten%20Brebes%2C%20Jawa%20Tengah%2052275!5e0!3m2!1sid!2sid!4v1717332622625!5m2!1sid!2sid"
            style={{ border: "border-0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[400px]"
          ></iframe> */}
        </div>
      </div>

      {/* doa pengantin */}
      <div className="relative text-center text-background">
        <img src={page5} alt="" />
        <div className="absolute top-0 mt-[150px] px-[20px] font-medium">
          <div className="doa-pengantin" data-aos="zoom-in">
            <h4>Doa Pengantin</h4>
            <div className="doa">
              <h4 className="my-5">
                بَارَكَ اللهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي
                خَيْرٍ
              </h4>
              <h4 className="text-sm italic">
                "Mudah-mudahan Allah memberkahi engkau dalam segala hal (yang
                baik) dan mempersatukan kamu berdua dalam kebaikan"
              </h4>
            </div>
          </div>
          <p className="text-sm mt-10" data-aos="zoom-in">
            Merupakan suatu kehormatan dan kebahagianan bagi kami sekeluarga
            apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa
            restu kepada kedua mempelai. Atas kehadiran serta doa restunya, kami
            ucapkan terimaksih.
          </p>
        </div>
      </div>

      {/* Contact */}
      <div className="relative text-background font-medium">
        <img src={page6} alt="" />
        <div
          data-aos="fade-up"
          className="absolute bottom-[300px] left-1/3 transform  text-center"
        >
          <h5 className="text-sm">By</h5>
          <h1 className="pt-1 pb-5 text-xl">JymInvite</h1>
          <button
            onClick={() => handleWhatsAppClick("6282329322353")}
            className="flex items-center text-sm py-1 font-medium bg-background px-4 rounded-full text-white"
          >
            <FaWhatsapp size={18} className="me-[5px]" />
            <h6>Whatsapp</h6>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdinEva;
