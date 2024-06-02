import React from "react";
import Section from "../organisms/Section";
import { imgMempelai, imgPertemuan, imgPink } from "../../assets";

const Pertemuan = () => {
  return (
    <Section>
      <img src={imgMempelai} className="mt-[40vh] h-full w-full object-cover" />
      <div className="desc absolute left-1/2 transfrom -translate-x-1/2 w-full px-2">
        <div className="doa">
          <h5 className="font-medium text-xl">
            وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا
            لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً
            وَّرَحْمَةًۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
          </h5>
          <p className="text-[13px] font-medium my-4 italic">"Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."</p>
          <h5 className="font-bold italic text-sm">(Q.S. Ar-Rum:21)</h5>
        </div>
        <div className="story">
          <h3 className="text-[25px]">Our Love Story</h3>
        </div>
      </div>
    </Section>
  );
};

export default Pertemuan;
