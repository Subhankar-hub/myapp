import React from "react";

const NoteCard = ({ note }) => {
  let position = JSON.parse(note.position);
  const colors = JSON.parse(note.colors);
  const body = JSON.parse(note.body);

  return (
      <div className="card"
          style={{
              backgroundColor: colors.colorBody,
          }}
      >
        <div className="note-body">
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