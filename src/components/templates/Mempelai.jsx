import React from 'react'
import { imgMempelai, imgWanita } from '../../assets'
import Section from '../organisms/Section'
import CardMempelai from '../organisms/CardMempelai'

const Mempelai = () => {
  return (
    <Section>
        <img src={imgMempelai} className='h-[156vh] w-full object-cover' />
        <div className="desc absolute top-[120px] left-1/2 transfrom -translate-x-1/2 w-full flex flex-col justify-center items-center">
          <div className="salam text-lg font-medium w-full">
            <h5>بسم الله الرحمن الرحيم صحيح</h5>
            <h6 className='text-sm my-2'>Assalamualaikum Warahmatullahi Wabarakatuh</h6>
            <h6 className='text-sm px-5'>Maha suci Allah SWT yang telah menciptakan makhluk-Nya berpasang-pasangan. Tanpa mengurangi rasa hormat, dengan ini kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir pada asara pernikahan kami :</h6>
          </div>
          <img src={imgWanita}  />
          <img src={imgWanita}  className='mt-[-150px]'/>
        </div>
    </Section>
  )
}

export default Mempelai