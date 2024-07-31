import React from "react";
import Trash from "../icons/Trash.jsx";

const NoteCard = ({ note }) => {
  let position = JSON.parse(note.position);
  const colors = JSON.parse(note.colors);
  const body = JSON.parse(note.body);

  return (
      <div className="card"
          style={{
              backgroundColor: colors.colorBody,
              left:`${position.x}px`,
              top: `${position.y}px`,
              transform: `translate(${position.x}px, ${position.y}px)}`
          }}
      >
       <div
       className="card-header"
       style={{ backgroundColor: colors.colorHeader }}
       >
        <Trash />
       </div>

        <div className="card-body">
          <textarea 
          style={{color: colors.colorText }}
          defaultValue={body}> 
          </textarea>

        </div>
          {body}
      </div>
  );
};

export default NoteCard;