import React from "react";

export default function Chatmessage() {
  return (
    <div className="max-h-[520px] overflow-y-auto">
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
              <div className="chat-bubble chat-bubble-info">Calm down, Anakin.</div>
            </div>
          </div>
          <div className="chat chat-end">
            <div className="chat-bubble chat-bubble-accent">
              That's never been done in the history of the Jedi. It's insulting!
            </div>
          </div>
        </>
      );
}
