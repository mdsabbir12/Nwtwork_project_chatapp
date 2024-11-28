import React from 'react'

export default function User({user}) {
  return (
    <div>
      <div className='flex space-x-4 px-6 py-5 hover:bg-slate-600 duration-400 cursor-pointer '>
        
        <div className="avatar online">
            <div className="w-16 rounded-full">
             <img src="https://shorturl.at/bKQRU" />
            </div>
        </div>
        <div className='py-2  '>
            <h1 >{user.name} </h1>
            <span>{user.email}</span>
        </div>
    </div>
    </div>
  )
}
