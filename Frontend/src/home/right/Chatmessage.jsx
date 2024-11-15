import React from "react";

export default function Chatmessage() {
  return (
    <div className="max-h-[540px] overflow-y-auto">
      <Get></Get>
      <Get></Get>
      <Get></Get>
      <Get></Get>
      <Get></Get>
      <Get></Get>
    </div>
  );
}

function Get() {
    return (
        <>
          <div className="py-2">
            <div className="chat chat-start">
              <div className="chat-bubble chat-bubble-info mx-3 max-w-[50%]">Calm down, Anakin.mx-3 max-w-[55%] mx-3 max-w-[55%] mx-3 max-w-[70%] mx-3 max-w-[55%]</div>
            </div>
          </div>
          <div className="chat chat-end">
            <div className="chat-bubble chat-bubble-accent mx-3 max-w-[60%]">
              That's never been done in the history of the Jedi. It's insulting!
              It's insulting! It's insulting! It's insulting!It's insulting! It's insulting!
            </div>
          </div>
        </>
      );
}
