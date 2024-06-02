import React from 'react'

const CardMempelai = () => {
  return (
    <div className="pria relative border-2 rounded border-black w-[90%] h-[340px] rounded-2xl mt-[130px]">
        <div className="foto bg-white w-[200px] h-[200px] border-2 border-black absolute top-[-80px] left-1/2 rounded-2xl transform -translate-x-1/2"></div>
        <div className="desc absolute bottom-5 left-1/2 transform -translate-x-1/2">
            <div className="desc-nama font-medium">
            <h3>Ervian</h3>
            <h5 className='text-lg'>Ervian Yulianto Nugroho</h5>
            </div>
            <div className="desc-orangtua my-3 text-[14px]">
            <h5 className='font-medium'>Putra pertama dari</h5>
            <p className='font-medium'>Bapak Nugroho Suketi & Ibu Kursini</p>
            </div>
            <div className="instagram">
            <h6 className='text-[13px]'>@ervyn092</h6>
            </div>
        </div>
    </div>
  )
}

export default CardMempelai