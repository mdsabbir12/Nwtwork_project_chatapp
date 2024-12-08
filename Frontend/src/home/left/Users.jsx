import React from 'react'
import User from './User.jsx'
import useGetallUsers from "../../Context/useGetallUsers.jsx"
function Users() {

  const [allUsers,setallUsers]=useGetallUsers();
  console.log(allUsers);
  const usersArray = allUsers?.filterallUsers || [];
  return (
    <>

    <div className='max-h-[520px] overflow-y-auto'> 
      
    {usersArray.length > 0 ? (
        usersArray.map((user, index) => <User key={index} user={user} />)
      ) : (
        <p>No users found or loading...</p>
      )}
    </div>
    </>
    
  )
}

export default Users