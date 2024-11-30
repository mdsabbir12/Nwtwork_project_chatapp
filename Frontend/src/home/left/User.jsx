import React from 'react'
import UseConversation from '../../Statemanage/useConversation.js';

export default function User({user}) {

  const {selectedConversation,setSelectedConversation}=UseConversation();
  const isselected=selectedConversation?._id===user._id;
  return (
    <div className={`hover:bg-slate-600 duration-200 ${
      isselected?"bg-slate-700":""
    }`} onClick={()=>setSelectedConversation(user)}>
      <div className='flex space-x-4 px-6 py-5 hover:bg-slate-600 duration-400 cursor-pointer '>
        
        <div className="avatar online">
            <div className="w-16 rounded-full">
             <img src="https://shorturl.at/bKQRU" />
            </div>
        </div>
        <div className='py-2 '>
            <h1 >{user.name} </h1>
            <span>{user.email}</span>
        </div>
    </div>
    </div>
  )
}
