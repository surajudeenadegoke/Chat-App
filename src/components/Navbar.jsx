import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
      <span className="logo"> Deen Chat</span>
      <div className="user">
       <img src="/images/chatimg.jpeg" alt="" />
       <span> Suraj</span>
       <button>Logout</button>

      </div>
    </div>
  )
}

export default Navbar