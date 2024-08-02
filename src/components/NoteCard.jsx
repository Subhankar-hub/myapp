import { useRef, useEffect, useState } from "react";
import React from "react";
import Trash from "../icons/Trash.jsx";

const NoteCard = ({ note }) => {
  //let position = JSON.parse(note.position);
  const [ position, setPosition ] = useState(JSON.parse(note.position));
  const colors = JSON.parse(note.colors);
  const body = JSON.parse(note.body);

  

  let mouseStartPos = { x : 0, y: 0};
  const cardRef = useRef(null);

  const textAreaRef = useRef(null);

  const mouseUp = () => {
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
  }

  const mouseDown = (e) => {
    mouseStartPos.x = e.clientX;
    mouseStartPos.y = e.clientY;
 
    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
};

  const mouseMove = (e) => {
    // calculate the move direction

    const mouseMoveDirection={
      x: mouseStartPos.x - e.clientX,
      y: mouseStartPos.y - e.clientY,
    };

    // update start position for next move
    mouseStartPos.x = e.clientX;
    mouseStartPos.y = e.clientY;

    // update card top and left position
    setPosition({
      x:cardRef.current.offsetLeft - mouseMoveDirection.x,
      y:cardRef.current.offsetTop - mouseMoveDirection.y,
    });

  };
  
  useEffect(() => {
    autoGrow(textAreaRef);
  },);

  const autoGrow= ( textarea ) => {
    const { current } = textAreaRef;
    current.style.height = "auto"; //reset the height 
    current.style.height = current.scrollHeight + "px";

  }

  return (
      <div
      ref = {cardRef}
      className="card"
          style={{
              backgroundColor: colors.colorBody,
              left:`${position.x}px`,
              top: `${position.y}px`,
              transform: `translate(${position.x}px, ${position.y}px)}`
          }}
      >
       <div
       className="card-header"
       onMouseDown={ mouseDown }
       style={{ backgroundColor: colors.colorHeader }}
       >
        <Trash />
       </div>

        <div className="card-body">
          <textarea 
          ref = { textAreaRef }
          style={{color: colors.colorText }}
          defaultValue={body}
          onInput = { () => {autoGrow(textAreaRef)}}
          > 
          </textarea>

        </div>
          {body}
      </div>
  );
};

export default NoteCard;