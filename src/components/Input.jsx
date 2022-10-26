import React from 'react'

function Input() {
  return (
    <div className="inputWrapper">
        <div className="input">
            <input type="text" placeholder='Type something'/>
        </div>
        <div className="inputIcons">
            <img src="/images/more.png" alt="hey" />
            <input type = "file" style = {{display : "none"}} id = "file" />
            <label htmlFor="file">
                <img src="/images/upload.png" alt="toy" />
            
            </label>
            <button>Send</button>
   
        </div>


    </div>
  )
}

export default Input