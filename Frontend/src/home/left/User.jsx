    import React from 'react'
    
    function User() {
      return (
        <div className='flex space-x-4 px-6 py-7 hover:bg-slate-600 duration-300 cursor-pointer'>
            <div className="avatar online">
                <div className="w-14 rounded-full">
                    <img src="https://scontent.fdac27-1.fna.fbcdn.net/v/t39.30808-6/423695401_2107514379640960_7810199693968589160_n.jpg?stp=c0.169.1536.1536a_dst-jpg_s206x206&_nc_cat=107&ccb=1-7&_nc_sid=50ad20&_nc_ohc=zUp3xGvgazcQ7kNvgFtguS7&_nc_zt=23&_nc_ht=scontent.fdac27-1.fna&_nc_gid=A7r2aC2f4O29V_GEDeGNfuS&oh=00_AYC65KCEE7cRXdYV0Cx1PkYc7H0C9GNTu24zGt6qnP8RhA&oe=67380EDA" />
                </div>
            </div>


            <div>
                <h1>Md. Sabbir Hossain</h1>
                <span>sabbir@gmail.com</span>
            </div>
        </div>
      )
    }
    
    export default User