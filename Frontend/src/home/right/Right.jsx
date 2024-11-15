import React from 'react'
import Chatuser from '../left/Chatuser'
import Chatmessage from './Chatmessage'
import Sendmessage from './Sendmessage'

export default function Right() {
  return (
    <>
    <div className='w-[70%]  bg-slate-800 text-white'>
       <Chatuser></Chatuser>
       <Chatmessage></Chatmessage>
       <Sendmessage></Sendmessage>     
    </div>
    </>
    
  )
}
