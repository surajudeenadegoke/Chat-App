import React from "react";
import Messages from "../components/Messages"
import Input from "../components/Input"
function Chat() {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Suraj</span>
        <div className="chatIcons">
          <img src="/images/cam.jpeg" alt="" />
          <img src="/images/images.png" alt="" />
          <img src="/images/more.png" alt="" />
        </div>
       
      </div>
      <Messages/>
      <Input/>
    </div>
  );
}
export default Chat;
