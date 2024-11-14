import React from 'react'

export default function User() {
  return (
    <div>
      <div className='flex space-x-4 px-6 py-5 hover:bg-slate-600 duration-400 cursor-pointer '>
        
        <div className="avatar online">
            <div className="w-16 rounded-full">
             <img src="https://scontent.fdac27-1.fna.fbcdn.net/v/t39.30808-6/423695401_2107514379640960_7810199693968589160_n.jpg?stp=c0.169.1536.1536a_dst-jpg_s206x206&_nc_cat=107&ccb=1-7&_nc_sid=50ad20&_nc_ohc=DW1i5AK-4ekQ7kNvgGmm_pp&_nc_zt=23&_nc_ht=scontent.fdac27-1.fna&_nc_gid=Ahw2khZMpWsIqEgNFQ_5T1C&oh=00_AYBER3LRUEcXXbO6fGqyE3gXKatqAowMnjh_fLqmMvgVmA&oe=6739605A" />
            </div>
        </div>
        <div className='py-2  '>
            <h1 >Md. Sabbir Hossain </h1>
            <span>sabbir@gmail.com</span>
        </div>
    </div>
    </div>
  )
}
