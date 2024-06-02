import React from 'react'
import Section from '../organisms/Section'
import { imgHome } from '../../assets'

const LandingPage = () => {
  return (
    <Section>
        <img src={imgHome} className='h-full w-full object-cover' />
        <div className="desc absolute top-1/2 left-1/2 transfrom -translate-x-1/2">
          <h5 className='uppercase mb-5 font-medium text-white'>the wedding of</h5>
          <h3 className='text-2xl font-bold text-white'>Galih & Wulan</h3>
          <div className="to mt-10 mb-5 text-white">
            <p className='text-sm font-medium'>Kepada Bapak/Ibu/Sudara/I:</p>
            <h4 className='text-lg font-medium'>Wulan Juliasih</h4>
          </div>
          <button className='px-4 py-1 text-sm font-medium rounded-full bg-white'>Buka Undangan</button>
        </div>
    </Section>
  )
}

export default LandingPage